import { MailIcon, PhoneIcon } from "lucide-react";
import { renderMenuItems } from "../data/menu_data";
import { renderSocialMediaItems } from "../data/social-media_data";
import { Separator } from "@/components/ui/separator";
import Logo from "@/components/personal/logo";
import { LangType } from "../types/lang_type";

const FooterSection = ({ t }: LangType) => {
    return (
        <section className="mt-[90px] bg-neutral-900 justify-center items-center flex flex-col gap-8 p-4">
            <Logo />
            {renderMenuItems({ isVertical: false , t})}
            {renderSocialMediaItems()}
            <div className="flex flex-col lg:flex-row gap-6 items-center">
                <span className="flex justify-center items-center gap-4 text-gray-400">
                    <MailIcon />
                    <p>cleison.npi@gmail.com</p>
                </span>
                <span className="flex justify-center items-center gap-4 text-gray-400">
                    <PhoneIcon />
                    <p>+55 85 98698-6581</p>
                </span>
            </div>
            <Separator className="text-gray-800" color="black" />
            <p className="text-muted-foreground text-sm">Design inspired by @mahmood.fazile UI/UX designer</p>
        </section>
    );
}

export default FooterSection