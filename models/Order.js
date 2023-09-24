import mongoose, { model, models, Schema } from "mongoose";
const OrderSchema = new Schema(
  {
    line_items: Object,
    name: String,
    email: String,
    city: String,
    postalCode: String,
    streetAddress: String,
    country: String,
    productSpecifics: Object,
    paid: Boolean,
  },
  {
    timestamps: true,
  }
);

export const Order = models?.Order || mongoose.model("Order", OrderSchema);
