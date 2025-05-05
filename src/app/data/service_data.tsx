import { GrHostMaintenance } from "react-icons/gr";
import CustomCard, { CustomCardType } from "../lib/custom-card";
import { TbWorldWww } from "react-icons/tb";
import { v4 as uuidv4 } from 'uuid';
import { LangType } from "../types/lang_type";
import { FaShop } from "react-icons/fa6";
import { BiSolidBarChartAlt2 } from "react-icons/bi";
import { MdFilterFrames } from "react-icons/md";
import { AiFillApi } from "react-icons/ai";

export const serviceItems: CustomCardType[] = [
    {
        id: uuidv4(),
        title: "services.custom_website",
        description: 'services.custom_website.description',
        icon: <TbWorldWww size={74} color={'#FD6F00'} />
    },
    {
        id: uuidv4(),
        title: 'services.api_development',
        description: 'services.api_development.description',
        icon: <AiFillApi size={74} color={'#FD6F00'} />
    },
    {
        id: uuidv4(),
        title: 'services.e_commerce',
        description: 'services.e_commerce.description',
        icon: <FaShop size={74} color={'#FD6F00'} />
    },
    {
        id: uuidv4(),
        title: 'services.saas',
        description: 'services.saas.description',
        icon: <BiSolidBarChartAlt2 size={74} color={'#FD6F00'} />
    },
    {
        id: uuidv4(),
        title: 'services.landing_page',
        description: 'services.landing_page.description',
        icon: <MdFilterFrames size={74} color={'#FD6F00'} />
    },
    {
        id: uuidv4(),
        title: 'services.maintenance',
        description: 'services.maintenance.description',
        icon: <GrHostMaintenance size={74} color={'#FD6F00'} />
    },
];

export const renderServicesItems = ({ t }: LangType) => {
    return serviceItems.map((item) => (
        <CustomCard
            id={item.id}
            key={item.id}
            title={t[item.title]}
            description={t[item.description]}
            icon={item.icon}
        />
    ));
}