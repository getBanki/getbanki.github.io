"use client"
import React from "react";
import {observer} from "mobx-react-lite";
import Image from "next/image";
import {Rubik} from "next/font/google";
import check from '../../../../../public/Check.svg'
import './OpportunityBlock.scss'
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
    nameAnchor: string
}

export const OpportunityBlock = observer(({nameAnchor}: IProps) => {

        const dataAdvantages = [
            {
                title: 'Будете в курсе',
                desc: 'Мы предоставляем информацию о всех предложениях на рынке кредитования, чтобы вы могли сделать правильный выбор.',
            },
            {
                title: 'Экономию времени',
                desc: 'Вместо того чтобы самостоятельно искать лучшие предложения на рынке, можно воспользоваться нашим сервисом, который сделает это за вас.',
            },
            {
                title: 'Экономию финансов',
                desc: 'Наш сервис поможет вам сэкономить финансы при выборе наилучшего кредитного варианта.',
            },
            {
                title: 'Полную прозрачность',
                desc: 'Мы предоставляют полную информацию о процентах, и других условиях кредитования. У вас есть возможность \n' +
                    'принимать взвешенные решения и не сталкиваться с непредвиденными расходами.',
            },
            {
                title: 'Широкий выбор предложений',
                desc: 'Наш сервис позволяет выбрать наиболее выгодный вариант из широкого спектра предложений от различных кредиторов, учитывая ваши \n' +
                    'личные потребности и возможности.',
            },
        ]

        return (
            <div id={nameAnchor} className='opportunity-block'>
                <div className={`text-4xl ${rubik.className} mb-8`}>
                    Выбирая нас, вы получите:
                </div>
                <div className='card bg-base-100 '>
                    <div className='card-body'>
                        <div >
                            {
                                dataAdvantages.map((data) => (
                                    <div  className='opportunity-block__card' key={nanoid()}>
                                   <div>
                                       <Image  src={check} alt={'check'}/>
                                   </div>
                                        <div>
                                            <div className={rubik.className}>
                                                {data.title}
                                            </div>
                                            <div className={rubikLight.className}>
                                                {data.desc}
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
)
