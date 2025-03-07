"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";


const UserMenuTile = ({ className = "", icon, children = <></> }: { className?: string, icon?: React.ReactNode, children?: React.ReactNode }) => {
    return (
        <Button variant="ghost" className={cn(`w-full h-full shadow-2xl text-white aspect-square relative`, className)}>
            {icon}
            <p className="font-bold absolute bottom-0 left-0 m-3">{children}</p>
        </Button >
    )
}

export default UserMenuTile;