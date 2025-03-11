
import clsx from "clsx";
import { JSX } from "react";

interface ContainerProps {
    children?: React.ReactNode;
    className?: string;
    as?: keyof JSX.IntrinsicElements;
    style?: React.CSSProperties;
    grow?: boolean;
    scroll?: boolean;
}

const Container = ({ children, className, style, grow, scroll, as: Tag = "div" }: ContainerProps) => {
    return (
        <Tag className={clsx(grow && "grow", scroll ? "overflow-y-scroll" : "overflow-y-hidden", 'p-4 overflow-x-hidden', className)} style={style}>{children}</Tag>
    )
}

export default Container;