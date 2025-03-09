"use client";

import { cn } from "@/lib/utils";

const Card = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    return (
        <div className={cn('bg-white p-4 flex gap-4 items-center shadow rounded-xl border border-neutral-100', className)}>{children}</div>
    )
}

export default Card;