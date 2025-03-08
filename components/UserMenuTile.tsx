"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";


const UserMenuTile = ({ className = "", icon, children = <></> }: { className?: string, icon?: React.ReactNode, children?: React.ReactNode }) => {
    return (
        <Button variant="ghost" className={cn(`w-full h-full shadow-2xl text-white aspect-square relative flex-col-hidden gap-4 !break-words`, className)}>
            {icon}
            <span className="font-bold text-wrap">{children}</span>

        </Button >
    )
}

export default UserMenuTile;