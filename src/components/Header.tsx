"use client";
import { Icons } from "@/icons";
import { useState } from "react";
import { Button } from "./Button";

const mockNavigation = [
    { label: "Home", href: "/", icon: <Icons.Home /> },
    { label: "Dashboards", href: "/dashboards", icon: <Icons.Dashboard /> },
    { label: "Currencies", href: "/currencies", icon: <Icons.Currency /> },
    { label: "Profile", href: "/profile", icon: <Icons.User /> },
    { label: "Signup", href: "/signup", icon: null },
];

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <header className="bg-[var(--color-primary)] flex items-center justify-between p-4 fixed top-0 left-0 right-0 z-10 font-rubik w-full text-white">
            <div className="flex items-center gap-4">
                <Button href="/" variant="tertiary" underline={false} className="text-white">
                    <p className="text-xl font-bold">dotETHer</p>
                </Button>
            </div>
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
                {mockNavigation.map((item) => (
                    <Button
                        key={item.label}
                        href={item.href}
                        variant="tertiary"
                        className="text-white"
                        icon={item.icon}
                    >
                        {item.label}
                    </Button>
                ))}
            </nav>
            {/* Mobile Burger Menu */}
            <Button icon={<Icons.Burger size="large" />} aria-label={'Open Menu'} className="lg:hidden text-white" variant="tertiary" onClick={toggleMenu} underline={false} href="" />
            {/* Mobile Overlay Panel */}
            <div
                className={`fixed inset-0 bg-black bg-opacity-75 z-20 transition-opacity duration-300 ${
                    isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                }`}
                onClick={toggleMenu} // Close menu when clicking outside the panel
            >
                <div
                    className={`flex flex-col gap-5 bg-[var(--color-primary)] h-full p-4 transform transition-transform duration-300 ${
                        isMenuOpen ? "translate-x-0" : "translate-x-full"
                    }`}
                    onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the panel
                >   
                    <Button aria-label="Close Menu" icon={<Icons.Close size="large" />} underline={false} variant="tertiary" className="text-white w-fit self-end" onClick={toggleMenu} href={""} />
                    <nav className="flex flex-col gap-4 items-end">
                        {mockNavigation.map((item) => (
                            <Button
                                key={item.label}
                                href={item.href}
                                variant="tertiary"
                                className="text-white text-2xl"
                                icon={item.icon}
                                onClick={toggleMenu} // Close menu on navigation
                            >
                                {item.label}
                            </Button>
                        ))}
                    </nav>
                </div>
            </div>
        </header>
    );
}
