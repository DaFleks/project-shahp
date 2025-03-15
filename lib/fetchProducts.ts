import IProduct from "@/types/productTypes";
interface FetchProductsResponse {
  data: {
    products: IProduct[];
    currentPage: string;
    totalPages: string;
  };
}

// Utility function to fetch products from the API
export async function fetchProducts({ q, p }: { q: string; p: string }): Promise<FetchProductsResponse> {
  const query = q ? q : "";
  const page = p ? p : "1";

  try {
    const response = await fetch(`http://localhost:3000/api/products?q=${query}&p=${page}`); // Your API endpoint
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }

    // Parse the response as JSON
    const data = await response.json();

    // Return the fetched data
    return { data: { products: data.products, currentPage: data.currentPage.toString(), totalPages: data.totalPages.toString() } };

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
