'use client';

import { useIsMobile } from "@/hooks/use-mobile";
import Image from "next/image";

const Logo = () => {
    const isMobile = useIsMobile();
    return (
        <div className="flex justify-center items-center">
            <Image
                src={'/assets/images/logo.png'}
                alt="logo" width={isMobile ? 64 : 68}
                height={15}
                priority
                className="w-auto h-auto relative xl:right-4"
            />
            <h1 className="text-orange-400 text-[24px] hidden md:block">Cleison Freitas</h1>
        </div>
    )
}

export default Logo;