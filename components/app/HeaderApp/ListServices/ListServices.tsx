import React from "react";
import {nanoid} from "nanoid";
import {usePathname} from "next/navigation";
import {observer} from "mobx-react-lite";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faBuildingShield,
    faCartShopping, faChartSimple,
    faCreditCard, faHeart,
    faMoneyBillTransfer,
    faShield,
    faWallet
} from "@fortawesome/free-solid-svg-icons";
import './ListServices.scss'


export default observer(() => {
    const pathName = usePathname()

    const MenuBtn = [
        {
            title: 'Займы',
            href: '/loans',
            icon: <FontAwesomeIcon icon={faWallet}
                                   className={`${pathName.includes('/loans') ? 'header-app__icon_active' : 'header-app__icon'}`}
                                   style={{marginRight: '0'}}/>,
        },
        {
            title: 'Кредиты',
            href: '/credits',
            icon: <FontAwesomeIcon icon={faCartShopping}
                                   className={`${pathName.includes('/credits') ? 'header-app__icon_active' : 'header-app__icon'}`}
                                   style={{marginRight: '0'}}/>,
        },
        {
            title: 'Страхования',
            href: '/insurance',
            icon: <FontAwesomeIcon icon={faShield}
                                   className={`${pathName.includes('/insurance') ? 'header-app__icon_active' : 'header-app__icon'}`}
                                   style={{marginRight: '0'}}/>,
        },
        {
            title: 'Ипотека',
            href: '/mortgage',
            icon: <FontAwesomeIcon icon={faBuildingShield}
                                   className={`${pathName.includes('/mortgage') ? 'header-app__icon_active' : 'header-app__icon'}`}
                                   style={{marginRight: '0'}}/>,
        },
        {
            title: 'Карты',
            href: '/cards',
            icon: <FontAwesomeIcon icon={faCreditCard}
                                   className={`${pathName.includes('/cards') ? 'header-app__icon_active' : 'header-app__icon'}`}
                                   style={{marginRight: '0'}}/>,
        },
        {
            title: 'Вклады',
            href: '/deposits',
            icon: <FontAwesomeIcon icon={faMoneyBillTransfer}
                                   className={`${pathName.includes('/deposits') ? 'header-app__icon_active' : 'header-app__icon'}`}
                                   style={{marginRight: '0'}}/>,
        },
    ]
    const itemCategories = [
        {
            title: 'Избанное',
            href: '/favourites',
            icon: <FontAwesomeIcon icon={faHeart}
                                   className={`${pathName.includes('/favourites') ? 'header-app__icon_active' : 'header-app__icon'}`}
                                   style={{marginRight: '0'}}/>,
        },
        {
            title: 'Сравнение',
            href: '/comparison',
            icon: <FontAwesomeIcon icon={faChartSimple}
                                   className={`${pathName.includes('/comparison') ? 'header-app__icon_active' : 'header-app__icon'}`}
                                   style={{marginRight: '0'}}/>,
        },
    ]

    return (
        <div className='list-services'>
            <div className='list-services__category'>
                {
                    MenuBtn.map((menu) => (
                        <li key={nanoid()}>
                            <a className={`${pathName.includes(menu.href) ? 'active' : ''}`}
                               href={menu.href}>
                                {menu.icon} {menu.title}
                            </a>
                        </li>
                    ))
                }
            </div>
            <div className='list-services__functions'>
                {
                    itemCategories.map((menu) => (
                        <li key={nanoid()}>
                            <a className={`${pathName.includes(menu.href) ? 'active' : ''}`}
                               href={menu.href}>
                                {menu.icon} {menu.title}
                            </a>
                        </li>
                    ))
                }
            </div>
        </div>
    )
})

