"use client";

import { FileQuestionIcon } from "lucide-react";
import Card from "./card/Card";
import CardContent from "./card/CardContent";
import Heading from "./Heading";
import { cn } from "@/lib/utils";

interface SingleStatProps {
  className?: string;
  icon?: React.ReactNode;
  value?: string | number;
  title?: string;
}

const SingleStat = ({ className, icon = <FileQuestionIcon className="size-12" />, value = "", title = "" }: SingleStatProps) => {
  return (
    <Card className={cn("select-none", className)}>
      <CardContent className="flex justify-between items-center">
        {icon}
        <div className="text-right">
          <Heading type="h5" className="font-bold ">
            {value}
          </Heading>
          <p>{title}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default SingleStat;
