import { BellIcon, ShoppingBagIcon, HelpCircleIcon, LogOutIcon, ServerCogIcon, TicketIcon, UserCircle2Icon, UserRoundCogIcon, MenuSquareIcon, MoonIcon, ChevronLeft } from "lucide-react";

import Navbar from "./Navbar";

import NavButtonsWrapper from "./NavButtonsWrapper";
import NavButton from "./NavButton";

import NavMenu from "./NavMenu";
import UserMenuAvatar from "./UserMenuAvatar";
import UserMenuTileWrapper from "./UserMenuTileWrapper";
import UserMenuTile from "./UserMenuTile";

const Navigation = () => {
    return (
        <Navbar brand={<ChevronLeft className="size-8 mr-2" />} title="Products">
            <NavButtonsWrapper>
                <NavButton icon={<UserCircle2Icon className="size-6" />} />
                <NavButton icon={<MenuSquareIcon className="size-6" />} />
            </NavButtonsWrapper>

            {/* <NavMenu title="User Menu">
                <UserMenuAvatar />
                <UserMenuTileWrapper>
                    <UserMenuTile className="bg-gradient-to-tr from-emerald-700/80 to-cyan-500/80" icon={<UserCircle2Icon className="size-18" />}>Your Profile</UserMenuTile>
                    <UserMenuTile className="bg-gradient-to-tr from-rose-900/80 to-fuchsia-600/80" icon={<TicketIcon className="size-18" />}>Your Tickets</UserMenuTile>
                    <UserMenuTile className="bg-gradient-to-tr from-red-700/80 to-blue-400/80" icon={<UserRoundCogIcon className="size-18" />}>Account Settings</UserMenuTile>
                    <UserMenuTile className="bg-gradient-to-tr from-emerald-700/80 to-orange-400/80" icon={<ServerCogIcon className="size-18" />}>Dashboard Settings</UserMenuTile>
                    <UserMenuTile className="bg-gradient-to-tr from-cyan-700/80 to-indigo-800/80" icon={<HelpCircleIcon className="size-18" />}>Help & Support</UserMenuTile>
                    <UserMenuTile className="bg-gradient-to-tr from-amber-700/80 to-rose-400/80" icon={<LogOutIcon className="size-18" />}>Sign Out</UserMenuTile>
                </UserMenuTileWrapper>
            </NavMenu> */}
        </Navbar>
    )
}

export default Navigation;