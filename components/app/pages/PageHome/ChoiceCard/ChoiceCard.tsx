"use client"
import React from "react";
import {observer} from "mobx-react-lite";
import './ChoiceCard.scss'
import Image from "next/image";
import {Rubik} from "next/font/google";

const rubikLight = Rubik({
    weight: '300',
    subsets: ['latin'],
})

interface IProps {
    title: string
    imgSrc: string
    href:string
}

export const ChoiceCard = observer(({title, imgSrc,href}: IProps) => {


        return (
            <a href={href}  className='card bg-base-100 shadow-xl  choice-card'>
                <div className='card-body'>
                        <div className='mx-auto text-center '>
                            <div className={`${rubikLight.className} mb-4 text-3xl`}>{title}</div>
                            <Image className='mx-auto' src={imgSrc} alt={title} height={248} width={248}/>
                        </div>

                </div>
            </a>
        )
    }
)
