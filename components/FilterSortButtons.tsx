"use client";

import { FilterIcon, SortAscIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Container from "./Container";

const FilterSortButtons = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <Button className="font-bold">
        <FilterIcon />
        Filters
      </Button>

      <Select>
        <SelectTrigger className="w-full bg-white !py-2 font-bold" value="date:desc">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="title:asc">Title Asc.</SelectItem>
          <SelectItem value="title:desc">Title Desc.</SelectItem>
          <SelectItem value="sku:asc">SKU Asc.</SelectItem>
          <SelectItem value="sku:desc">SKU Desc.</SelectItem>
          <SelectItem value="price:asc">Price Asc.</SelectItem>
          <SelectItem value="price:desc">Price Desc.</SelectItem>
          <SelectItem value="date:asc">Date Asc.</SelectItem>
          <SelectItem value="date:desc">Date Desc.</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default FilterSortButtons;
