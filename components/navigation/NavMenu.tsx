"use client";

import { Button } from "@/components/ui/button";
import { XIcon } from "lucide-react";
import Container from "../Container";
import Overlay from "../Overlay";
import Heading from "../Heading";
import { AnimatePresence, motion } from "motion/react";
import NavSection from "./NavSection";
import navMenuData from "./NavMenuData";
import NavMenuButton from "./NavMenuButton";

interface NavMenuProps {
  show: boolean;
  children?: React.ReactNode;
  title?: string;
  toggleMenu: () => void;
}

const NavMenu = ({ show, title = "", toggleMenu }: NavMenuProps) => {
  const MotionOverlay = motion.create(Overlay);
  return (
    <AnimatePresence>
      {show && (
        <MotionOverlay
          initial={{ opacity: 0, clipPath: "inset(0% 0% 100% 0%)" }}
          animate={{ opacity: 1, clipPath: "inset(0% 0% 0% 0%)" }}
          exit={{ opacity: 0, clipPath: "inset(0% 0% 100% 0%)" }}
          transition={{ type: "tween", duration: 0.25 }}
          className="bg-neutral-200 flex-col">
          {/*Title Bar */}
          <Container as="nav" className="min-h-[4rem] h-[4rem] fixed w-full shadow-md flex justify-between z-50 bg-white">
            <Heading type="h4" className="font-bold text-xl mt-1">
              {title}
            </Heading>
            <Button variant="ghost" className="!p-0" onClick={toggleMenu}>
              <XIcon className="size-6" />
            </Button>
          </Container>
          <Container className="min-h-[4rem] h-[4rem]"></Container>

          {/* Content */}
          <Container grow scroll className="space-y-4">
            <NavSection className="grid-cols-4 gap-4" title="Overview">
              {navMenuData.slice(0, 1).map((data) => (
                <NavMenuButton
                  key={data._id}
                  className={data.gradient}
                  overlayToggle={toggleMenu}
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
                  overlayToggle={toggleMenu}
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
                  overlayToggle={toggleMenu}
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
                  overlayToggle={toggleMenu}
                  title={data.title}
                  icon={data.icon}
                  href={data.href}
                />
              ))}
            </NavSection>
          </Container>
        </MotionOverlay>
      )}
    </AnimatePresence>
  );
};

export default NavMenu;
