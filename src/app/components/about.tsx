'use client';

import { Button } from "@/components/ui/button";
import CustomPortrait from "../lib/custom-portrait";
import CustomTitle from "../lib/custom-title";
import { FaGithub } from "react-icons/fa";
import { LangType } from "../types/lang_type";
import Link from "next/link";

const About = ({ t }: LangType) => {
    return (
        <section className="mt-[90px] flex flex-col justify-between items-center w-full px-0 md:px-4">
            <CustomTitle title={t['menus.about']} subtitle={t["about.layer"]} />
            <span className="h-[90px]" />
            <div className="flex flex-col md:flex-row mt-0 md:mt-8 md:gap-2 w-full items-center md:items-start justify-between gap-14">
                <CustomPortrait image="/assets/images/perfil.png" />
                <span className="flex justify-center items-center w-full md:w-[631px] flex-col md:items-start px-4 gap-4">
                    <p
                        className="text-wrap text-gray-500 md:text-xl text-justify xl:text-2xl"
                    >
                        {t['about.description']}
                    </p>
                    <Link href={'https://github.com/CleisonFreitas'} target="_blank" rel="noopener noreferrer">
                        <Button className="bg-orange-500 text-white flex items-center gap-4 md:mt-2 cursor-pointer hover:text-orange-300 text-xl w-[300px] py-5">
                            <FaGithub />

                            <p className="capitalize">{t['profile.github']}</p>
                        </Button>
                    </Link>
                </span>
            </div>
        </section>
    );
}

export default About;