"use client"
import React from "react";
import {observer} from "mobx-react-lite";
import './PageHome.scss'
import {Element} from "react-scroll";
import {OpportunityBlock} from "@/components/app/pages/PageHome/OpportunityBlock/OpportunityBlock";
import {ServiceBlock} from "@/components/app/pages/PageHome/ServiceBlock/ServiceBlock";
import {PartnerBlock} from "@/components/app/pages/PageHome/PartnerBlock/PartnerBlock";
import {AdBlock} from "@/components/app/pages/PageHome/AdBlock/AdBlock";
import {nanoid} from "nanoid";

export const PageHome = observer(() => {
        const dataComponents = [
            {
                component: <ServiceBlock nameAnchor={'ServiceBlock'}/>,
                title: 'ServiceBlock'
            },
            {
                component: <OpportunityBlock nameAnchor={'OpportunityBlock'}/>,
                title: 'OpportunityBlock'
            },
            {
                component: <PartnerBlock nameAnchor={'PartnerBlock'}/>,
                title: 'PartnerBlock'
            },
        ]

        return (
            <div className='page-home'>
                <AdBlock/>

                {
                    dataComponents.map((d) => (
                        <Element key={nanoid()} name={d.title}>
                            <div className='page-home__m'>
                                {d.component}
                            </div>
                        </Element>
                    ))
                }
            </div>
        )
    }
)
