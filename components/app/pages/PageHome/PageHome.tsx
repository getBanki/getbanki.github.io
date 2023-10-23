"use client"
import React from "react";
import {observer} from "mobx-react-lite";
import './PageHome.scss'
import {Rubik} from "next/font/google";
import Link from "next/link";

const rubik = Rubik({
        subsets: ['latin'],
        weight: '800',
    }
)
export const PageHome = observer(() => {
        const data = [
            {
                title: 'Займ',
                link: '/loans'
            }
        ]

        return (
            <div className='page-home'>
                {
                    data.map((itemData, index) =>
                        <Link key={`page-home-${index}`} href={itemData.link} className='card card-body bg-white w-64'>
                            {itemData.title}
                        </Link>
                    )
                }
            </div>
        )
    }
)
