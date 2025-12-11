'use client'

import FooterSection from "@/app/components/footer-section";
import Menu from "@/app/components/menu";
import MiddleContent from "@/app/components/middle-content";
import { LangType } from "@/app/types/lang_type";
import TopbarBehavior from "./personal/topbar-behavior";

const App = ({ t }: LangType) => {

    return (
        <>
            {/* Fixed Topbar */}
            <TopbarBehavior>
                <div className="w-full bg-gray-950 flex justify-center items-center py-4">
                    <div className="w-full grid grid-cols-[calc(100dvw-20px)] md:grid-cols-[calc(100dvw-20px)] lg:grid-cols-[1000px] xl:grid-cols-[1200px] justify-center mb-4">
                        <Menu t={t} />
                    </div>
                </div>
            </TopbarBehavior>

            {/* Main Content */}
            <div className="grid grid-cols-[calc(100dvw-10px)] md:grid-cols-[calc(100dvw-20px)] lg:grid-cols-[1040px] xl:grid-cols-[1200px] justify-center bg-gray-950 overflow-y-auto pt-[80px] md:pt-[180px] gap-y-8">
                <div>
                    <MiddleContent t={t} />
                </div>
                <div>
                    <FooterSection t={t} />
                </div>
            </div>
        </>



    )
}

export default App;