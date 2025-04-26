import { IoCodeWorkingSharp } from "react-icons/io5";
import CustomCard, { CustomCardType } from "../lib/custom-card";
import { TbWorldWww } from "react-icons/tb";
import { v4 as uuidv4 } from 'uuid';

export const serviceItems: CustomCardType[] = [
        {
            id: uuidv4(),
            title: 'API',
            description: 'Desenvolvimento de apis',
            icon: <IoCodeWorkingSharp size={74} color={'#FD6F00'} />
        },
        {   id: uuidv4(),
            title: 'E-commerces',
            description: 'Desenvolvimento de sites e e-commerces',
            icon: <TbWorldWww size={74} color={'#FD6F00'} />
        },
        {   id: uuidv4(),
            title: 'E-commerces',
            description: 'Desenvolvimento de sites e e-commerces',
            icon: <TbWorldWww size={74} color={'#FD6F00'} />
        },
        {   id: uuidv4(),
            title: 'API',
            description: 'Desenvolvimento de apis',
            icon: <IoCodeWorkingSharp size={74} color={'#FD6F00'} />
        },
];

export const renderServicesItems = () => {
    return serviceItems.map((item) => (
        <CustomCard
            id={item.id}
            key={item.id}
            title={item.title}
            description={item.description}
            icon={item.icon}
        />
    ));
}