'use client';
import React from "react";
import './HeaderApp.scss'
import {MenuBtn} from "@/Data/DataHeaderApp";
import {nanoid} from "nanoid";
// @ts-ignore
import iconLogo from '../../../public/icon-logo.svg';
import {usePathname} from "next/navigation";
import {Logo} from "@/components/app/generic/Logo/Logo";

interface IProps {
    children: React.ReactNode
}

export const HeaderApp = ({children}: IProps) => {
    const pathName = usePathname()

    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle"/>
            <div className="drawer-content">
                <div className="flex-none sticky top-0 z-20 opacity-90 bg-base-200">
                    <label htmlFor="my-drawer-2" className="btn btn-ghost drawer-button lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                             className="inline-block w-5 h-5 stroke-current">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </label>
                </div>

                {children}
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

                <ul className="menu p-4 w-60  text-base-content">
                    <Logo/>
                    {
                        MenuBtn.map((menu) => (
                            <li key={nanoid()}>
                                <a className={`${pathName.includes(menu.href) ? 'active' : ''}`}
                                   href={menu.href} key={nanoid()}>
                                    {menu.title}
                                </a>
                            </li>
                        ))
                    }
                </ul>

            </div>
        </div>
    )
}

