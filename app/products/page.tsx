import { Suspense } from "react";

import Container from "@/components/Container";
import ProductLoading from "@/components/ProductLoading";
import Products from "@/components/Products";

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

const page = async ({ searchParams }: { searchParams: Promise<SearchParamsProps> }) => {
  const params = await searchParams;

  return (
    <Container className="flex-col gap-4 h-full">
      <Suspense fallback={<ProductLoading />}>
        <Products params={params} />
      </Suspense>
    </Container>
  );
};

export default page;
