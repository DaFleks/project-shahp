import { Button } from "@/components/ui/button"
import { BellIcon, FlameIcon, UserIcon } from "lucide-react"
import NavButton from "./NavButton";

const Navbar = ({ brand, text }: { brand?: React.ReactNode, text?: string }) => {
    return (
        <nav className="p-4 border flex items-center justify-between">
            <div className="flex items-center gap-2">
                <Button variant="ghost" asChild className="p-0 w-[3rem] h-[3rem]">
                    {brand ? brand : <FlameIcon size={48} />}
                </Button>
                {text && <h3 className="font-bold text-2xl">{text}</h3>}
            </div>
            <div className="flex items-center gap-8">
                <NavButton icon={<BellIcon />} />
                <NavButton icon={<UserIcon />} />
            </div>
        </nav>
    )
}

export default Navbar