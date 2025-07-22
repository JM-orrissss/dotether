import React from "react";
import { Button } from "./Button";

export default function Header() {
    return (
        <header className="bg-[var(--color-primary)] flex gap-4 text-white p-4 fixed w-full top-0 left-0 right-0 z-10 font-rubik">
            <div className="flex w-full justify-between items-center max-w-[1920px] px-5">
                <div className="flex items-center gap-4">
                    <div className="w-5 h-5 bg-primary"></div>
                    <p className="text-xl text-primary">dotETHer</p>
                </div>
                <nav className="flex items-center gap-4">
                    <div className="flex items-center gap-4">
                        <Button href="/" variant="tertiary">Home</Button>
                        <Button href="/dashboards" variant="tertiary">Dashboards</Button>
                        <Button href="/currencies" variant="tertiary">Currencies</Button>
                    </div>
                    <div className="flex items-center gap-4">
                        <Button href="/signup" variant="tertiary">Signup</Button>
                        <Button href="/profile" variant="tertiary">Profile</Button>
                    </div>
                </nav>
            </div>
        </header>
    );
}
