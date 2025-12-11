'use client';

import { renderMenuItems } from "@/app/data/menu_data";
import { LangType } from "@/app/types/lang_type";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger
} from "../ui/sheet";
import { RiMenu2Line } from "react-icons/ri";

const TopNavigateMenu = ({ t }: LangType) => {
    return (
        <div className="grid grid-cols-1 justify-center items-center">
            <Sheet>
                <SheetTrigger asChild>
                    <RiMenu2Line size={24} className="xl:hidden cursor-pointer text-orange-300" />
                </SheetTrigger>
                <SheetContent side="top" className="border-none shadow-sm shadow-gray-900 bg-gray-950 py-3 text-gray-400 hover:text-orange-400" >
                    <SheetHeader className="border-none shadow-sm shadow-background text-background">
                        <SheetTitle className="text-background text-center">Menu</SheetTitle>
                        <SheetDescription hidden />
                    </SheetHeader>
                    {renderMenuItems({ isVertical: true, t })}
                </SheetContent>
            </Sheet>
        </div>
    )
}

export default TopNavigateMenu;