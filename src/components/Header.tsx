"use client";
import { Icons } from "@/icons";
import { useEffect, useRef, useState } from "react";
import { Button } from "./Button";

export default function Header() {
    const [isSticky, setIsSticky] = useState(false);
    const headerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (headerRef.current) {
            const headerHeight = headerRef.current.clientHeight;
            const handleScroll = () => {
                setIsSticky(window.scrollY > headerHeight); // Add sticky class when scrolled past the top
            };

            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (
        <header
            ref={headerRef}
            className={`w-full bg-white text-primary px-4 py-2 transition-all duration-250 ${
                isSticky ? 'fixed top-0 shadow-md' : 'relative'
            }`}
        >
            <div className="flex w-full justify-between items-center max-w-[1920px] px-5">
                <Button href="/" variant="tertiary" underline={false} className="text-primary">
                    <p className="text-xl text-primary">dotETHer</p>
                </Button>
                <nav className="flex items-center gap-8">
                    <div className="flex items-center gap-4">
                        <Button href="/" variant="tertiary" className="text-primary">Home</Button>
                        <Button href="/dashboards" variant="tertiary" className="text-primary" icon={<Icons.Dashboard />}>Dashboards</Button>
                        <Button href="/currencies" variant="tertiary" className="text-primary" icon={<Icons.Currency />}>Currencies</Button>
                    </div>
                    <div className="flex items-center gap-4">
                        <Button href="/profile" variant="tertiary" className="text-primary" icon={<Icons.User />}></Button>
                    </div>
                </nav>
            </div>
        </header>
    );
}
