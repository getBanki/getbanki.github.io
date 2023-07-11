import './globals.scss'
import {Rubik} from 'next/font/google'
import HeaderApp from "@/components/app/HeaderApp/HeaderApp";
import React from "react";

const rubik = Rubik({
        subsets: ['latin'],
        weight: '400',
    }
)


interface IProps {
    children: React.ReactNode
}

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
