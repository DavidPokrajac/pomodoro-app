import type { Metadata } from "next";
import {
    Geist,
    Geist_Mono,
    Kumbh_Sans,
    Roboto_Slab,
    Space_Mono,
} from "next/font/google";
import "./styles/reset.css";
import "./styles/global.css";
import "./styles/variables.css";
import "./styles/buttonContainer.css";
import "./styles/timerDisplay.css";
import "./styles/modalDisplay.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

const kumbhSans = Kumbh_Sans({
    variable: "--font-kumbh-sans",
    subsets: ["latin"],
});

const robotoSlab = Roboto_Slab({
    variable: "--font-roboto-slab-serif",
    subsets: ["latin"],
});

const spaceMono = Space_Mono({
    variable: "--font-space-mono",
    subsets: ["latin"],
    weight: ["700"],
});

export const metadata: Metadata = {
    title: "Frontend Mentor | Pomodoro app",
    description: "A project from Frontend Mentor website",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} ${kumbhSans.variable} ${robotoSlab.variable} ${spaceMono.variable}`}
            >
                {children}
            </body>
        </html>
    );
}
