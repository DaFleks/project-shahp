"use client";

import Link from "next/link";
import { Button } from "../ui/button";

interface NavBrandProps {
    brand?: React.ReactNode;
    title?: string;
}

const NavBrand = ({ brand, title }: NavBrandProps) => {
    return (
        <div className="flex items-center gap-2">
            <Link href="/">
                <Button variant="ghost" className="!p-0">
                    {brand}
                </Button>
            </Link>
            <h4 className="font-bold text-xl mt-1">{title}</h4>
        </div>
    )
}

export default NavBrand;