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

    // Find the user in the database
    const user = await db.collection("users").findOne({ email });

    if (!user) {
      res.status(404).json({ message: "User not found" });
      client.close();
      return;
    }

    // Check if the provided password matches the stored password
    if (user.password !== password) {
      res.status(401).json({ message: "Invalid password" });
      client.close();
      return;
    }

    // User authenticated successfully
    res.status(200).json({ message: "Login successful" });
    client.close();
  }
}
