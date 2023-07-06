"use client"
import React from "react";
import {observer} from "mobx-react-lite";
import './PageHome.scss'
import Image from "next/image";
import {Rubik} from "next/font/google";
import gif from '../../../../public/X11D.gif'

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
            <div className='page-home'>
               <div className='flex'>

                   <div className='page-home__text'>
                       <div className={`page-home__slogan ${rubik.className}`}> Экономьте время и деньги</div>
                       <div className={`page-home__desc ${rubikLight.className}`}> с нашим сервисом подбора займов, кредитов и кредитных карт</div>
                   </div>
                   <div className='page-home__img'>
                       <Image unoptimized={true} src={gif} alt={'лучшие займы'} height={512} width={512}/>

                   </div>
               </div>
            </div>
        )
    }
)
