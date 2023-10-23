"use client"
import React, {useEffect, useRef, useState} from "react";
import {observer} from "mobx-react-lite";
import './PageHome.scss'
import {Rubik} from "next/font/google";

const rubik = Rubik({
        subsets: ['latin'],
        weight: '800',
    }
)
export const PageHome = observer(() => {





        return (
            <div className='page-home'>

                <div className='page-home__screen '>
                    <div className={`page-home__text ${rubik.className}`}>
                        Скажу где выгодно оформить
                    </div>
                </div>
            </div>
        )
    }
)
