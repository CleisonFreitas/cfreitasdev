'use cliente';
import { MailIcon, PhoneIcon } from "lucide-react";
import { renderMenuItems } from "../data/menu_data";
import { renderSocialMediaItems } from "../data/social-media_data";
import { Separator } from "@/components/ui/separator";

const FooterSection = () => {
    return (
        <section className="bg-neutral-900 justify-center items-center flex flex-col gap-8 p-4">
            <h2 className="text-orange-400 text-4xl">LOGO</h2>
            {renderMenuItems({isVertical: false})}
            {renderSocialMediaItems()}
            <span className="flex justify-center items-center gap-4 text-gray-400">
                <MailIcon />
                <p>cleison.npi@gmail.com</p>
            </span>
            <span className="flex justify-center items-center gap-4 text-gray-400">
                <PhoneIcon />
                <p>+55 85 98698-6581</p>
            </span>
            <Separator className="text-color-gray-400" />
            <p className="text-muted-foreground text-sm">Design inspired by @mahmood.fazile UI/UX designer</p>
        </section>
    );
}

export default FooterSection