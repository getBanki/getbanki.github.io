"use client"
import React from "react";
import {observer} from "mobx-react-lite";
import './PageHome.scss'
import {Panel} from "@/components/app/pages/PageHome/Panel/Panel";

import {Element} from "react-scroll";
import {AdBlock} from "@/components/app/pages/PageHome/AdBlock/AdBlock";
import {OpportunityBlock} from "@/components/app/pages/PageHome/OpportunityBlock/OpportunityBlock";
import {ServiceBlock} from "@/components/app/pages/PageHome/ServiceBlock/ServiceBlock";
import {PartnerBlock} from "@/components/app/pages/PartnerBlock";


export const PageHome = observer(() => {


        return (
            <div className='page-home animation'>

                <Element name={'AdBlock'}>
                    <div className='page-home__block'>

                        <AdBlock nameAnchor={'AdBlock'}/>
                    </div>
                </Element>
                <Element name={'ServiceBlock'}>
                    <div className='page-home__m'>
                        <ServiceBlock nameAnchor={'ServiceBlock'}/>
                    </div>
                </Element>
                <Element name={'OpportunityBlock'}>
                    <div className='page-home__m'>
                        <OpportunityBlock nameAnchor={'OpportunityBlock'}/>
                    </div>
                </Element>
                <Element name={'PartnerBlock'}>
                    <div className='page-home__m'>
                        <PartnerBlock nameAnchor={'PartnerBlock'}/>
                    </div>
                </Element>
            </div>
        )
    }
)
