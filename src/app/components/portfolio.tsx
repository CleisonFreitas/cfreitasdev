'use client';

import CustomTabs from "../lib/custom-tabs";
import CustomTitle from "../lib/custom-title";

const Portfolio = () => {

    return (
        <section className="mt-4 flex flex-col">
            <CustomTitle title="portfolio"/>
            <div className="flex flex-col gap-2 items-center">
                <CustomTabs />
            </div>
        </section>
    );
}

export default Portfolio;