import Link from "next/link";
import { AiOutlineFacebook } from "react-icons/ai";
import { CiLinkedin, CiYoutube } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";

const socialMediaData = [
    {
        icon: <FaInstagram size={24} />,
        url: '#'
    },
    {
        icon: <CiLinkedin size={24} />,
        url: '#',
    },
    {
        icon: <AiOutlineFacebook size={24} />,
        url: '#'
    },
    {
        icon: <CiYoutube size={24} />,
        url: '#'
    }
];

export const renderSocialMediaItems = () => {
    return <ul className="flex gap-4 items-center">
    {socialMediaData.map((item, key) => {
        return (
            <li key={key} className="text-white text-[20px] border-2 rounded-full p-2 cursor-pointer hover:text-orange-400 hover:border-orange-400"
            >
                <Link href={item.url}>{item.icon}</Link>
            </li>
        )
    })}
</ul>
}