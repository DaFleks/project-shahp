import { cn } from "@/lib/utils";

const Container = ({ children, className }: { children?: React.ReactNode, className?: string }) => {
    return (
        <div className={cn('p-4 grow overflow-y-scroll space-y-4', className)}>{children}</div>
    )
}

export default Container;