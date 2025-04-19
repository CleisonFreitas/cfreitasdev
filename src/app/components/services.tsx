'use client';
import CustomTitle from "../lib/custom-title";
import { TbWorldWww } from "react-icons/tb";
import CustomCard, { CustomCardType } from "../lib/custom-card";
import { IoCodeWorkingSharp } from "react-icons/io5";

const Services = () => {
    const services: CustomCardType[] = [
        {
            title: 'API',
            description: 'Desenvolvimento de apis',
            icon: <IoCodeWorkingSharp size={74} color={'#FD6F00'} />
        },
        {
            title: 'E-commerces',
            description: 'Desenvolvimento de sites e e-commerces',
            icon: <TbWorldWww size={74} color={'#FD6F00'} />
        },
        {
            title: 'E-commerces',
            description: 'Desenvolvimento de sites e e-commerces',
            icon: <TbWorldWww size={74} color={'#FD6F00'} />
        },
        {
            title: 'API',
            description: 'Desenvolvimento de apis',
            icon: <IoCodeWorkingSharp size={74} color={'#FD6F00'} />
        },
    ]
    return (
        <section className="flex flex-col justify-between gap-8 mt-8 w-full h-auto">
            <CustomTitle title="Services" subtitle={'Breve descrição sobre os serviços'} />
            <div className="grid grid-cols-[repeat(auto-fit,_minmax(180px,_1fr))] gap-4 px-4">
                {services.map((item, index) => (
                    <CustomCard
                        key={index}
                        title={item.title}
                        description={item.description}
                        icon={item.icon}
                    />
                ))}
            </div>
        </section>
    );
}
export default Services;