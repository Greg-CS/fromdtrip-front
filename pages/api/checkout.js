import { mongooseConnect } from "../../lib/mongoose";
import { Order } from "../../models/Order";
import { Product } from "../../models/Product";
const stripe = require('stripe')(process.env.STRIPE_SK);

export default async function handler(req, res) {
  // Check if the request method is POST
  if (req.method !== 'POST') {
    res.json('should be a POST request');
    return;
  }

  // Extract request body data
  const {
    firstName,
    lastName,
    email,
    city,
    postalCode,
    address,
    country,
    productSpecifics
  } = req.body;

  // Connect to MongoDB
  await mongooseConnect();
  // Extract unique product IDs from the cart
  const productsId = cartProducts;
  const uniqueIds = [...new Set(productsId)];

  // Retrieve product information from the database
  const productsInfos = await Product.find({ _id: uniqueIds });

  // Initialize an array to store line items for the Stripe session
  let line_items = [];

  // Create line items based on the products in the cart
  for (const productId of uniqueIds) {
    const productInfo = productsInfos.find(p => p._id.toString() === productId);
    const quantity =
      productsId.filter((id) => id === productId)?.length || 0;

    if (quantity > 0 && productInfo) {
      line_items.push({
        quantity,
        price_data: {
          currency: "USD",
          product_data: { name: productInfo.title },
          unit_amount: productInfo.price * 100,
        },
      });
    }
  }

  // Create an order document in the database
  const orderDoc = await Order.create({
    line_items,
    firstName,
    lastName,
    email,
    city,
    postalCode,
    address,
    country,
    size,
    productSpecifics,
    paid: true,
  });

  // Create a Stripe checkout session
  const session = await stripe.checkout.sessions.create({
    line_items,
    mode: 'payment',
    customer_email: email,
    success_url: `${process.env.PUBLIC_URL}/cart?success=1`,
    cancel_url: `${process.env.PUBLIC_URL}/cart?canceled=1`,
    metadata: { orderId: orderDoc._id.toString() },
  });

  // Respond with the URL for the Stripe session
  res.json({
    url: session.url,
  });
}
