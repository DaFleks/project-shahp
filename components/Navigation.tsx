import { BellIcon, ShoppingBagIcon, HelpCircleIcon, LogOutIcon, ServerCogIcon, TicketIcon, UserCircle2Icon, UserRoundCogIcon, MenuSquareIcon, MoonIcon, ChevronLeft, MessageSquareIcon } from "lucide-react";

import Navbar from "./Navbar";

import NavButtonsWrapper from "./NavButtonsWrapper";
import NavButton from "./NavButton";

import NavMenu from "./NavMenu";
import UserMenuAvatar from "./UserMenuAvatar";
import UserMenuTileWrapper from "./UserMenuTileWrapper";
import UserMenuTile from "./UserMenuTile";

const Navigation = () => {
    return (
        <Navbar brand={<ShoppingBagIcon className="size-8 mr-2" />} title="Shahp">
            <NavButtonsWrapper>
                <NavButton icon={<UserCircle2Icon className="size-6" />} />
                <NavButton icon={<MenuSquareIcon className="size-6" />} />
            </NavButtonsWrapper>

            <NavMenu title="User Menu">
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
        </Navbar >
    )
}

export default Navigation;