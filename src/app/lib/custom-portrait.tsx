'use client';

import Image from "next/image";

const CustomPortrait = ({ image }: { image: string }) => {
    return (
        <div className="flex justify-center">
            <div className="bg-transparent shadow-md border-2 border-orange-300 shadow-background rounded-full w-[352.99px] h-[352.99px] lg:w-[508px] lg:h-[508px] relative overflow-hidden">
                {/* Image is inside the circle container so it always fills and is centered */}
                <Image
                    src={image}
                    alt="Profile"
                    fill
                    sizes="(max-width: 768px) 352px, (max-width: 1024px) 508px, 508px"
                    priority
                    className="object-cover"
                    style={{ objectPosition: 'center' }}
                />
            </div>
        </div>
    );
}

export default CustomPortrait