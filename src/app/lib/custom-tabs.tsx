import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger
} from "@/components/ui/tabs";
import CustomPortfolioCard from "./custom-portfolio-card";
import { LangType } from "../types/lang_type";

const CustomTabs = ({ t }: LangType) => {
    const categories = [
        'all',
        'gallery',
        'web',
        'mobile'
    ];
    return (
        <Tabs defaultValue="all" className="w-full gap-16 lg:gap-4">
            <TabsList className="grid grid-cols-3 lg:grid-cols-4 justify-between gap-2 w-full bg-gray-950 [&>*]:capitalize [&>*]:text-white [&>*]:border [&>*]:border-orange-400 [&>*]:bg-neutral-900 [&>*]:cursor-pointer [&>*]:px-4 [&>*]:py-2 [&>*]:w-auto md:[&>*]:w-[250px]">
                {categories.map((category) => (
                    <TabsTrigger key={category} value={category}>
                        {t['portfolio.option.' + category]}
                    </TabsTrigger>
                ))}
            </TabsList>
            {categories.map((category) => (
                <TabsContent key={category} value={category}>
                    <CustomPortfolioCard category={category} />
                </TabsContent>
            ))}
        </Tabs>
    );
}

export default CustomTabs;