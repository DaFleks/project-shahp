"use client";

import { cn } from "@/lib/utils";

const CardContent = ({ children, className }: { children?: React.ReactNode, className?: string }) => {
    return (
        <div className={cn('w-full', className)}>{children}</div>
    )
}

export default CardContent;