import { FetchProductsResponse } from "@/types/productTypes";

// Utility function to fetch products from the API

interface FetchProductsProps {
  q: string;
  p: string;
  active: string;
  stock: string;
  featured: string;
  sale: string;
}

export async function fetchProducts({
  q = "",
  p = "1",
  active = "",
  stock = "",
  featured = "",
  sale = "",
}: FetchProductsProps): Promise<FetchProductsResponse> {
  let data: FetchProductsResponse;

  try {
    const url = `http://localhost:3000/api/products?q=${q}&p=${p}&active=${active}&stock=${stock}&featured=${featured}&sale=${sale}`;

    console.log("\n\n" + url + "\n\n");

    const response = await fetch(url); // Your API endpoint

    if (response.ok) {
      // Parse the response as JSON
      data = await response.json();
      data.status = response.status;
    } else {
      data = { products: [], currentPage: "1", totalPages: "1", error: "There was an error with the response.", status: 500 };
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    data = { products: [], currentPage: "1", totalPages: "1", error: error, status: 500 };
  }

  // Return the fetched data
  return data;
}

export async function getProductById(_id: string) {
  try {
    const response = await fetch(`http://localhost:3000/api/products/${_id}`);
    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Failed to fetch product:", error);
    throw error;
  }
}
