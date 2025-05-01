'use client';
import { Card, CardContent } from "@/components/ui/card";
import { JSX } from "react";

export type CustomCardType = {
    id: string,
    title: string;
    description: string;
    icon: JSX.Element;
}

const CustomCard = ({
    id,
    title,
    icon,
    description
}: CustomCardType) => {
    return (
        <Card key={id} className="w-full h-auto bg-neutral-900 box-content border-none">
            <CardContent
                className="flex justify-between items-center text-center flex-col gap-2">
                <div className="flex flex-col items-center justify-center gap-4">
                    <span className="">{icon}</span>
                    <h3 className="text-orange-400 text-xl font-extrabold">{title}</h3>
                </div>
                <h4 className="truncate h-[60px] text-xl text-balance text-center text-popover">{description}</h4>
            </CardContent>
        </Card>
    );
}

export default CustomCard;