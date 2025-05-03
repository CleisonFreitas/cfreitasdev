'use client';

import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger
} from "@/components/ui/tabs";
import CustomPortfolioCard from "./custom-portfolio-card";

const CustomTabs = () => {
    return (
        <Tabs defaultValue="all" className="w-full gap-16 lg:gap-4">
            <TabsList className="grid grid-cols-3 lg:grid-cols-4 justify-between gap-2 w-full bg-gray-950 [&>*]:text-white [&>*]:border [&>*]:border-orange-400 [&>*]:bg-neutral-900 [&>*]:cursor-pointer [&>*]:px-4 [&>*]:py-2 [&>*]:w-[250px]">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="gallery">Galeria</TabsTrigger>
                <TabsTrigger value="web_app">Web Apps</TabsTrigger>
                <TabsTrigger value="mobile_app">Mobile Apps</TabsTrigger>
            </TabsList>
            <TabsContent value="all">
                <CustomPortfolioCard />
            </TabsContent>
            <TabsContent value="gallery">
                <CustomPortfolioCard />
            </TabsContent>
            <TabsContent value="web_app">
                <CustomPortfolioCard />
            </TabsContent>
            <TabsContent value="mobile_app">
                <CustomPortfolioCard />
            </TabsContent>
        </Tabs>
    );
}

export default CustomTabs;