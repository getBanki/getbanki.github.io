"use client"
import React from "react";
import {observer} from "mobx-react-lite";
import Image from "next/image";
import {Rubik} from "next/font/google";
import all from '../../../public/all.svg'


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

export const PartnerBlock = observer(({nameAnchor}: IProps) => {


        return (
            <div id={nameAnchor} >
                <div className={`text-5xl ${rubik.className} mb-8`}>
                    Все в одном месте
                </div>
                <div className={`text-5xl ${rubikLight.className} mb-8`}>
                    На платформе
                    собраны выгодные предложения
                    от различных партнеров. С нами ты сможешь сделать правильный выбор!
                </div>
                <Image className='mx-auto' src={all} alt={'check'} height={1024}
                       width={1024}/>
            </div>
        )
    }
)
