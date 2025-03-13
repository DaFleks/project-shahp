import Container from "@/components/Container";
import FilterSortButtons from "@/components/FilterSortButtons";
import Pagination from "@/components/Pagination";
import Product from "@/components/products/Product";
import { fetchProducts } from "@/lib/fetchProducts";
import IProduct from "@/types/productTypes";
import React from "react";

const page = async () => {
  const products = (await fetchProducts()) as [IProduct];
  return (
    <Container scroll className="space-y-4">
      <Pagination />
      <FilterSortButtons />
      <Container className="!p-0 grid grid-cols-1 gap-4">
        {products.map((product: IProduct) => (
          <Product key={product._id} _id={product._id} name={product.name} sku={product.sku} price={product.sellingPrice} stock={product.stockCount} />
        ))}
      </Container>
    </Container>
  );
};

export default page;
