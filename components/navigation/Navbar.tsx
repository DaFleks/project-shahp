"use client";

import { Button } from "@/components/ui/button";
import { FlameKindlingIcon, HelpCircleIcon, LogOutIcon, MenuSquareIcon, MessageSquareIcon, ServerCogIcon, ShoppingBagIcon, UserCircle2Icon, UserRoundCogIcon } from "lucide-react";
import NavButton from "./NavButton";
import NavButtonsWrapper from "./NavButtonsWrapper";
import NavMenu from "./NavMenu";
import UserMenuAvatar from "./UserMenuAvatar";
import UserMenuTile from "./UserMenuTile";
import UserMenuTileWrapper from "./UserMenuTileWrapper";
import { useState } from "react";
import NavBrand from "./NavBrand";

const Navbar = () => {
    const [userMenuActive, setUserMenuActive] = useState(false);
    const [dashboardMenuActive, setDashboardMenuActive] = useState(false);

    const handleUserMenuActive = (): void => {
        setUserMenuActive(!userMenuActive);
    }

    const handleDashboardMenuActive = (): void => {
        setDashboardMenuActive(!dashboardMenuActive);
    }

    return (
        <>
            <nav className="p-4 w-full h-[4rem] bg-white shadow flex items-center justify-between rounded fixed z-10">
                <NavBrand brand={<ShoppingBagIcon className="size-8" />} title="Shahp" />

                <NavButtonsWrapper>
                    <NavButton icon={<UserCircle2Icon className="size-6" />} onClick={handleUserMenuActive} />
                    <NavButton icon={<MenuSquareIcon className="size-6" />} onClick={handleDashboardMenuActive} />
                </NavButtonsWrapper>

                {userMenuActive &&
                    <NavMenu title="User Menu" onClick={handleUserMenuActive}>
                        <UserMenuAvatar />
                        <UserMenuTileWrapper>
                            <UserMenuTile className="bg-gradient-to-tr from-emerald-700/80 to-cyan-500/80" icon={<UserCircle2Icon className="size-12" />}>Profile</UserMenuTile>
                            <UserMenuTile className="bg-gradient-to-tr from-rose-900/80 to-fuchsia-600/80" icon={<MessageSquareIcon className="size-12" />}>Messages</UserMenuTile>
                            <UserMenuTile className="bg-gradient-to-tr from-red-700/80 to-blue-400/80" icon={<UserRoundCogIcon className="size-12" />}>Account</UserMenuTile>
                            <UserMenuTile className="bg-gradient-to-tr from-emerald-700/80 to-orange-400/80" icon={<ServerCogIcon className="size-12" />}>Preferences</UserMenuTile>
                            <UserMenuTile className="bg-gradient-to-tr from-cyan-700/80 to-indigo-800/80" icon={<HelpCircleIcon className="size-12" />}>Support</UserMenuTile>
                            <UserMenuTile className="bg-gradient-to-tr from-amber-700/80 to-rose-400/80" icon={<LogOutIcon className="size-12" />}>Sign Out</UserMenuTile>
                        </UserMenuTileWrapper>
                    </NavMenu>
                }

                {dashboardMenuActive &&
                    <NavMenu title="Navigation" onClick={handleDashboardMenuActive}>
                        <h1>test</h1>
                    </NavMenu>
                }
            </nav>
            <nav className="h-[4rem] p-4"></nav>
        </>

    )
}

export default Navbar;