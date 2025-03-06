"use client";

import { Button } from "@/components/ui/button";

const NavButton = ({ icon }: { icon?: React.ReactNode }) => {
    return (
        <Button variant="ghost" asChild className="border rounded-full w-[4rem] h-[4rem]">{icon}</Button>
    )
}

export default NavButton;