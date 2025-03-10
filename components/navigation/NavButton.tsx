"use client";

import { Button } from "@/components/ui/button";

interface NavButtonProps {
    icon?: React.ReactNode;
    onClick?: () => void;
}

const NavButton = ({ icon, onClick }: NavButtonProps) => <Button variant="ghost" className="cursor-pointer" size="icon" onClick={onClick}>{icon}</Button>

export default NavButton;