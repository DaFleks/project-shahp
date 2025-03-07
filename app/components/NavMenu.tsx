"use client";

import { Button } from "@/components/ui/button";
import { XIcon } from "lucide-react";
import Image from "next/image";
import avatar from '../../public/snrub.png';
import NavTile from "./NavTile";

const NavMenu = () => {
    return (
        <nav className="w-full h-screen flex flex-col p-4 gap-8">
            <div className="flex justify-between p-4 border">
                <h4 className="font-bold text-xl">Alex Petropoulos</h4>
                <Button variant="ghost">
                    <XIcon />
                </Button>
            </div>

            <div className="">
                <Image className="rounded-full aspect-[1/1] mx-auto w-1/3 mb-4" src={avatar} alt="" />
                <h1 className="font-bold text-4xl text-center">Hi, Alex!</h1>
            </div>

            <div className="grid grid-cols-2 gap-6 px-4 grow">
                <NavTile text="View Profile" />
                <NavTile text="Your Tickets" />
                <NavTile text="Account Settings" />
                <NavTile text="Dashboard Settings" />
                <NavTile text="Help & Support" />
                <NavTile text="Sign Out" />
            </div>


        </nav>
    )
}

export default NavMenu