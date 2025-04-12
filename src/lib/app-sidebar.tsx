'use client';
import { LangType } from "@/app/types/lang_type";
import { Button } from "@/components/ui/button";
import { AppColors } from "@/constants/app_colors";
import { Menu, SidebarCloseIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const AppSideBar = ({ t, lang }: LangType) => {
    const pathName = usePathname();
    const [open, setOpen] = useState<boolean>(false);

    const links = [
        { href: `/${lang}`, label: t["menus.home"] },
        { href: `/${lang}/services`, label: t["menus.service"]},
        { href: `/${lang}/about`, label: t["menus.about"] },
        { href: `/${lang}/contact`, label: t["menus.contact"] },
      ];

    return (
        <>
            <Button onClick={() => setOpen(true)} className="mb:hidden">
                <Menu size={80} color={AppColors.primary} />
            </Button>
            <aside className={
                `
                bg-gray-900
                text-white
                w-64
                h-screen
                p-4
                transition-transform
                duration-300
                ${open ? 'translate-x-0' : '-translate-x-full'} 
                md:translate-x-0 fixed z-50
                `
            }>
                <div className="flex flex-col justify-between items-center mb-6 md:hidden">
                    <h2 className="text-lg font-bold">Menu</h2>
                    <Button onClick={() => setOpen(false)}><SidebarCloseIcon size={80} /></Button>
                    <nav>
                        <ul className="">
                            {links.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className={`block px-3 py-2 rounded hover:bg-white text-white ${pathName === link.href ? 'bg-white' : ''}`}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </aside>
        </>

    )
};

export const AppSidebarToggle = ({ onClick }: { onClick: () => void }) => (
    <button className="md:hidden p-2 text-gray-700" onClick={onClick}>
        <Menu size={28} />
    </button>
);

export default AppSideBar;