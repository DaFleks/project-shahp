"use client";

import { cn } from "@/lib/utils";
import { forwardRef, HTMLAttributes } from "react";

interface CustomProps {
  children?: React.ReactNode;
  className?: string;
}

type AnimatedCardProps = CustomProps & HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>;

// eslint-disable-next-line react/display-name
const Card = forwardRef<HTMLDivElement, AnimatedCardProps>((AnimatedCardProps, ref) => {
  return (
    <div ref={ref} className={cn("bg-white p-4 flex gap-4 items-center shadow rounded-xl border border-neutral-100 overflow-y-hidden", AnimatedCardProps.className)}>
      {AnimatedCardProps.children}
    </div>
  );
});

export default Card;
