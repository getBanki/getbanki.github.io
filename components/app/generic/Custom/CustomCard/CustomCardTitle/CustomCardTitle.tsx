import {nanoid} from "nanoid";
import React, {useEffect, useState} from "react";
import {faChartSimple, faEllipsis, faGlasses, faStar, faHeart} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useLocalStorage} from "usehooks-ts";
import {AllLoans} from "@/components/app/lib/models/all-loans";
import {DeletingObjFromArray} from "@/components/app/lib/common";
import './CustomCardTitle.scss'
import Link from 'next/link'
import pageHomeStateStore from "@/components/app/lib/store/page-home-state-store";
import {observer} from "mobx-react-lite";

interface ICustomCard {
    dataLoans: AllLoans
}

export const CustomCardTitle = observer(({dataLoans}: ICustomCard) => {
    const [stateCheckCompare, setStateCheckCompare] = useState(false)
    const [stateCheckFavorites, setStateCheckFavorites] = useState(false)
    const [compareStorage, setCompareStorage] = useLocalStorage<any>('compareStorage', [])
    const [favoritesStorage, setFavoritesStorage] = useLocalStorage<any>('favoritesStorage', [])


    const compare = () => {
        setStateCheckCompare(!stateCheckCompare)
        setCompareStorage([...compareStorage, dataLoans])
    }
    const favorites = () => {
        setStateCheckFavorites(!stateCheckFavorites)
        setFavoritesStorage([...favoritesStorage, dataLoans])
    }

    const deleteItem = () => {
        compareStorage.map((d: any) => {
            if (d.title === dataLoans.title) {
                setCompareStorage(DeletingObjFromArray(d, compareStorage))
            }
        })
        setStateCheckCompare(false)
    }
    const deleteFavorites = () => {
        favoritesStorage.map((d: any) => {
            if (d.title === dataLoans.title) {
                setFavoritesStorage(DeletingObjFromArray(d, favoritesStorage))
            }
        })
        setStateCheckFavorites(false)

    }
    const x = () => {
       pageHomeStateStore.setSelectedOffer(dataLoans)
    }

    useEffect(() => {

        if (compareStorage.length === 0) {
            setStateCheckCompare(false)
        } else {
            compareStorage.map((d: any) => {
                if (d.title === dataLoans.title) {
                    setStateCheckCompare(true)
                }
            })
        }

    }, [compareStorage])

    useEffect(() => {
        if (favoritesStorage.length === 0) {
            setStateCheckFavorites(false)
        } else {
            favoritesStorage.map((d: any) => {
                if (d.title === dataLoans.title) {
                    setStateCheckFavorites(true)
                }
            })
        }
    }, [favoritesStorage])

    return (
        <div className="card-title">
            <div className="card-title-body">
            <a href={dataLoans.link} className='flex'>
                <div className="avatar">
                    <div className="w-16 rounded-2xl mr-2">
                        <img  src={dataLoans.img}  alt={dataLoans.title} />
                    </div>
                </div>
                <div>
                    <div>
                        {dataLoans.title}
                    </div>
                    <div className='card-title-body-rate w-full card-title__container'>
                        <FontAwesomeIcon
                            icon={faStar} style={{color: '#f48100'}}
                            className='custom-icon'/>
                        {dataLoans.rate}
                        <div className='ml-4 '>
                            {
                                stateCheckCompare ?
                                    <FontAwesomeIcon
                                        title={"Сравнить"}
                                        icon={faChartSimple}
                                        className={'custom-icon'}/>
                                    :
                                    null
                            }
                            {
                                stateCheckFavorites ?
                                    <FontAwesomeIcon
                                        title={"Избранное"}
                                        icon={faHeart}
                                        className={'custom-icon'}/>
                                    :
                                    null
                            }
                        </div>
                    </div>
                </div>
            </a>
            </div>
            <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost m-1">
                    <FontAwesomeIcon
                        icon={faEllipsis} className='custom-icon' style={{margin: '0'}}/>
                </label>
                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li key={nanoid()}>
                        <Link href={'/loans/detailed'} onClick={x}>
                            <FontAwesomeIcon
                                icon={faGlasses}
                                className='custom-icon'/>
                            Подробнее
                        </Link>
                    </li>
                    <li key={nanoid()}>
                        <a onClick={stateCheckCompare ? deleteItem : compare}>
                            <FontAwesomeIcon
                                icon={faChartSimple}
                                className={stateCheckCompare ? 'custom-icon-delete' : 'custom-icon'}/>
                            {
                                stateCheckCompare ? ' Удалить' : ' Сравнить'
                            }

                        </a>
                    </li>
                    <li>
                        <a onClick={stateCheckFavorites ? deleteFavorites : favorites}>
                            <FontAwesomeIcon
                                icon={faHeart}
                                className={stateCheckFavorites ? 'custom-icon-delete' : 'custom-icon'}/>
                            {stateCheckFavorites ? ' Удалить' : ' Избранное'}
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
})
