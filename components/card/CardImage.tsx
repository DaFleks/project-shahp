"use client";

import Image, { StaticImageData } from "next/image";
import ff7Cover from "../../public/ff7.png";
import { cn } from "@/lib/utils";

const CardImage = ({ src = ff7Cover, className, imgClassName }: { src?: StaticImageData; className?: string; imgClassName?: string }) => {
  return (
    <div className={cn("relative min-w-1/4 aspect-square border bg-white shadow-md", className)}>
      <Image src={src} alt="Game" className={cn("", imgClassName)} fill />
    </div>
  );
};

export default CardImage;
