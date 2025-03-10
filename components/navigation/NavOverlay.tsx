"use client";

import { Button } from "@/components/ui/button";
import { XIcon } from "lucide-react";
import Container from "../Container";
import bg from '../../public/navi-bg.jpg'
import Overlay from "../Overlay";
import Heading from "../Heading";

const NavOverlay = ({ children, title = "", onClick }: { children?: React.ReactNode, title?: string, onClick: () => void }) => {
    return (
        <Overlay as="div" className="bg-white/100 flex-col">
            <Container as="nav" className="min-h-[4rem] h-[4rem] fixed w-full shadow-md flex justify-between z-50 bg-white" >
                <Heading type="h4" className="font-bold text-xl mt-1">{title}</Heading>
                <Button variant="ghost" className="!p-0" onClick={onClick}>
                    <XIcon className="size-6" />
                </Button>
            </Container>

            <Container className="min-h-[4rem] h-[4rem]"></Container>

            <Container grow className="relative bg-cover bg-center " style={{ backgroundImage: `url(${bg.src})` }}>
                <Container scroll className="absolute space-y-4 h-full w-full bg-white/80 left-0 top-0">
                    {children}
                </Container>
            </Container>
        </Overlay>
    )
}

export default NavOverlay;