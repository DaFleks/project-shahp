"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

const CardImage = ({ src = "", className, imgClassName }: { src?: string; className?: string; imgClassName?: string }) => {
  return (
    <div className={cn("relative min-w-1/4 aspect-square border bg-white shadow-md", className)}>
      <Image src={src} alt="Game" className={cn("", imgClassName)} fill />
    </div>
  );
};

export default CardImage;
