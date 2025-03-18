import { PackagePlusIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

import IProduct from "@/types/productTypes";
import { fetchProducts } from "@/lib/fetchProducts";

import Container from "@/components/Container";
import FilterSortButtons from "@/components/FilterSortButtons";
import Pagination from "@/components/Pagination";
import Product from "@/components/products/Product";
import SearchInput from "@/components/SearchInput";

interface SearchParamsProps {
  q: string;
  p: string;
  active: string;
  stock: string;
  featured: string;
  sale: string;
}

const page = async ({ searchParams }: { searchParams: Promise<SearchParamsProps> }) => {
  const params = await searchParams;
  const { products, currentPage, totalPages, error, status } = await fetchProducts(params);

  if (error) console.error(`${status}: ${error}`);

  return (
    <Container className="flex-col gap-4 h-full">
      <Container className="!p-0 space-y-4 min-h-fit">
        <SearchInput />
        <Pagination currentPage={currentPage} totalPages={totalPages} />
        <FilterSortButtons />
      </Container>

      <Container scroll className="!p-0 space-y-4 h-full !pb-15">
        {products.length !== 0 ? (
          <>
            {products.map((product: IProduct) => (
              <Product
                key={product._id}
                _id={product._id}
                image={product.images[0]}
                name={product.name}
                sku={product.sku}
                price={product.sellingPrice}
                stock={product.stockCount}
              />
            ))}
            <p className="text-center font-bold">End of Page</p>
          </>
        ) : (
          <p className="text-center font-bold">No Products!</p>
        )}

        <Button className="fixed bottom-4 right-4 w-[4rem] h-[4rem] rounded-xl">
          <PackagePlusIcon className="size-8" />
        </Button>
      </Container>
    </Container>
  );
};

export default page;
