"use client";

import React from "react";
import { Input } from "./ui/input";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const SearchInput = () => {
  const searchParams = useSearchParams();
  const search = new URLSearchParams(searchParams);
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    search?.set("q", e.target.value);
    replace(`${pathname}?${search.toString()}`);
  };

  return (
    <Input
      type="text"
      className="bg-white shadow-md py-6"
      placeholder="Search products"
      defaultValue={searchParams.get("q")?.toString()}
      onChange={handleChange}></Input>
  );
};

export default SearchInput;
