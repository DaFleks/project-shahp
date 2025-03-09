"use client";

import Card from "../card/Card";
import CardImage from "../card/CardImage";
import CardAction from "../card/CardAction";
import CardContent from "../card/CardContent";

const Product = () => {
    return (
        <Card>
            <CardImage className="rounded-xl" imgClassName="rounded-xl object-contain p-1"/>
            <CardContent>
                <div className="flex flex-col justify-between w-fit overflow-hidden">
                    <p className="font-bold mb-2 h-[3.0rem] overflow-hidden">Final Fantasy VII Rebirth (PS5) </p>

                    <div className="flex flex-col gap-1">
                        <p className="text-sm"><b>SKU: </b>PS5-001</p>
                        <p className="text-sm"><b>Price: </b>$49.99</p>
                        <p className="text-sm"><b>Stock: </b>980</p>
                    </div>
                </div>
            </CardContent>
            <CardAction />
        </Card>
    )
}

export default Product;