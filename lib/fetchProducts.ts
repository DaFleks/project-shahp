import IProduct from "../types/productTypes";

// Utility function to fetch products from the API
export async function fetchProducts({ q }: { q: string }): Promise<unknown> {
  try {
    const response = await fetch(`http://localhost:3000/api/products?q=${q ? q : ""}`); // Your API endpoint

    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }

    const data = await response.json(); // Parse the response as JSON

    return data as [IProduct]; // Return the fetched data

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    throw new Error(error.message); // Propagate the error if the fetch fails
  }
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
