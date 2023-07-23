"use client"
import React, {useEffect, useState} from "react";
import {observer} from "mobx-react-lite";
import './PageFavourites.scss'
import {CustomCard} from "@/components/app/generic/Custom/CustomCard/CustomCard";
import Image from "next/image";
import {useLocalStorage} from "usehooks-ts";

export const PageFavourites = observer(() => {
        const [state, setState] = useState<any>([])
        const [favoritesStorage] = useLocalStorage<any>('favoritesStorage', [])
        useEffect(() => {
            if (favoritesStorage) {
                setState(favoritesStorage)
            }
        }, [favoritesStorage])
        return (
            <div className='page-favourites page-content'>
                <div className="join mb-4">
                    <button className="btn join-item">Займы  {state.length}</button>
                </div>
                <div className='page-favourites__content '>
                    {
                        state.length !== 0 ?
                            state.map((loans: any) => (
                                <CustomCard fav={true} key={loans.title} loans={loans}/>
                            ))
                            :
                            <div className='page-loans-content__img'>
                                <Image width={200} height={200} src={'/robot-sad.png'} alt={'d'}/>
                                Увы, ничего не найдено
                            </div>
                    }
                </div>
            </div>
        )
    }
)
