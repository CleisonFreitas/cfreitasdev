'use client';

import { LangType } from "../types/lang_type";
import About from "./about";
import Introduction from "./introduction";
import Services from "./services";

const MiddleContent = ({ t }: LangType) => {
    return (
        <section className="row-start-2 row-end-2 col-start-1 col-end-1 flex flex-col gap-8">
            <Introduction t={t} />
            <Services />
            <About />
            <div className="h-[250px]">
                <p className="text-white font-bold">102030</p>
            </div>
       </section>
    );
}

export default MiddleContent