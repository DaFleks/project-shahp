import { cn } from "@/lib/utils";

const CardList = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    return (
        <div className={cn('grid grid-cols-1 gap-4', className)}>{children}</div>
    )
}

export default CardList;