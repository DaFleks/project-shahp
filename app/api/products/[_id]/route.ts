// /app/api/products/[id]/route.ts

import { connectDB } from "@/lib/mongodb"; // Import the MongoDB connection function
import Product from "@/models/product"; // Import the Product model
import { NextResponse } from "next/server";

interface Params {
  params: {
    _id: string;
  };
}

export async function GET(req: Request, { params }: Params) {
  // Connect to MongoDB
  await connectDB();
  try {
    const { _id } = params;

    // Validate ObjectId
    if (!_id.match(/^[0-9a-fA-F]{24}$/)) {
      return NextResponse.json({ error: "Invalid product ID" }, { status: 400 });
    }

    const product = await Product.findById(_id);

    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    return NextResponse.json(product);
  } catch (error) {
    return NextResponse.json({ error: "Server error: " + error }, { status: 500 });
  }
}
