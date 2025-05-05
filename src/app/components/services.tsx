'use client';
import CustomTitle from "../lib/custom-title";
import { renderServicesItems } from "../data/service_data";
import { LangType } from "../types/lang_type";

const Services = ({t} : LangType) => {
    return (
        <section className="flex flex-col justify-between gap-8 mt-[90px] w-full h-auto">
            <CustomTitle title={t['menus.service']} subtitle={t['services.layer']} />
            <div className="grid  md:grid-cols-3 gap-4 lg:gap-8 px-2">
                {renderServicesItems({t})}
            </div>
        </section>
    );
}
export default Services;