"use client";

import { cn } from "@/lib/utils";
import Heading from "../Heading";
import Container from "../Container";

interface NavMenuProps {
    children: React.ReactNode;
    className: string;
    title?: string;
}

const NavSection = ({ children, className, title = "" }: NavMenuProps) => {
    return (
        <>
            <Heading type="h6" className="font-bold">{title}</Heading>
            <Container as="section" className={cn('grid !px-1 !py-0', className)}>
                {children}
            </Container>
        </>
    )
}
export default NavSection