import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    // Get the user data from the request body
    const { email, password } = req.body;

    // Connect to MongoDB
    const client = await MongoClient.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const db = client.db();

    // Check if the user already exists in the database
    const existingUser = await db.collection("users").findOne({ email });

    if (existingUser) {
      res.status(409).json({ message: "User already exists" });
      client.close();
      return;
    }

    // Create a new user document
    const newUser = {
      email,
      password,
    };

    // Insert the new user into the database
    const result = await db.collection("users").insertOne(newUser);

    res.status(201).json({ message: "User created successfully" });
    client.close();
  }
}
