"use client";

import Image from "next/image";
import avatar from '../public/snrub.png';
import { Button } from "@/components/ui/button";
import { PencilIcon } from "lucide-react";

const UserMenuAvatar = () => {
    return (

        <div className="w-full p-4 pt-8">
            <div className="relative w-1/3 aspect-square mx-auto mb-8 border-5 border-neutral-500 rounded-full">
                <Image className="rounded-full aspect-square shadow-xl" src={avatar.src} alt="User Profile Picture" fill />
                <Button variant="ghost" size="icon" className="absolute bottom-0 right-0 bg-neutral-500 rounded-full text-white"><PencilIcon /></Button>
            </div>

            <h1 className="font-bold text-4xl text-center">Hi, Alex!</h1>
        </div>
    )
}

export default UserMenuAvatar;