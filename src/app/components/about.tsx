import CustomTitle from "../lib/custom-title";
import { LangType } from "../types/lang_type";
import { Card, CardContent } from "@/components/ui/card";

const About = ({ t }: LangType) => {
    const journey = [
        {
            title: t['about.enterprise.title'],
            description: t['about.enterprise.description'],
        },
        {
            title: t['about.scalability.title'],
            description: t['about.scalability.description'],
        },
        {
            title: t['about.cloud.title'],
            description: t['about.cloud.description'],
        },
    ];

    return (
        <section className="mt-8 md:mt-[90px]">
            <div className="mx-auto max-w-5xl px-4">
                <CustomTitle title={t['about.title']} subtitle={t['about.subtitle']} />

                <div className="mt-8 relative space-y-10 border-l border-zinc-800 pl-8">
                    {journey.map((item, index) => (
                        <div key={item.title} className="relative">
                        {/* Bullet */}
                        <span
                            className="absolute -left-[41px] top-6 h-3 w-3 rounded-full"
                            style={{ backgroundColor: "#FD6F00" }}
                        />

                        <Card className="border-zinc-800 bg-zinc-950">
                            <CardContent className="p-6">
                            <h3
                                className="mb-2 text-lg font-medium"
                                style={{ color: "#FD6F00" }}
                            >
                                {item.title}
                            </h3>
                            <p className="text-sm leading-relaxed text-zinc-400">
                                {item.description}
                            </p>
                            </CardContent>
                        </Card>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default About;