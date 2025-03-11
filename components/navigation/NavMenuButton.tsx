"use client";

import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface NavMenuButtonProps {
  href?: string;
  className?: string;
  title?: string;
  icon?: React.ReactNode;
  handler?: () => void;
}

const NavMenuButton = ({ href = "/", icon, className, title, handler = () => {} }: NavMenuButtonProps) => {
  const router = useRouter();
  const pathname = usePathname(); // Detects when route changes
  const [loading, setLoading] = useState(false);

  const handleNavigation = () => {
    setLoading(true);
    router.push(href);
  };

  // This effect only activates when the pathname changes (meaning the navigation is complete)
  useEffect(() => {
    if (loading) {
      setLoading(false);
      handler();
    }
  }, [pathname]);

  return (
    <button className="space-y-4 flex-col !overflow-y-hidden" onClick={handleNavigation}>
      <span
        className={cn("w-2/3 mx-auto rounded-lg aspect-square shadow-md shadow-neutral-500 flex items-center justify-center text-white", className)}>
        {icon}
      </span>
      <span className="text-center text-[clamp(0.7rem,2vw,2rem)] font-bold block overflow-hidden">{title}</span>
    </button>
  );
};

export default NavMenuButton;
