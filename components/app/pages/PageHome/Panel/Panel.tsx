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

                <div className="join ">
                    {
                        dataPanel.map((data) => (
                            <Link smooth={true} to={data.nameAnchor} key={nanoid()}
                                  className="join-item btn panel__btn">{data.title}</Link>
                        ))
                    }
                </div>

        )
    }
)
