import { connectDB } from "@/lib/mongodb"; // Import the MongoDB connection function
import Product from "@/models/product"; // Import the Product model
import { NextResponse } from "next/server"; // Import Next.js response utilities

export async function GET(): Promise<NextResponse> {
  try {
    await connectDB(); // Connect to MongoDB (reuses cached connection)
    const products = await Product.find({}); // Fetch all products from MongoDB
    return NextResponse.json(products, { status: 200 }); // Return products as JSON response
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch products: " + error }, { status: 500 });
  }
}