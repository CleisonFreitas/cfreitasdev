'use client'

import FooterSection from "@/app/components/footer-section";
import Menu from "@/app/components/menu";
import MiddleContent from "@/app/components/middle-content";
import { LangType } from "@/app/types/lang_type";

const App = ({ t }: LangType) => {

    return (
        <div className="grid grid-cols-[calc(100dvw-10px)] md:grid-cols-[calc(100dvw-20px)] lg:grid-cols-[1040px] xl:grid-cols-[1200px] justify-center grid-rows-[80px_1fr] md:grid-rows-[180px_1fr] bg-gray-950 overflow-y-auto">
            <Menu t={t} />
            <MiddleContent t={t} />
            <FooterSection t={t} />
        </div>
    )
}

export default App;