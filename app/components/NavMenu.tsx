"use client";

import { Button } from "@/components/ui/button";
import { XIcon } from "lucide-react";
import { useState } from "react";

const NavMenu = ({ children, title = "" }: { children?: React.ReactNode, title?: string }) => {
    const [isActive, setIsActive] = useState(true);

    const handleIsActive = () => {
        setIsActive(false);
    }

    return (
        <>
            {isActive &&
                <nav className="w-full h-full fixed overflow-y-scroll left-0 top-0 z-20 bg-white">

                    {/* Title Bar */}
                    <div className="p-4 w-full h-[4rem] max-h-[4rem] fixed z-50 flex justify-between items-center bg-white shadow">
                        <h4 className="font-bold text-xl mt-1">{title}</h4>
                        <Button variant="ghost" className="!p-0" onClick={handleIsActive}>
                            <XIcon className="size-6" />
                        </Button>
                    </div>
                    <div className="p-4 w-full h-[4rem] "></div>

                    {children}
                </nav>
            }
        </>
    )
}

export default NavMenu;