"use client";

import { cn } from "@/lib/utils";

const Heading = ({ children, type = "h1", className = "" }: { children?: React.ReactNode, type: string, className?: string }) => {
    let tag = <></>;

    switch (type) {
        case "h1":
            tag = <h1 className={cn('text-5xl', className)}>{children}</h1>;
            break;
        case "h2":
            tag = <h2 className={cn('text-4xl', className)}>{children}</h2>;
            break;
        case "h3":
            tag = <h3 className={cn('text-3xl', className)}>{children}</h3>;
            break;
        case "h4":
            tag = <h4 className={cn('text-2xl', className)}>{children}</h4>;
            break;
        case "h5":
            tag = <h5 className={cn('text-xl', className)}>{children}</h5>;
            break;
        case "h6":
            tag = <h6 className={cn('text-lg', className)}>{children}</h6>;
            break;
    }
    return tag;
}

export default Heading;