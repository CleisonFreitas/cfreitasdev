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
        <Tabs defaultValue="all" className="w-full gap-16">
            <TabsList className="grid w-full grid-cols-3 bg-gray-950 justify-between gap-2">
                <TabsTrigger value="all" className="text-white border border-orange-400 bg-gray-900">All</TabsTrigger>
                <TabsTrigger value="gallery" className="text-white border border-orange-400 bg-gray-900">Galeria</TabsTrigger>
                <TabsTrigger value="web_app" className="text-white border border-orange-400 bg-gray-900">Web Apps</TabsTrigger>
                <TabsTrigger value="mobile_app" className="text-white border border-orange-400 bg-gray-900">Mobile Apps</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="px-4">
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