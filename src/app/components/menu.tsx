'use client';
import { renderMenuItems } from "../data/menu_data";
import Logo from "@/components/personal/logo";
import TopNavigateMenu from "@/components/personal/top-navigate-menu";
import LangSwitcher from "@/components/personal/lang-switcher";

const Menu = ({
    t,
}: {
    t: Record<string, string>,
}) => {

    return (
        <div className="row-start-1 row-end-2 col-start-1 col-end-2 grid grid-cols-[1fr_1fr] xl:grid-cols-[auto_1fr_auto] w-full h-[80px] items-center">
            {/* Left side: Logo and TopNavigateMenu */}
            <div className="col-start-1 col-end-2 flex justify-start items-center gap-1">
                <TopNavigateMenu t={t} />
                <Logo />
            </div>

            {/* Middle side: Menu (only visible on lg and up) */}
            <div className="hidden xl:flex col-start-2 col-end-3 justify-center">
                {renderMenuItems({ isVertical: false, t })}
            </div>

            {/* Right side: Button */}
            <div className="col-start-2 col-end-3 xl:col-start-3 xl:col-end-4 flex justify-end">
                <LangSwitcher />
            </div>
        </div>

    );
}

export default Menu;