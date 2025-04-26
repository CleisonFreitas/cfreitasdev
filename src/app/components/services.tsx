'use client';
import CustomTitle from "../lib/custom-title";
import { renderServicesItems } from "../data/service_data";

const Services = () => {
    return (
        <section className="flex flex-col justify-between gap-8 mt-8 w-full h-auto">
            <CustomTitle title="Services" subtitle={'Breve descrição sobre os serviços'} />
            <div className="grid grid-cols-[repeat(auto-fit,_minmax(180px,_1fr))] gap-4 px-4">
                {renderServicesItems()}
            </div>
        </section>
    );
}
export default Services;