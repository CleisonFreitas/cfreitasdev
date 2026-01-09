import Link from "next/link";
import { AiOutlineFacebook } from "react-icons/ai";
import { CiLinkedin, CiYoutube } from "react-icons/ci";
import { FaGithub, FaInstagram } from "react-icons/fa";

const socialMediaData = [
    {
        icon: <CiLinkedin size={24} />,
        url: 'https://www.linkedin.com/in/cleison-freitas-8a00b474/',
    },

    {
        icon: <FaGithub size={24} />,
        url: 'https://github.com/CleisonFreitas',
    },

    {
        icon: <CiYoutube size={24} />,
        url: 'https://www.youtube.com/@CleisonFreitasCode'
    }
];

export const renderSocialMediaItems = () => {
    return <ul className="flex gap-4 items-center">
    {socialMediaData.map((item, key) => {
        return (
            <li
                key={key}
                className="text-white text-[20px] border-2 rounded-full p-2 cursor-pointer hover:text-orange-400 hover:border-orange-400"
            >
                <Link href={item.url} target="_blank">{item.icon}</Link>
            </li>
        )
    })}
</ul>
}