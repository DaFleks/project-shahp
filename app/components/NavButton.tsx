"use client";

import { Button } from "@/components/ui/button";

const NavButton = ({ icon }: { icon?: React.ReactNode }) => {
    return (
        <Button variant="ghost" className="cursor-pointer">{icon}</Button>
    )
}

export default NavButton;