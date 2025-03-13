"use client";

import { ChevronRightIcon } from "lucide-react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const CardAction = ({ href = "/" }: { href?: string }) => {
  const router = useRouter();

  const handleNavigation = () => {
    router.push(href);
  };

  return (
    <Button className="shadow-md" size="icon" onClick={handleNavigation}>
      <ChevronRightIcon />
    </Button>
  );
};

export default CardAction;
