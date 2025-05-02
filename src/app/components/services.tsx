'use client';
import CustomTitle from "../lib/custom-title";
import { renderServicesItems } from "../data/service_data";

const Services = () => {
    return (
        <section className="flex flex-col justify-between gap-8 mt-[90px] w-full h-auto">
            <CustomTitle title="Services" subtitle={'Breve descrição sobre os serviços'} />
            <div className="grid grid-cols-[repeat(auto-fit,_minmax(120px,_1fr))] md:grid-cols-3 gap-4 lg:gap-8 px-2">
                {renderServicesItems()}
            </div>
        </section>
    );
}
export default Services;