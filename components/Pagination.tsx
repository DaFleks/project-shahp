"use client";

import { Button } from "./ui/button";

const Pagination = () => {
    return (
        <div className="grid grid-cols-5 gap-4 justify-between">
            <Button className="font-bold">{"<<"}</Button>
            <Button className="font-bold">{"<"}</Button>
            <Button className="font-bold">10/12</Button>
            <Button className="font-bold">{">"}</Button>
            <Button className="font-bold">{">>"}</Button>
        </div>
    )
}

export default Pagination;