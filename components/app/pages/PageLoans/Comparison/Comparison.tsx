"use client"
import React, {useEffect, useState} from "react";
import {AllLoans} from "@/components/app/lib/models/all-loans";
import './Comparison.scss'
import {useLocalStorage} from "usehooks-ts";
import Link from "next/link";
import {observer} from "mobx-react-lite";


export const Comparison: React.FC = observer(() => {
    const [compareStorage, setCompareStorage] = useLocalStorage<AllLoans[]>('compareStorage', [])
    const [dataCompare, setDataCompare] = useState<AllLoans[]>([])

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setDataCompare(compareStorage)
        }
    }, [compareStorage])

    const clearing = (): void => {
        setCompareStorage([])
    }
    return (

        dataCompare.length !== 0 ?
            <div  className='comparison animation'>
                <div className='card comparison__card'>
                    <div className='comparison__body'>
                        <div className='comparison__information'>
                            <div  className="avatar comparison__item">
                                <div className="w-12 rounded-xl">
                                    <img width={50} height={50}  src={dataCompare[0].img}
                                         alt={dataCompare[0].title}/>
                                </div>
                            </div>
                            {
                                dataCompare.length - 1 === 0 ?
                                    null
                                    :
                                    <div
                                        className="comparison__item bg-stone-100	 p-3 flex align-middle items-center rounded-xl">
                                        + {dataCompare.length - 1}
                                    </div>
                            }
                            {
                                <div className=' comparison__item ml-3 text-white flex items-center'>
                                    {dataCompare.length} предложения к сравнению
                                </div>
                            }
                        </div>
                        <div className='comparison-card-body-btn'>
                            <a onClick={clearing} className="btn  mr-4">Очистить</a>
                            <Link href={'/comparison'} className="btn btn-primary mr-4">Сравнить</Link>
                        </div>
                    </div>
                </div>
            </div>
            :
            null
    )
})

