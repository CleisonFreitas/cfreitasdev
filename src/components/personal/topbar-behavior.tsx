'use client';

import { ReactNode, useState, useEffect } from "react";

const TopbarBehavior = ({ children }: { children: ReactNode }) => {
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            setShow(!(currentScrollY > lastScrollY))

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <div
            className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${show ? "translate-y-0" : "-translate-y-full"
                }`}
        >
            {children}
        </div>
    );
}

export default TopbarBehavior;