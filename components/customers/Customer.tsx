"use client";

import Card from "../Card";
import CardAction from "../CardAction";
import CardContent from "../CardContent";
import CardImage from "../CardImage";

const Customer = () => {
    return (
        <Card>
            <CardImage className="rounded-full" imgClassName="rounded-full object-cover p-1" />
            <CardContent className="text-sm">
                <div className="space-y-1 mb-4">
                    <p>Alex Petropoulos</p>
                    <p>petroalex023@gmail.com</p>
                    <p>416-897-2539</p>
                </div>

                <p className="mb-2"><b>Cust No.: </b>123456</p>
                <div className="flex justify-between">
                    <p><b>Orders: </b>224</p>
                    <p><b>CLV: </b>$45,000</p>
                </div>
            </CardContent>
            <CardAction />
        </Card>
    )
}

export default Customer;