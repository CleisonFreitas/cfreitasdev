'use client';
import { Button } from "@/components/ui/button";
import { renderMenuItems } from "../data/menu_data";
import Logo from "@/components/personal/logo";
import TopNavigateMenu from "@/components/personal/top-navigate-menu";

const Menu = ({
    t,
}: {
    t: Record<string, string>,
}) => {

    return (
        <div className="row-start-1 row-end-2 col-start-1 col-end-2 grid grid-cols-[1fr_1fr] lg:grid-cols-[auto_1fr_auto] w-full h-[80px] items-center lg:px-0 px-2">
            {/* Left side: Logo and TopNavigateMenu */}
            <div className="col-start-1 col-end-2 flex justify-start items-center gap-1">
                <TopNavigateMenu t={t} />
                <Logo />
            </div>

            {/* Middle side: Menu (only visible on lg and up) */}
            <div className="hidden lg:flex col-start-2 col-end-3 justify-center">
                {renderMenuItems({ isVertical: false, t })}
            </div>

            {/* Right side: Button */}
            <div className="col-start-2 col-end-3 lg:col-start-3 lg:col-end-4 flex justify-end">
                <Button className="capitalize bg-orange-500 cursor-pointer hover:text-orange-300">
                    {t["buttons.hire"]}
                </Button>
            </div>
        </div>

    );
}

export default Menu;