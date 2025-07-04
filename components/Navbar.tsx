"use client";

import Link from "next/link";

import { Bell, MessageSquare } from "lucide-react";
import { Button } from "./ui/button";

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const Navbar = () => {
  return (
    <header>
      <nav className="w-full bg-white p-4">
        <ul className="flex items-center gap-4 w-fit float-end">
          <li>
            <Button asChild variant="outline">
              <Link href="#">
                <MessageSquare />
              </Link>
            </Button>
          </li>
          <li>
            <Button asChild variant="outline">
              <Link href="#">
                <Bell />
              </Link>
            </Button>
          </li>
          <li>
            <Link href="#">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
