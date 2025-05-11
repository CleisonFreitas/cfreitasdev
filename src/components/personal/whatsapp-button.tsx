import { ReactNode } from "react";
import { Button } from "../ui/button";
import { FaWhatsapp } from "react-icons/fa";

const WhatsappButton = ({ children }: { children: ReactNode }) => {
    const phoneNumber = "+5585986986581";
    const whatsappLink = `https://wa.me/${phoneNumber.replace(/\D/g, "")}`;
    return (
        <Button className="flex justify-center gap-2 bg-orange-500 text-white border-2 border-orange-400 py-4 px-16">
            <FaWhatsapp size={20} />
            <p className="capitalize text-md">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    {children}
                </a>
            </p>
        </Button>
    );
}

export default WhatsappButton;