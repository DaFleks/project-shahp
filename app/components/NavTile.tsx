"use client";

import { Button } from "@/components/ui/button";

const NavTile = ({ text = "" }: { text?: string }) => {
    return (
        <Button variant="ghost" className="shadow border-neutral-100 h-full">
            <span className="text-2xl text-wrap font-bold">{text}</span>
        </Button>
    )
}
export default NavTile