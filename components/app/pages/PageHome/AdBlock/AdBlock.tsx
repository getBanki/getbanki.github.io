"use client"
import React from "react";
import {observer} from "mobx-react-lite";
import Image from "next/image";
import {Rubik} from "next/font/google";
import prew from '../../../../../public/prew.svg'
import './AdBlock.scss'

const rubik = Rubik({
    weight: '700',
    subsets: ['latin'],
})
const rubikLight = Rubik({
    weight: '300',
    subsets: ['latin'],
})

interface IProps {
    nameAnchor: string
}

export const AdBlock = observer(({nameAnchor}: IProps) => {


        return (
            <div id={nameAnchor} className='ad-block'>
                <div className='ad-block__text animate__animated animate__fadeInLeft'>
                    <div className={`ad-block__slogan ${rubik.className}`}> Я экономлю время и деньги</div>
                    <div className={`ad-block__desc ${rubikLight.className}`}> с сервисом подбора займа, кредита и
                        кредитной карты
                    </div>
                    <div className={`ad-block__desc ${rubikLight.className}`}>
                        от
                        <span
                            className={`${rubik.className} ml-3`}>
                             Get
                            </span>
                        <span style={{color: '#3E68FF'}}
                              className={rubik.className}>
                                Banki
                            </span>
                    </div>
                    <a href={'/loans'} className="btn btn-primary ad-block__btn mt-6">Начать!</a>
                </div>
                <div className='ad-block__img w-full animate__animated animate__fadeInRight'>
                    <Image src={prew} alt={'лучшие займы'} />
                </div>
            </div>
        )
    }
)
