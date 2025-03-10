"use client";

import { cn } from "@/lib/utils";

interface NavMenuButtonProps {
    className?: string;
    title?: string;
    icon?: React.ReactNode;
}

const NavMenuButton = ({ icon, className, title }: NavMenuButtonProps) => {
    return (
        <div className="space-y-4">
            <div className={cn('rounded-xl aspect-square shadow-md shadow-neutral-500 flex items-center justify-center text-white', className)}>
                {icon}
            </div>
            <p className="text-center font-bold text-[clamp(0.7rem,2vw,2rem)] overflow-hidden">{title}</p>
        </div>
    )
}

export default NavMenuButton;