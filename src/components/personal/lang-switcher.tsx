'use client';

import { usePathname, useRouter } from "next/navigation";

const LangSwitcher = () => {
    const router = useRouter();
    const pathname = usePathname();

    const currentLang = pathname.split("/")[1];
    const restOfPath = pathname.split("/").slice(2).join("/");

    const changeLanguage = (lang: string) => {
        if (lang !== currentLang) {
            const newPath = `/${lang}/${restOfPath}`;
            router.push(newPath);
        }
    }

    const langOptions = [
        { domain: 'en', name: 'en' },
        { domain: 'pt_BR', name: 'pt' }
    ];

    return (
        <div className="flex gap-2 text-sm">
            {langOptions.flatMap((lang, index) => (
                <button
                    key={index}
                    onClick={() => changeLanguage(lang.domain)}
                    className={`uppercase cursor-pointer px-3 py-1 rounded transition-all text-white duration-200 ${currentLang === lang.domain
                        ? "bg-orange-500 font-semibold"
                        : "hover:bg-neutral-700 hover:scale-105 border border-gray-300"}
                    `}
                >
                    {lang.name}
                </button>
            ))}
        </div>
    );
}

export default LangSwitcher;