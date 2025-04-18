'use client';

import { LangType } from "../types/lang_type";
import Introduction from "./introduction";

const MiddleContent = ({ t }: LangType) => {
    return (
        <Introduction t={t}/>
    );
}

export default MiddleContent