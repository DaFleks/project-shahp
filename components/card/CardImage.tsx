"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

const CardImage = ({ src = "", alt = "", className, imgClassName }: { src?: string; alt?: string; className?: string; imgClassName?: string }) => {
  return (
    <div className={cn("relative min-w-1/4 aspect-square border bg-white shadow-md", className)}>
      <Image src={src} alt={alt} className={cn("", imgClassName)} fill />
    </div>
  );
};

export default CardImage;