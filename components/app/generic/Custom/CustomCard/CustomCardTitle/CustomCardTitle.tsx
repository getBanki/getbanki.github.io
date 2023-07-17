import {nanoid} from "nanoid";
import React, {useEffect, useState} from "react";
import {faChartSimple, faEllipsis, faGlasses, faStar, faHeart} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useLocalStorage} from "usehooks-ts";
import {AllLoans} from "@/components/app/lib/models/all-loans";
import {DeletingObjFromArray} from "@/components/app/lib/common";


interface ICustomCard {
    dataLoans: AllLoans
}

export const CustomCardTitle = ({dataLoans}: ICustomCard) => {
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
                <img className="card-title-body-img" src={dataLoans.img} width={38} alt="займ  "/>
                <div>
                    <div>
                        {dataLoans.title}
                    </div>
                    <div className='card-title-body-rate w-full card-title__container'>
                        <FontAwesomeIcon
                            icon={faStar} style={{color: '#f48100'}}
                            className='custom-icon'/>
                        <div className='card-title-body-rate-text'> {dataLoans.rate}</div>
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
            </div>
            <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost m-1">
                    <FontAwesomeIcon
                        icon={faEllipsis} style={{color: '#0C8CE9'}}/>
                </label>
                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li key={nanoid()}>
                        <a href={'/loans/detailed'}>
                            <FontAwesomeIcon
                                icon={faGlasses}
                                className='custom-icon'/>
                            Подробнее
                        </a>
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
}