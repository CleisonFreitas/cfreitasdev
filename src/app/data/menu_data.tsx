import Link from "next/link";
import { v4 as uuid } from "uuid";


export const menuItems = [
    {
        id: uuid(),
        title: 'home',
        url: '#',
    },
    {
        id: uuid(),
        title: 'services',
        url: '#',
    },
    {
        id: uuid(),
        title: 'about me',
        url: '#',
    },
    {
        id: uuid(),
        title: 'portfolio',
        url: '#',
    },
    {
        id: uuid(),
        title: 'contact me',
        url: '#',
    },
];

export const renderMenuItems = ({isVertical} : {isVertical: boolean}) => {
    return (
        <ul className={`flex flex-wrap justify-center gap-4 md:gap-8 text-md lg:text-[24px] items-center ${isVertical ? 'flex-col' : 'flex-row'}`}>
            {menuItems.map((item) => (
                <li key={item.id} className="text-gray-400 hover:text-orange-400 text-nowrap first-letter:capitalize">
                    <Link href={item.url}>{item.title}</Link>
                </li>
            ))}
        </ul>
    );
}