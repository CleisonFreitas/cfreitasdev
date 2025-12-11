'use client';

import { TbBrandLaravel, TbBrandMysql, TbBrandReactNative } from "react-icons/tb";
import CustomTitle from "../lib/custom-title";
import { RiNextjsFill, RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { FaFlutter } from "react-icons/fa6";
import { BiLogoPostgresql, BiLogoTypescript, BiLogoVuejs } from "react-icons/bi";
import CustomSkillCard, { CustomSkillCardType } from "../lib/custom-skill-card";
import { FaAws } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { GrOracle } from "react-icons/gr";
import { DiMongodb } from "react-icons/di";

const SkillSection = () => {
    const stack: CustomSkillCardType[] = [
        {
            title: 'Laravel',
            icon: <TbBrandLaravel size={74} />
        },
        {
            title: 'Next Js',
            icon: <RiNextjsFill size={74} />
        },
        {
            title: 'React',
            icon: <RiReactjsLine size={74} />
        },
        {
            title: 'Vue Js',
            icon: <BiLogoVuejs  size={74} />
        },
        {
            title: 'Typescript',
            icon: <BiLogoTypescript size={74} />
        },
        {
            title: 'Tailwind Css',
            icon: <RiTailwindCssFill size={74} />
        },
        {
            title: 'React Native',
            icon: <TbBrandReactNative size={74} />
        },
        {
            title: 'Flutter',
            icon: <FaFlutter size={74}/>
        },
        {
            title: 'Postgres',
            icon: <BiLogoPostgresql size={74} />
        },
        {
            title: 'MySQL',
            icon: <TbBrandMysql size={74} />
        },
        {
            title: 'MongoDB',
            icon: <DiMongodb size={74} />
        },
        {
            title: 'AWS',
            icon: <FaAws size={74} />
        },
        {
            title: 'Oracle',
            icon: <GrOracle size={74} />
        },
        {
            title: 'Firebase',
            icon: <IoLogoFirebase size={74} />
        }
    ];
    return (
        <section
            className="flex flex-col justify-between items-center w-full h-auto md:mt-[150px]">
            <CustomTitle title="Stack" />
            <div className="grid grid-cols-[repeat(auto-fit,_minmax(140px,_1fr))] gap-4 px-4 w-full">
                {stack.map((item, index) => (
                    <CustomSkillCard
                        key={index}
                        title={item.title}
                        icon={item.icon}
                    />
                ))}
            </div>
        </section>
    );
}

export default SkillSection;