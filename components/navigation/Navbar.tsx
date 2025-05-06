"use client";

import { useState } from "react";
import { MenuSquareIcon, ShoppingBagIcon, UserCircle2Icon } from "lucide-react";

import Container from "../Container";

import NavBrand from "./NavBrand";
import NavButton from "./NavButton";

import NavMenu from "./NavMenu";

import UserMenuAvatar from "./UserMenuAvatar";

const Navbar = () => {
  const [userMenuActive, setUserMenuActive] = useState(false);
  const [showNavMenu, setShowNavMenu] = useState(false);

  const handleUserMenuActive = (): void => {
    setUserMenuActive((prevState) => !prevState);
  };

  const handleNavMenu = (): void => {
    setShowNavMenu((prevState) => !prevState);
  };

  return (
    <>
      <Container as="header" className="min-h-[4rem] h-[4rem]"></Container>
      <Container as="header" className="bg-white shadow-md min-h-[4rem] h-[4rem] fixed w-full z-10 left-0 top-0">
        <Container as="nav" className="!p-0 flex items-center justify-between">
          <NavBrand brand={<ShoppingBagIcon className="size-6" />} title="Shahp" />
          <Container className="!p-0 flex items-center gap-12">
            <NavButton icon={<UserCircle2Icon className="size-6" />} onClick={handleUserMenuActive} />
            <NavButton icon={<MenuSquareIcon className="size-6" />} onClick={handleNavMenu} />
          </Container>
        </Container>
      </Container>

      <NavMenu show={showNavMenu} title="Navigation" toggleMenu={handleNavMenu} />
    </>
  );
};

export default Navbar;
