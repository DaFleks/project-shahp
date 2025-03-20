import { Suspense } from "react";

import { PackagePlusIcon } from "lucide-react";

import { Button } from "./ui/button";

import Container from "./Container";

import FilterSortButtons from "./FilterSortButtons";
import SearchInput from "./SearchInput";
import Pagination from "./Pagination";
import Product from "./products/Product";
import ProductLoading from "./ProductLoading";

import IProduct from "@/types/productTypes";
import { fetchProducts } from "@/lib/fetchProducts";

interface SearchParamsProps {
  q: string;
  p: string;
  active: string;
  stock: string;
  featured: string;
  sale: string;
  sort: string;
  order: string;
}

const Products = async ({ params }: { params: SearchParamsProps }) => {
  const { products, currentPage, totalPages, error, status } = await fetchProducts(params);
  if (error) console.error(`${status}: ${error}`);

  return (
    <>
      <Container className="!p-0 space-y-4 min-h-fit">
        <SearchInput />
        <FilterSortButtons />
      </Container>
      <Container scroll className="!p-0 space-y-4 h-full !pb-15">
        {products.length !== 0 ? (
          <>
            {products.map((product: IProduct) => (
              <Suspense key={product._id} fallback={<ProductLoading />}>
                <Product
                  _id={product._id}
                  image={product.images[0]}
                  name={product.name}
                  sku={product.sku}
                  price={product.sellingPrice}
                  stock={product.stockCount}
                />
              </Suspense>
            ))}
            <p className="text-center font-bold">End of Page</p>
          </>
        ) : (
          <p className="text-center font-bold">No Products!</p>
        )}

        <Button className="fixed bottom-18 right-4 w-[4rem] h-[4rem] rounded-xl">
          <PackagePlusIcon className="size-8" />
        </Button>
      </Container>
      <Container className="!p-0 min-h-fit">
        <Pagination currentPage={currentPage} totalPages={totalPages} />
      </Container>
    </>
  );
};

export default Products;
