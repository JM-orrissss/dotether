import React from "react";
import Header from "../components/Header";
import "./globals.css";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {    
    return (
        <html lang="en">
            <body
                className={`antialiased`}
            >
                <Header />
                <main className="mt-">
                {children}
                </main>
            </body>
        </html>
    );
}
