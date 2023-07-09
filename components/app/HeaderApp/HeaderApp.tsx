'use client';
import React from "react";
import './HeaderApp.scss'
import {MenuBtn} from "@/Data/DataHeaderApp";
import {nanoid} from "nanoid";
import {usePathname} from "next/navigation";
import {Logo} from "@/components/app/generic/Logo/Logo";
import 'animate.css';
import {Panel} from "@/components/app/pages/PageHome/Panel/Panel";
interface IProps {
    children: React.ReactNode
}

export default function HeaderApp({children}: IProps) {
    const pathName = usePathname()

    return (
        <div className={`drawer ${pathName === '/' ? '' : 'lg:drawer-open'}`}>
            <input id="my-drawer" type="checkbox" className="drawer-toggle"/>
            <div className="drawer-content ">
                <div className={`navbar sticky top-0 z-10 ${pathName === '/' ? '' : 'lg:hidden'} animate__animated animate__fadeInDown`}>
                    <div className="navbar-start">
                        <label htmlFor="my-drawer" className={`btn btn-ghost drawer-button ${pathName === '/' ? '' : 'lg:hidden'}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         className="inline-block w-5 h-5 stroke-current">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M4 6h16M4 12h16M4 18h16"></path>
                                    </svg>
                                </label>
                    </div>
                    <div className="navbar-center ">
                       <Panel/>
                    </div>
                    <div className="navbar-end">

                    </div>
                </div>
                {children}
            </div>
            <div className="drawer-side z-50">
                <label htmlFor="my-drawer" className="drawer-overlay"></label>
                <ul className="menu p-4 w-64 h-full ">
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

