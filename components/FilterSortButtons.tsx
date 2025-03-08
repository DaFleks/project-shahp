"use client";

import { FilterIcon, SortAscIcon } from "lucide-react";
import { Button } from "./ui/button";

const FilterSortButtons = () => {
    return (
        <div className="grid grid-cols-2 gap-4">
            <Button className="font-bold"><FilterIcon />Filters</Button>
            <Button className="font-bold"><SortAscIcon /> Sort</Button>
        </div>
    )
}

export default FilterSortButtons;