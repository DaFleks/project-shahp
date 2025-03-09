"use client";

const NavButtonsWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex items-center gap-12">{children}</div>
    )
}

export default NavButtonsWrapper;