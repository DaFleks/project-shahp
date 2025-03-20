"use client";

import { ChevronLeftIcon, ChevronRightIcon, ChevronsLeftIcon, ChevronsRightIcon, FilterIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "./ui/select";

import Container from "./Container";
import ProductSkeleton from "./ProductSkeleton";

const ProductLoading = () => {
  return (
    <>
      <Container className="!p-0 space-y-4 min-h-fit">
        <Input disabled type="text" className="bg-white shadow-md py-6" placeholder="Search by Name or SKU" />
        <div className="grid grid-cols-2 gap-4">
          <Button disabled className="font-bold">
            <FilterIcon />
            Filters
          </Button>
          <Select disabled defaultValue="createdAt:asc">
            <SelectTrigger className="w-full bg-white !py-2 font-bold">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="createdAt:asc">Date Asc.</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </Container>
      <Container scroll className="!p-0 space-y-4 h-full">
        {Array(15)
          .fill(undefined)
          .map((e, idx) => (
            <ProductSkeleton key={idx} />
          ))}
      </Container>
      <Container className="!p-0 min-h-fit">
        <Container className="!p-0 grid grid-cols-5 gap-4 justify-between">
          <Button disabled>
            <ChevronsLeftIcon />
          </Button>
          <Button disabled>
            <ChevronLeftIcon />
          </Button>
          <p className="flex items-center justify-center font-bold">&#160;/&#160;</p>
          <Button disabled>
            <ChevronRightIcon />
          </Button>
          <Button disabled>
            <ChevronsRightIcon />
          </Button>
        </Container>
      </Container>
    </>
  );
};

export default ProductLoading;
