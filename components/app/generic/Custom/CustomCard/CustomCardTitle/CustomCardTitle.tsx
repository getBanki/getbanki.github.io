import {nanoid} from "nanoid";
import React, {memo, useEffect, useState} from "react";
import {faChartSimple, faEllipsis, faGlasses, faStar, faXmark} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useLocalStorage} from "usehooks-ts";
import {faHeart} from "@fortawesome/free-regular-svg-icons";
import {AllLoans} from "@/components/app/lib/models/all-loans";



interface ICustomCard {
    dataLoans: AllLoans
}

export const CustomCardTitle = memo(({dataLoans}: ICustomCard) => {
        const [stateCheck, setStateCheck] = useState(false)
        const [compareStorage, setCompareStorage] = useLocalStorage<any>('compareStorage', [])


        const compare = () => {
            setStateCheck(!stateCheck)
            setCompareStorage([...compareStorage, dataLoans])
        }
        const deleteItem = () => {
            compareStorage.map((d: any) => {
                if (d.title === dataLoans.title) {
                    const beforeCompareStorage: any = compareStorage
                    delete beforeCompareStorage[compareStorage.indexOf(d)]
                    const afterCompare = beforeCompareStorage.filter((d: any) => d ? d : null)
                    setCompareStorage(afterCompare)
                }
            })
            setStateCheck(false)
        }
        useEffect(() => {
            compareStorage.map((d: any) => {
                if (d.title === dataLoans.title) {
                    setStateCheck(true)
                }
            })

        },[])
        return (
            <div key={nanoid()} className="card-title">
                <div key={nanoid()} className="card-title-body">
                    <img className="card-title-body-img" src={dataLoans.img} width={38} alt="займ  "/>
                    <div>
                        <div>
                            {dataLoans.title}
                        </div>
                        <div className='card-title-body-rate'>
                            <FontAwesomeIcon
                                key={nanoid()}
                                icon={faStar} style={{color: '#f48100'}}
                                className='custom-icon'/>
                            <div className='card-title-body-rate-text'> {dataLoans.rate}</div>
                        </div>
                    </div>
                </div>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost m-1">
                        <FontAwesomeIcon
                            key={nanoid()}
                            icon={faEllipsis} style={{color: '#0C8CE9'}}/>
                    </label>
                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li key={nanoid()}>
                            <a href={'/loans/detailed'}>
                                <FontAwesomeIcon
                                    key={nanoid()}
                                    icon={faGlasses}
                                    className='custom-icon'/>
                                Подробнее
                            </a>
                        </li>
                        <li key={nanoid()}>
                            <a onClick={stateCheck ? deleteItem : compare}>
                                <FontAwesomeIcon
                                    key={nanoid()}
                                    icon={stateCheck ? faXmark : faChartSimple}
                                    className={stateCheck ? 'custom-icon-delete' : 'custom-icon'}/>
                                {
                                    stateCheck ? ' Удалить' : ' Сравнить с другим'
                                }

                            </a>
                        </li>
                        <li key={nanoid()}>
                            <a onClick={compare}>
                                <FontAwesomeIcon
                                    key={nanoid()}
                                    icon={faHeart} style={{color: '#0C8CE9'}}
                                    className='custom-icon'/>
                                Избранное
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
)
CustomCardTitle.displayName = 'CustomCardTitle';
