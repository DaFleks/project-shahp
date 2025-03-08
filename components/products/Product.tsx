"use client";

import Image from "next/image";
import ff7Cover from '../../public/ff7.png';
import { Button } from "../ui/button";
import { ChevronRightIcon } from "lucide-react";

const Product = () => {
    return (

        <div className="flex gap-4 items-center shadow p-4 rounded-xl border border-neutral-100 bg-white">

            <div className="relative min-w-1/4 aspect-square border bg-white rounded-xl shadow-lg">
                <Image src={ff7Cover.src} alt="Game" className="rounded-xl p-2" fill style={{ objectFit: 'contain' }} />
            </div>

            <div className="flex flex-col justify-between w-fit overflow-hidden">
                <p className="font-bold mb-2 h-[3.0rem] overflow-hidden">Final Fantasy VII Rebirth (PS5)</p>

                <div className="flex flex-col gap-1">
                    <p className="text-sm"><b>SKU: </b>PS5-001</p>
                    <p className="text-sm"><b>Price: </b>$49.99</p>
                    <p className="text-sm"><b>Stock: </b>980</p>
                </div>

            </div>
            <Button variant="ghost" className="shadow bg-white" size="icon">
                <ChevronRightIcon />
            </Button>
        </div>

    )
}

export default Product;