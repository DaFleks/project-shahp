import Container from "@/components/Container";
import FilterSortButtons from "@/components/FilterSortButtons";
import Pagination from "@/components/Pagination";
import Product from "@/components/products/Product";
import SearchInput from "@/components/SearchInput";
import { Button } from "@/components/ui/button";
import { fetchProducts } from "@/lib/fetchProducts";
import IProduct from "@/types/productTypes";
import { PackagePlusIcon } from "lucide-react";
import React from "react";

const page = async ({ searchParams }: { searchParams: Promise<{ q: string; p: string }> }) => {
  const params = await searchParams;
  const {
    data: { products, currentPage, totalPages },
  } = await fetchProducts(params);

  return (
    <Container className="flex-col gap-4 h-full">
      <Container className="!p-0 space-y-4 min-h-fit">
        <SearchInput />
        <Pagination currentPage={currentPage} totalPages={totalPages} />
        <FilterSortButtons />
      </Container>

      <Container scroll className="!p-0 space-y-4 h-full !pb-15">
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
        <Button className="fixed bottom-4 right-4 w-[4rem] h-[4rem] rounded-xl">
          <PackagePlusIcon className="size-8" />
        </Button>
      </Container>
    </Container>
  );
};

export default page;
