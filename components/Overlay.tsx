"use client";

import { cn } from "@/lib/utils";
import { JSX } from "react";

interface OverlayProps {
    as?: keyof JSX.IntrinsicElements;
    children?: React.ReactNode;
    className?: string;
}

const Overlay = ({ children, className, as: Tag = "div" }: OverlayProps) =>
    <Tag className={cn(`fixed w-full h-full left-0 !z-50`, className)}>
        {children}
    </Tag>

export default Overlay;