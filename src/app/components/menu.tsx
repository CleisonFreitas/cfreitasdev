'use client';
import { LangType } from "@/app/types/lang_type";
import { Button } from "@/components/ui/button";
import { RiMenu2Line } from "react-icons/ri";


const Menu = ({ t }: LangType) => {
    return (
        <div className="row-start-1 row-end-1 col-start-1 col-end-1 flex h-[80px] justify-between items-center p-4">
            <RiMenu2Line size={24} color="#FFF"/>
            <h1 className="text-orange-400 text-[24px]">Logo</h1>
            <Button className="capitalize bg-gradient-to-r from-orange-400 to-orange-500">{t["buttons.hire"]}</Button>
        </div>
    );
}

export default Menu;