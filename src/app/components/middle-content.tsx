'use client';

import { LangType } from "../types/lang_type";
import Introduction from "./introduction";
import Services from "./services";

const MiddleContent = ({ t }: LangType) => {
    return (
        <div className="row-start-2 row-end-2 col-start-1 col-end-1 flex flex-col gap-8">
            <Introduction t={t} />
            <Services />
        </div>
    );
}

export default MiddleContent