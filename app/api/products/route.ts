import { connectDB } from "@/lib/mongodb"; // Import the MongoDB connection function
import Product from "@/models/product"; // Import the Product model
import { NextRequest, NextResponse } from "next/server"; // Import Next.js response utilities

const MAX_PRODUCTS_PER_PAGE = 20;

export async function GET(request: NextRequest): Promise<NextResponse> {
  try {
    // Connect to MongoDB (reuses cached connection)
    await connectDB();

    //  Search input
    const searchParams = request.nextUrl.searchParams;

    const queryOptions = {
      $or: [{ name: { $regex: searchParams.get("q"), $options: "i" } }, { sku: { $regex: searchParams.get("q"), $options: "i" } }],
      ...(searchParams.get("active") && { isActive: searchParams.get("active") === "true" ? true : false }),
      ...(searchParams.get("featured") && { isFeatured: searchParams.get("featured") === "true" ? true : false }),
      ...(searchParams.get("sale") && { onSale: searchParams.get("sale") === "true" ? true : false }),
      ...(searchParams.get("stock") && { stockCount: searchParams.get("stock") === "true" ? { $gt: 0 } : 0 }),
    };

    //  Pagination
    const page = parseInt(searchParams.get("p") as string);
    const offset = (page - 1) * MAX_PRODUCTS_PER_PAGE;
    const totalProducts = await Product.countDocuments(queryOptions);

    // Total items
    const totalPages = Math.ceil(totalProducts / MAX_PRODUCTS_PER_PAGE); // Total pages

    // Fetch all products from MongoDB
    const products = await Product.find(queryOptions)
      .skip(offset) // Skip items before the current page
      .limit(MAX_PRODUCTS_PER_PAGE); // Limit the number of items on this page

    // Return products as JSON response
    return NextResponse.json({ products, currentPage: page, totalPages: totalPages }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch products: " + error }, { status: 500 });
  }
}
