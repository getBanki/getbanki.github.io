"use client"
import React from "react";
import {observer} from "mobx-react-lite";
import Image from "next/image";
import './PageDescription.scss'

interface IProps {
    title: string
    desc: string
    img: any
    width: number
    height: number
}

export const PageDescription = observer(({title, desc, img, width, height}: IProps) => {


        return (
            <div className='page-description card bg-base-100 mb-4'>
                <div className='card-body'>
                    <label className='page-description__title'>{title} онлайн</label>
                    <div className='page-description__body'>
                        <div className='page-description__desc'>
                            {desc}
                        </div>
                        <div className='page-description__img'>
                            {/*<Image src={img} alt={title} width={width} height={height} title={title} id={title}/>*/}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
)
