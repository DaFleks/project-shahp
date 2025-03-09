"use client";

import { ChevronRightIcon } from "lucide-react";
import { Button } from "../ui/button";


const CardAction = () => {
    return (
        <Button variant="ghost" className="shadow bg-white" size="icon">
            <ChevronRightIcon />
        </Button>
    )
}

export default CardAction;