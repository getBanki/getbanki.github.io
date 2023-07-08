"use client"
import React from "react";
import {observer} from "mobx-react-lite";
import './PageHome.scss'
import Image from "next/image";
import {Rubik} from "next/font/google";
// import gif from '../../../../public/X11D.gif'
import prew from '../../../../public/prew.svg'
import bankImg from '../../../../public/bank.svg'
import gold from '../../../../public/gold.svg'
import payPall from '../../../../public/paypall.svg'
import check from '../../../../public/Check.svg'
import all from '../../../../public/all.svg'
import {nanoid} from "nanoid";

const rubik = Rubik({
    weight: '700',
    subsets: ['latin'],
})
const rubikLight = Rubik({
    weight: '300',
    subsets: ['latin'],
})

export const PageHome = observer(() => {
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
        const dataPanel = ['Преимущества', 'Возможности', 'Партнёры']
        return (
            <div className='page-home animation'>
                <div className='card bg-primary p-2 fixed top-0 z-20 mt-4 left-1/2' style={{marginLeft:"-230px"}}>
                    <div className='flex'>
                        {
                            dataPanel.map((data) => (
                                <button key={nanoid()} className="btn btn-secondary">{data}</button>
                            ))
                        }
                    </div>
                </div>
                <div className='flex page-home__block'>
                    <div className='page-home__text'>
                        <div className={`page-home__slogan ${rubik.className}`}> Я экономлю время и деньги</div>
                        <div className={`page-home__desc ${rubikLight.className}`}> с сервисом подбора займа, кредита и
                            кредитной карты
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
                        <a href={'/loans'} className="btn btn-primary page-home__btn mt-6">Начать!</a>
                    </div>
                    <div className='page-home__img'>
                        <Image unoptimized={true} src={prew} alt={'лучшие займы'} height={600} width={800}/>
                    </div>
                </div>
                <div className=' page-home__block'>
                    <div className='page-home__choice'>
                        <div className={`text-5xl ${rubik.className} mb-8`}>
                            Поможем с выбором
                        </div>
                        <div className='page-home__cards'>
                            {
                                dataChoice.map((data) => (
                                    <a key={nanoid()} href={data.href} className='card bg-base-100 shadow-xl  choice-card'>
                                        <div className='card-body'>
                                            <div className='mx-auto text-center '>
                                                <div className={`${rubikLight.className} mb-4 text-3xl`}>{data.title}</div>
                                                <Image className='mx-auto' src={data.img} alt={data.title} height={248}
                                                       width={248}/>
                                            </div>

                                        </div>
                                    </a>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className=' page-home__block'>
                    <div className='page-home__choice'>
                        <div className={`text-5xl ${rubik.className} mb-8`}>
                            Выбирая нас, вы получите:
                        </div>
                        <div className='card bg-base-100 '>
                            <div className='card-body'>
                                <div className='page-home__cards'>
                                    {
                                        dataAdvantages.map((data) => (
                                            <div key={nanoid()}>
                                                <Image className='mx-auto' src={check} alt={'check'} height={75}
                                                       width={75}/>
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
                </div>
                <div className=' page-home__block'>
                    <div className='page-home__choice'>
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
                </div>
            </div>
        )
    }
)
