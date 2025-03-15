"use client";

import { useState } from "react";

import { FilterIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

import Card from "./card/Card";
import Heading from "./Heading";

const FilterSortButtons = () => {
  const [showFilters, setShowFilters] = useState(false);

  const handleShowFilters = () => {
    setShowFilters(!showFilters);
  };
  return (
    <div className="grid grid-cols-2 gap-4">
      <Button className="font-bold" onClick={handleShowFilters}>
        <FilterIcon />
        Filters
      </Button>

      <Select value="date:desc">
        <SelectTrigger className="w-full bg-white !py-2 font-bold">
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
      {showFilters && (
        <Card className="col-span-full">
          <Heading type="h6" className="font-bold">
            Filters
          </Heading>
        </Card>
      )}
    </div>
  );
};

export default FilterSortButtons;
