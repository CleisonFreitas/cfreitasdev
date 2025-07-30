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
        <Card
            key={id}
            className="group relative w-full h-auto bg-neutral-900 box-content border-none overflow-hidden cursor-pointer"
        >
            <CardContent className="flex flex-col justify-center items-center gap-2 text-center p-4">
                <div className="flex flex-col items-center justify-center gap-4 transition-opacity duration-300 group-hover:opacity-20">
                    <span>{icon}</span>
                    <h3 className="text-orange-400 text-xl font-extrabold">{title}</h3>
                </div>

                {/* Hidden description that appears on hover */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/70 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                    <h4 className="text-white text-lg font-semibold">{description}</h4>
                </div>
            </CardContent>
        </Card>

    );
}

export default CustomCard;