"use client";

import { useState } from "react";

import { CheckCircle, EllipsisIcon, SquareXIcon, FilterIcon, XCircleIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

import Card from "./card/Card";
import { Table, TableBody, TableCell, TableRow } from "./ui/table";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import CardContent from "./card/CardContent";
import clsx from "clsx";

enum SwitchState {
  OFF = "OFF",
  NEUTRAL = "NEUTRAL",
  ON = "ON",
}

const filterData = [
  { _id: 0, name: "Active", param: "active", state: SwitchState.NEUTRAL },
  { _id: 2, name: "Featured", param: "featured", state: SwitchState.NEUTRAL },
  { _id: 4, name: "On Sale", param: "sale", state: SwitchState.NEUTRAL },
  { _id: 6, name: "In Stock", param: "stock", state: SwitchState.NEUTRAL },
];

const FilterSortButtons = () => {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const pathname = usePathname();
  const { replace } = useRouter();

  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState(filterData);

  const handleShowFilters = () => {
    setShowFilters(!showFilters);
  };

  const handleFilterChange = (param: string, value: string) => {
    switch (value) {
      case "false":
        setFilters((prevFilters) => prevFilters.map((filter) => (filter.param === param ? { ...filter, state: SwitchState.OFF } : filter)));
        params.set(param, value);
        break;
      case "-":
        setFilters((prevFilters) => prevFilters.map((filter) => (filter.param === param ? { ...filter, state: SwitchState.NEUTRAL } : filter)));
        params.delete(param);
        break;
      case "true":
        setFilters((prevFilters) => prevFilters.map((filter) => (filter.param === param ? { ...filter, state: SwitchState.ON } : filter)));
        params.set(param, value);
        break;
    }

    replace(`${pathname}?${params.toString()}`);
  };

  const handleClearFilters = () => {
    params.forEach((_, key) => {
      if (key !== "sort" && key !== "order") params.delete(key);
    });

    setFilters((prevFilters) => prevFilters.map((filter) => ({ ...filter, state: SwitchState.NEUTRAL })));
    replace(`${pathname}?${params.toString()}`);
  };

  const handleSort = (value: string) => {
    params.set("sort", value.split(":")[0]);
    params.set("order", value.split(":")[1]);
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="grid grid-cols-2 gap-4">
      <Button className={clsx(showFilters ? "bg-neutral-700/90" : "bg-neutral-700", "font-bold")} onClick={handleShowFilters}>
        <FilterIcon />
        Filters
      </Button>

      <Select defaultValue="createdAt:asc" onValueChange={handleSort}>
        <SelectTrigger className="w-full bg-white !py-2 font-bold">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="name:asc">Name Asc.</SelectItem>
          <SelectItem value="name:desc">Name Desc.</SelectItem>
          <SelectItem value="sku:asc">SKU Asc.</SelectItem>
          <SelectItem value="sku:desc">SKU Desc.</SelectItem>
          <SelectItem value="sellingPrice:asc">Price Asc.</SelectItem>
          <SelectItem value="sellingPrice:desc">Price Desc.</SelectItem>
          <SelectItem value="createdAt:asc">Date Asc.</SelectItem>
          <SelectItem value="createdAt:desc">Date Desc.</SelectItem>
        </SelectContent>
      </Select>

      {showFilters && (
        <Card className="col-span-full">
          <CardContent className="space-y-4">
            <Table className="font-bold">
              <TableBody>
                {filters.map((filter) => (
                  <TableRow key={filter._id}>
                    <TableCell className="w-full">{filter.name}</TableCell>
                    <TableCell className="w-fit">
                      <ToggleGroup
                        type="single"
                        onValueChange={(value: string) => {
                          handleFilterChange(filter.param, value);
                        }}>
                        <ToggleGroupItem
                          value="false"
                          aria-label="Toggle bold"
                          className={clsx(filter.state === SwitchState.OFF ? "!bg-neutral-100" : "!bg-white")}>
                          <XCircleIcon className="text-red-700" />
                        </ToggleGroupItem>
                        <ToggleGroupItem
                          value="-"
                          aria-label="Toggle italic"
                          className={clsx(filter.state === SwitchState.NEUTRAL ? "!bg-neutral-100" : "!bg-white")}>
                          <EllipsisIcon />
                        </ToggleGroupItem>
                        <ToggleGroupItem
                          value="true"
                          aria-label="Toggle underline"
                          className={clsx(filter.state === SwitchState.ON ? "!bg-neutral-100" : "!bg-white")}>
                          <CheckCircle className="text-emerald-700" />
                        </ToggleGroupItem>
                      </ToggleGroup>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

            <Button className="w-full font-bold" onClick={handleClearFilters}>
              <SquareXIcon />
              Clear Filters
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default FilterSortButtons;
