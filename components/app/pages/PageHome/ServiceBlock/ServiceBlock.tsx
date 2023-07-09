"use client"
import React from "react";
import {observer} from "mobx-react-lite";
import Image from "next/image";
import {Rubik} from "next/font/google";
import bankImg from '../../../../../public/bank.svg'
import gold from '../../../../../public/gold.svg'
import payPall from '../../../../../public/paypall.svg'
import './ServiceBlock.scss'
import {nanoid} from "nanoid";


const rubik = Rubik({
    weight: '700',
    subsets: ['latin'],
})
const rubikLight = Rubik({
    weight: '300',
    subsets: ['latin'],
})
interface IProps {
    nameAnchor:string
}
export const ServiceBlock = observer(({nameAnchor}:IProps) => {
        const dataChoice = [
            {
                title: 'Займа',
                img: gold,
                href: '/loans'
            },
            {
                title: 'Кредитной карты',
                img: payPall,
                href: '/creditCard'
            },
            {
                title: 'Кредита',
                img: bankImg,
                href: '/credit'
            },
        ]


        return (
                <div id={nameAnchor} className='service-block__choice'>
                    <div className={`text-5xl ${rubik.className} mb-8`}>
                        Поможем с выбором
                    </div>
                    <div className='service-block__cards'>
                        {
                            dataChoice.map((data) => (
                                <a key={nanoid()} href={data.href} className='card bg-base-100 shadow-xl  choice-card'>
                                    <div className='card-body'>
                                        <div className='mx-auto text-center '>
                                            <div className={`${rubikLight.className} mb-4 text-3xl`}>{data.title}</div>
                                            <Image className='mx-auto' src={data.img} alt={data.title} height={124}
                                                   width={248}/>
                                        </div>

                                    </div>
                                </a>
                            ))
                        }
                    </div>
                </div>
        )
    }
)
