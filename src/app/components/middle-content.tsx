'use client';

import FadeInSection from "@/components/personal/fade-in-section";
import About from "./about";
import Introduction from "./introduction";
import Portfolio from "./portfolio";
import Services from "./services";

const MiddleContent = ({ t }: { t: Record<string, string> }) => {
    const sections = [
        { path: 'home', component: <Introduction t={t} /> },
        { path: 'service', component: <Services t={t} /> },
        { path: 'about', component: <About t={t} /> },
        { path: 'portfolio', component: <Portfolio t={t} /> },
    ]
    return (
        <section className="row-start-2 row-end-2 col-start-1 col-end-1 flex flex-col gap-8 w-full">
            {sections.map((section, index) => (
                <FadeInSection key={index}>
                    <div
                        id={section.path}
                        className="scroll-mt-20">
                        {section.component}
                    </div>
                </FadeInSection>
            ))};
        </section>
    );
}

export default MiddleContent