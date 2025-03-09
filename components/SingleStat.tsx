"use client";

import { FileQuestionIcon } from "lucide-react";
import Card from "./card/Card";
import CardContent from "./card/CardContent";
import Heading from "./Heading";

interface SingleStatProps {
    icon?: React.ReactNode,
    value?: string | number,
    title?: string
}

const SingleStat = ({ icon = <FileQuestionIcon className="size-12" />, value = "", title = "" }: SingleStatProps) => {
    return (
        <Card className="select-none">
            <CardContent className="flex justify-between items-center">
                {icon}
                <div className="text-right">
                    <Heading type="h5" className="font-bold ">{value}</Heading>
                    <p>{title}</p>
                </div>
            </CardContent>
        </Card>
    )
}

export default SingleStat