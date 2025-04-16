'use client';

import Image from "next/image";

const CustomPortrait = ({ image }: { image: string }) => {
    return (
        <div className="flex justify-center items-end bg-gray-700 rounded-full w-[355px] h-[382.99px] bg-contain relative overflow-visible">
            <Image
                src={image}
                alt={image}
                width={322.25}
                height={484}
                priority
            />
        </div>

    );
}

export default CustomPortrait