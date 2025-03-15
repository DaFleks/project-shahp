import IProduct from "@/types/productTypes";
import { getProductById } from "@/lib/fetchProducts";

import ProductViewEdit from "@/components/products/ProductViewEdit";

const page = async ({ params }: { params: { _id: string } }) => {
  const { _id } = await params;
  const product: IProduct = await getProductById(_id);

  return <ProductViewEdit product={product} />;
};

export default page;
