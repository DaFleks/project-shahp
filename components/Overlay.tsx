"use client";

import { cn } from "@/lib/utils";
import { forwardRef, HTMLAttributes } from "react";

interface CustomProps {
  children?: React.ReactNode;
  className?: string;
}

type AnimatedOverlayProps = CustomProps & HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>;

// eslint-disable-next-line react/display-name
const Overlay = forwardRef<HTMLDivElement, AnimatedOverlayProps>((AnimatedOverlayProps, ref) => {
  return (
    <div ref={ref} className={cn(`fixed w-full h-full left-0 !z-50`, AnimatedOverlayProps.className)}>
      {AnimatedOverlayProps.children}
    </div>
  );
});

export default Overlay;
