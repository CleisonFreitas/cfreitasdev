import Link from "next/link";
import { v4 as uuid } from "uuid";

export const renderMenuItems = (
    { isVertical, t }:
    { 
        isVertical: boolean, 
        t: Record<string, string>
    }) => {
    const menuItems = [
        {
            id: uuid(),
            title: 'menus.home',
            url: '#',
        },
        {
            id: uuid(),
            title: 'menus.service',
            url: '#',
        },
        {
            id: uuid(),
            title: 'menus.about',
            url: '#',
        },
        {
            id: uuid(),
            title: 'menus.portfolio',
            url: '#',
        },
        {
            id: uuid(),
            title: 'menus.contact',
            url: '#',
        },
    ];
    return (
        <ul className={`flex flex-wrap justify-center gap-4 md:gap-8 text-md lg:text-[24px] items-center ${isVertical ? 'flex-col' : 'flex-row'}`}>
            {menuItems.map((item) => (
                <li key={item.id} className="text-gray-400 hover:text-orange-400 text-nowrap first-letter:capitalize">
                    <Link href={item.url}>{t[item.title]}</Link>
                </li>
            ))}
        </ul>
    );
}