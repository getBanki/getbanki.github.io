"use client"
import React from "react";
import {observer} from "mobx-react-lite";
import './Panel.scss'
import {nanoid} from "nanoid";
import {Link} from 'react-scroll'


export const Panel = observer(() => {

        const dataPanel = [
            {
                title: 'Возможности',
                nameAnchor: "ServiceBlock",
            },
            {
                title: 'Преимущества',
                nameAnchor: 'OpportunityBlock',
            },

            {
                title: 'Партнёры',
                nameAnchor: 'PartnerBlock',
            }
        ]
        return (
            <div className='card bg-primary p-2 fixed top-0 z-20 mt-4 left-1/2 animate__animated animate__fadeInDown'
                 style={{marginLeft: "-230px"}}>
                <div className='flex'>
                    {
                        dataPanel.map((data) => (
                            <Link smooth={true} to={data.nameAnchor} key={nanoid()}
                                  className="btn btn-secondary panel__btn no-animation">{data.title}</Link>
                        ))
                    }
                </div>
            </div>
        )
    }
)
