import { Button } from "@/components/ui/button"
import { BellIcon, FlameIcon, UserIcon } from "lucide-react"
import NavButton from "./NavButton";

const Navbar = ({ brand, text }: { brand?: React.ReactNode, text?: string }) => {
    return (
        <nav className="p-2 border border-neutral-100 shadow flex items-center justify-between w-full rounded">
            <div className="flex items-center">
                <Button variant="ghost">
                    {brand ? brand : <FlameIcon />}
                </Button>
                {text && <h4 className="font-bold text-xl">{text}</h4>}
            </div>
            <div className="flex items-center gap-8">
                <NavButton icon={<BellIcon />} />
                <NavButton icon={<UserIcon />} />
            </div>
        </nav>
    )
}

export default Navbar;