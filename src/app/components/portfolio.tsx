'use client';

import CustomTabs from "../lib/custom-tabs";
import CustomTitle from "../lib/custom-title";
import { LangType } from "../types/lang_type";
import SkillSection from "./skill-section";

const Portfolio = ({ t }: LangType) => {

    return (
        <>
            <SkillSection />
            <section className="mt-4 justify-center items-center flex flex-col md:mt-[90px]">
                <CustomTitle title={t['menus.portfolio']} />
                <div className="flex justify-center flex-col gap-2 items-center w-full">
                    <CustomTabs t={t} />
                </div>
            </section>
        </>
    );
}

export default Portfolio;