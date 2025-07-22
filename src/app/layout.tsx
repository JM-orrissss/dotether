import React from "react";
import Header from "../components/Header";
import "./globals.css";
import { Rubik } from "next/font/google"; // Correct import path for the font module

const rubik = Rubik({
  subsets: ['latin'],
})

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {    
    return (
        <html lang="en" className={`${rubik.className} antialiased`}>
            <body className="antialiased">
                <Header />
                {children}
            </body>
        </html>
    );
}
