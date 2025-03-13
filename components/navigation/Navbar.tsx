"use client";

import { useState } from "react";
import { MenuSquareIcon, ShoppingBagIcon, UserCircle2Icon } from "lucide-react";

import Container from "../Container";

import NavBrand from "./NavBrand";
import NavButton from "./NavButton";

import NavOverlay from "./NavOverlay";
import NavSection from "./NavSection";
import NavMenuButton from "./NavMenuButton";

import UserMenuAvatar from "./UserMenuAvatar";

import navMenuData from "./NavMenuData";

const Navbar = () => {
  const [userMenuActive, setUserMenuActive] = useState(false);
  const [dashboardMenuActive, setDashboardMenuActive] = useState(false);

  const handleUserMenuActive = (): void => {
    setUserMenuActive((prevState) => !prevState);
  };

  const handleDashboardMenuActive = (): void => {
    setDashboardMenuActive((prevState) => !prevState);
  };

  return (
    <>
      <Container as="header" className="min-h-[4rem] h-[4rem]"></Container>
      <Container as="header" className="bg-white shadow-md min-h-[4rem] h-[4rem] fixed w-full z-10 left-0 top-0">
        <Container as="nav" className="!p-0 flex items-center justify-between">
          <NavBrand brand={<ShoppingBagIcon className="size-6" />} title="Shahp" />
          <Container className="!p-0 flex items-center gap-12">
            <NavButton icon={<UserCircle2Icon className="size-6" />} onClick={handleUserMenuActive} />
            <NavButton icon={<MenuSquareIcon className="size-6" />} onClick={handleDashboardMenuActive} />
          </Container>
        </Container>
      </Container>

      {dashboardMenuActive && (
        <NavOverlay title="Navigation" onClick={handleDashboardMenuActive}>
          <NavSection className="grid-cols-4 gap-4" title="Overview">
            {navMenuData.slice(0, 1).map((data) => (
              <NavMenuButton
                key={data._id}
                className={data.gradient}
                handler={handleDashboardMenuActive}
                title={data.title}
                icon={data.icon}
                href={data.href}
              />
            ))}
          </NavSection>
          <NavSection className="grid-cols-4 gap-4" title="Data Management">
            {navMenuData.slice(1, 5).map((data) => (
              <NavMenuButton
                key={data._id}
                className={data.gradient}
                handler={handleDashboardMenuActive}
                title={data.title}
                icon={data.icon}
                href={data.href}
              />
            ))}
          </NavSection>
          <NavSection className="grid-cols-4 gap-4" title="Analytics">
            {navMenuData.slice(5, 11).map((data) => (
              <NavMenuButton
                key={data._id}
                className={data.gradient}
                handler={handleDashboardMenuActive}
                title={data.title}
                icon={data.icon}
                href={data.href}
              />
            ))}
          </NavSection>
          <NavSection className="grid-cols-4 gap-4" title="Settings & Configuration">
            {navMenuData.slice(11, 14).map((data) => (
              <NavMenuButton
                key={data._id}
                className={data.gradient}
                handler={handleDashboardMenuActive}
                title={data.title}
                icon={data.icon}
                href={data.href}
              />
            ))}
          </NavSection>
        </NavOverlay>
      )}

      {userMenuActive && (
        <NavOverlay title="User Menu" onClick={handleUserMenuActive}>
          <UserMenuAvatar />
        </NavOverlay>
      )}
    </>
  );
};

export default Navbar;
