'use client';

import { CustomSeparatorsType } from "../types/custom-separator-type";

const CustomSeparator = ({ items }: CustomSeparatorsType) => {
    return (
        <div className="rounded-lg bg-neutral-800 flex gap-2 h-[80px] px-1 py-2 box-content mx-1">
            {
                items.map((item, key) => {
                    const isLast = key === items.length - 1;
                    return (
                        <div key={key} className={`flex items-center justify-center ${!isLast ? 'border-r border-white' : ''}  py-1`}>
                            <div className="flex flex-col gap-4 justify-center items-start px-2">
                                <p className="text-orange-400 text-xl font-bold">{item.amount}+</p>
                                <p className="text-white text-md capitalize">{item.description}</p>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
}

export default CustomSeparator