'use client';

import { FaWhatsapp } from "react-icons/fa";
import { LangType } from "../types/lang_type";
import { Button } from "@/components/ui/button";
import { MdOutlineDownload } from "react-icons/md";
import CustomSeparator from "../lib/custom-separator";
import { CustomSeparatorType } from "../types/custom-separator-type";
import CustomPortrait from "../lib/custom-portrait";
import { renderSocialMediaItems } from "../data/social-media_data";

const Introduction = ({ t }: LangType) => {
    const items: CustomSeparatorType[] = [
        {
            amount: 5,
            description: 'experiences'
        },
        {
            amount: 20,
            description: 'project done'
        },
        {
            amount: 80,
            description: 'experiences'
        }
    ];
    return (
        <section className="flex flex-col justify-between items-center h-full md:flex-row">
            <div className="flex flex-col justify-between items-center gap-10">
                <div className="flex flex-col gap-1 justify-center items-center">
                    <h3 className="text-white opacity-50 first-letter:capitalize text-[24px]">{t['introduction.hi']}</h3>
                    <h2 className="text-white opacity-70 text-[30px]">Cleison Freitas</h2>
                </div>
                <h1 className="text-orange-400 text-[35px] text-center">Full Stack Developer</h1>
                {renderSocialMediaItems()}
                <div className="flex justify-between gap-4">
                    <Button className="flex justify-center gap-2 bg-orange-400 text-white border-2 border-orange-400 p-4">
                        <FaWhatsapp size={20} />
                        <p className="capitalize">whatsApp</p>
                    </Button>
                    <Button className="flex justify-center gap-2 bg-transparent text-white border-2 border-white p-4">
                        <MdOutlineDownload size={20} />
                        <p className="capitalize">{t["introduction.file"]}</p>
                    </Button>
                </div>
                <CustomSeparator items={items} />
            </div>
            <span className="h-[100px] block md:hidden" />
            <CustomPortrait image="/assets/images/perfil.png" />
        </section>
    )
}
export default Introduction