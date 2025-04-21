'use client';

import { Button } from "@/components/ui/button";
import CustomPortrait from "../lib/custom-portrait";
import CustomTitle from "../lib/custom-title";
import { FaCloudDownloadAlt } from "react-icons/fa";

const About = () => {
    return (
        <section className="mt-4 flex flex-col justify-between items-center gap-24">
            <CustomTitle title="About Me" subtitle={'Little description about the service'} />
            <div className="flex flex-col items-center justify-between gap-14">
                <CustomPortrait image="/assets/images/perfil.png" />
                <span className="flex justify-center items-center w-full flex-col px-4 gap-4">
                    <p
                        className="text-wrap text-gray-400 text-justify"
                    >
                        {`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}
                    </p>
                    <Button className="bg-orange-500 text-white flex items-center gap-4">
                        <FaCloudDownloadAlt />
                        <p>Download CV</p>
                    </Button>
                </span>
            </div>
        </section>
    );
}

export default About;