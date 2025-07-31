'use client';

import { useIsMobile } from "@/hooks/use-mobile";
import Image from "next/image";

const CustomPortrait = ({ image }: { image: string }) => {
    const isMobile = useIsMobile();
    return (
        <div className="relative flex justify-center md:top-16">
            <div className="bg-transparent shadow-md shadow-background rounded-full w-[352.99px] h-[372.99px] lg:w-[508px] lg:h-[508px] relative top-4 overflow-hidden">
                {/* Empty circle */}
            </div>

            <Image
                src={image}
                alt="Profile"
                width={isMobile ? 322.25 : 550}
                height={isMobile ? 484 : 481}
                priority
                className="absolute bottom-0"
            />
        </div>



    );
}

export default CustomPortrait