'use client';

import CustomTabs from "../lib/custom-tabs";
import CustomTitle from "../lib/custom-title";

const Portfolio = () => {

    return (
        <section className="mt-4 justify-center items-center flex flex-col md:mt-[90px]">
            <CustomTitle title="portfolio"/>
            <div className="flex justify-center flex-col gap-2 items-center w-full">
                <CustomTabs />
            </div>
        </section>
    );
}

export default Portfolio;