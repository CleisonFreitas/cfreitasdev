'use client';

import { JSX } from "react";

export type CustomSkillCardType = {
    icon: JSX.Element;
    title: string;
};
const CustomSkillCard = ({ icon, title }: CustomSkillCardType) => {
    return (
        <div className="flex flex-col items-center gap-4">
            <span className="text-4xl text-gray-300 p-4 rounded-full border-3 border-orange-400 align-middle">
                {icon}
            </span>
            <h3 className="text-2xl text-gray-300">{title}</h3>
        </div>
    );
}

export default CustomSkillCard;