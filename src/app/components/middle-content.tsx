'use client';

import { LangType } from "../types/lang_type";
import About from "./about";
import Contact from "./contact";
import Introduction from "./introduction";
import Portfolio from "./portfolio";
import Services from "./services";
import SkillSection from "./skill-section";

const MiddleContent = ({ t }: LangType) => {
    return (
        <section className="row-start-2 row-end-2 col-start-1 col-end-1 flex flex-col gap-8 w-full">
                <Introduction t={t} />
                <Services t={t} />
                <About t={t} />
                <SkillSection />
                <Portfolio t={t} />
                <Contact t={t} />
        </section>
    );
}

export default MiddleContent