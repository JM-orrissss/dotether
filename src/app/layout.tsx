import { Rubik } from "next/font/google"; // Correct import path for the font module
import React from "react";
import Header from "../components/Header";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Metadata } from "next/types";

const rubik = Rubik({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'dotETHer',
  description: 'dotETHer is a web application that allows users to search for and view information about Ethereum-based tokens, including their prices, market data, and other relevant details.',
  openGraph: {
    title: 'dotETHer',
    description: 'dotETHer is a web application that allows users to search for and view information about Ethereum-based tokens, including their prices, market data, and other relevant details.',
    url: 'TODO',
    siteName: 'dotETHer',
  }
}

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {    
    return (
        <html lang="en" className={`${rubik.className} antialiased`}>
            <body className="antialiased">
                <ClerkProvider>
                    <Header />
                    <main className="mt-">
                        {children}
                    </main>
                </ClerkProvider>
            </body>
        </html>
    );
}
