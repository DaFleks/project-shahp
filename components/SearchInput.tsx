"use client";

import React from "react";
import { Input } from "./ui/input";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

const SearchInput = () => {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleChange = useDebouncedCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    params?.set("q", e.target.value);
    replace(`${pathname}?${params.toString()}`);
  }, 100);

  return (
    <Input
      type="text"
      className="bg-white shadow-md py-6"
      placeholder="Search by Name or SKU"
      defaultValue={searchParams.get("q")?.toString()}
      onChange={handleChange}></Input>
  );
};

export default SearchInput;
