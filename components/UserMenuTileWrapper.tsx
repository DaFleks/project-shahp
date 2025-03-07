"use client";

const UserMenuTileWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="grid grid-cols-2 gap-6 grow p-4">{children}</div>
    )
}

export default UserMenuTileWrapper