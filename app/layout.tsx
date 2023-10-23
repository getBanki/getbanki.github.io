import './globals.scss'
import '../components/core/App.scss'
import {Rubik} from 'next/font/google'
import HeaderApp from "@/components/core/HeaderApp/HeaderApp";
import React from "react";

const rubik = Rubik({
        subsets: ['latin'],
        weight: '400',
    }
)


interface IProps {
    children: React.ReactNode
}
export const metadata = {
    title: "GB",
    description: "Финансовый маркетплейс",
    icons: {
        icon: "/logo.svg",
    },
};
export default function RootLayout({children}: IProps) {
    return (
        <html lang="ru" suppressHydrationWarning={true} data-theme="light">
        <body className={rubik.className}>
        <HeaderApp>
            {children}
        </HeaderApp>
        </body>
        </html>
    )
}
