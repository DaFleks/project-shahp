"use client";

import { Button } from "@/components/ui/button";
import { FlameKindlingIcon } from "lucide-react";

const Navbar = ({ children, brand = <FlameKindlingIcon className="size-8" />, title = "" }: { children?: React.ReactNode, brand?: React.ReactNode, title?: string }) => {
    return (
        <>
            <nav className="p-4 w-full h-[4rem] bg-white shadow flex items-center justify-between rounded relative">
                <div className="flex items-center">
                    <Button variant="ghost" className="!p-0">
                        {brand}
                    </Button>
                    <h4 className="font-bold text-xl mt-1">{title}</h4>
                </div>
                {children}
            </nav>
        </>

    )
}

export default Navbar;