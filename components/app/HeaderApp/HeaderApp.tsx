'use client';
import React from "react";
import './HeaderApp.scss'
import {nanoid} from "nanoid";
import {usePathname} from "next/navigation";
import {Logo} from "@/components/app/generic/Logo/Logo";
import 'animate.css';
import {Panel} from "@/components/app/pages/PageHome/Panel/Panel";
import {observer} from "mobx-react-lite";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBasketShopping, faCartShopping, faNewspaper, faStar, faWallet} from "@fortawesome/free-solid-svg-icons";
interface IProps {
    children: React.ReactNode
}

export default observer(({children}: IProps) =>{
    const pathName = usePathname()

    const MenuBtn = [
        {
            title: 'Займы',
            href: '/loans',
            icon:  <FontAwesomeIcon
                icon={faWallet}
                className={pathName.includes('/loans')?'custom-icon_active':'custom-icon'}/>
        },
        {
            title: 'Кредитные карты',
            href: '/creditCard',
            icon:  <FontAwesomeIcon
                icon={faCartShopping}
                className={pathName.includes('/creditCard')?'custom-icon_active':'custom-icon'}/>
        },
        {
            title: 'Статьи',
            href: '/newPaper',
            icon:  <FontAwesomeIcon
                icon={faNewspaper}
                className={pathName.includes('/newPaper')?'custom-icon_active':'custom-icon'}/>
        },
    ]

    return (
        <div className={`drawer ${pathName === '/' ? '' : 'lg:drawer-open'}`}>
            <input id="my-drawer" type="checkbox" className="drawer-toggle"/>
            <div className="drawer-content ">
                <div className={`navbar sticky top-0 z-20 ${pathName === '/' ? '' : 'lg:hidden'} animate__animated animate__fadeInDown`}>
                    <div className="navbar-start">
                        <label htmlFor="my-drawer" className={`btn btn-ghost drawer-button  ${pathName === '/' ? '' : 'lg:hidden'}`}>
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
                                    {menu.icon} {menu.title}
                                </a>
                            </li>
                        ))
                    }
                </ul>

            </div>
        </div>
    )
})

