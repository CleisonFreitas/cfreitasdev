'use client';

import { Button } from "@/components/ui/button";
import CustomPortrait from "../lib/custom-portrait";
import CustomTitle from "../lib/custom-title";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { LangType } from "../types/lang_type";

const About = ({ t }: LangType) => {
    return (
        <section className="mt-[90px] flex flex-col justify-between items-center w-full">
            <CustomTitle title={t['menus.about']} subtitle={t["about.layer"]} />
            <span className="h-[90px]" />
            <div className="flex flex-col md:flex-row mt-0 md:mt-14 md:justify-between md:gap-8 w-full items-center md:items-start justify-between gap-14">
                <CustomPortrait image="/assets/images/perfil.png" />
                <span className="flex justify-center items-center w-full lg:w-[631px] flex-col md:items-start px-4 gap-4">
                    <p
                        className="text-wrap text-gray-500 text-justify lg:text-2xl"
                    >
                        {t['about.description']}
                    </p>
                    <Button className="bg-orange-500 text-white flex items-center gap-4 md:mt-2 cursor-pointer hover:text-orange-300 text-xl w-[300px] py-5">
                        <FaCloudDownloadAlt />
                        <p className="capitalize">{t['introduction.file']}</p>
                    </Button>
                </span>
            </div>
        </section>
    );
}

export default About;