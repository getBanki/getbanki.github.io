"use client"
import React from "react";
import {observer} from "mobx-react-lite";
import './PageHome.scss'
import Image from "next/image";
import {Rubik} from "next/font/google";
import gif from '../../../../public/X11D.gif'
import prew from '../../../../public/prew.svg'

const rubik = Rubik({
    weight: '700',
    subsets: ['latin'],
})
const rubikLight = Rubik({
    weight: '300',
    subsets: ['latin'],
})

export const PageHome = observer(() => {


        return (
            <div className='page-home animation'>
                <div className='flex'>

                    <div className='page-home__text'>
                        <div className={`page-home__slogan ${rubik.className}`}> Я экономлю время и деньги</div>
                        <div className={`page-home__desc ${rubikLight.className}`}> с сервисом подбора займов, кредитов и
                            кредитных карт
                        </div>
                        <div className={`page-home__desc ${rubikLight.className}`}>
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
                        <a href={'/loans'}  className="btn btn-primary page-home__btn mt-6">Начать!</a>
                    </div>
                    <div className='page-home__img'>
                        <Image unoptimized={true} src={prew} alt={'лучшие займы'} height={600} width={800}/>

                    </div>
                </div>
            </div>
        )
    }
)
