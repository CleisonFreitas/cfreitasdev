'use client';

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { useIsMobile } from "@/hooks/use-mobile";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import { portfolioCardsData, portfolioCardType } from "../data/portfolio_cards_data";

export interface Artwork {
    artist: string
    art: string
}

const CustomPortfolioCard = ({ category }: { category: string }) => {
    const isMobile = useIsMobile();
    const portfolioData: portfolioCardType[] = category == "all"
        ? portfolioCardsData
        : portfolioCardsData.filter((item) => item.category == category);
    return (
        <ScrollArea className="w-full flex justify-center items-center whitespace-nowrap rounded-md bg-gradient-to-b from-orange-500 via-neutral-900 to-neutral-900 border border-gray-700">
            <div className="flex items-center justify-center w-max space-x-4 p-4">
                {portfolioData.map((item, index) => {
                    return (
                        <figure key={index} className="shrink-0">
                            <div className="overflow-hidden rounded-md">
                                <Image
                                    src={item["image.src"]}
                                    alt={item["image.alt"]}
                                    className="aspect-[3/4] h-fit w-fit object-cover"
                                    width={isMobile ? 200 : 350}
                                    height={400}
                                />
                            </div>
                            <figcaption className="pt-2 px-2 text-md gap-4 text-white flex justify-between flex-col h-full">
                                <span className="font-semibold text-white flex justify-between items-center">
                                    <p>{item.name}</p>
                                    <p className="text-orange-400 capitalize">{item.category}</p>
                                </span>
                                <span className="text-xl flex gap-2 items-center text-gay-300">
                                    {item.category === 'gallery' && (
                                        <Link href={item.link!} target="_blank">
                                            <TbWorldWww size={48} className="border border-orange-400 rounded-full p-2" />
                                        </Link>
                                    )}

                                    <Link href={item.github} target="_blank">
                                        <FaGithub size={48} className="border border-orange-400 rounded-full p-2" />
                                    </Link>
                                </span>
                            </figcaption>
                        </figure>
                    )
                })}
            </div>
            <ScrollBar orientation="horizontal" />
        </ScrollArea>
    );
}

export default CustomPortfolioCard;