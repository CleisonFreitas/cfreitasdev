'use client';
import { LangType } from "@/app/types/lang_type";
import { Button } from "@/components/ui/button";
import { RiMenu2Line } from "react-icons/ri";
import { renderMenuItems } from "../data/menu_data";
import Logo from "@/components/personal/logo";

const Menu = ({ t }: LangType) => {
    return (
        <div className="row-start-1 row-end-1 col-start-1 col-end-1 flex h-[80px] justify-between pt-0 md:pt-8 items-center w-full">
            <RiMenu2Line size={24} color="#FFF" className="lg:hidden"/>
            <Logo />
            <div className="hidden lg:block">{renderMenuItems({isVertical: false, t})}</div>
            <Button className="capitalize bg-orange-500 cursor-pointer hover:text-orange-300">{t["buttons.hire"]}</Button>
        </div>
    );
}

export default Menu;