"use client"
import React, {FC} from "react";
import {CustomCard} from "@/components/app/generic/Custom/CustomCard/CustomCard";
import './PageHomeContent.scss'
import Image from "next/image";
import {Toolbox} from "@/components/app/pages/PageHome/Toolbox/Toolbox";
import {observer} from "mobx-react-lite";
import toolboxStateStore from "@/components/app/lib/store/toolbox-state-store";
import {AllLoans} from "@/components/app/lib/models/all-loans";
import {nanoid} from "nanoid";

interface IProps {
    allLoans: AllLoans[]
}

export const PageHomeContent: FC<IProps> = observer(({allLoans}) => {

        const filterVal = allLoans.filter((val: any) => (
            val.title.toLowerCase().includes(toolboxStateStore.valueSearchForm.toLowerCase())
        ))

        return (

            <div className='animation'>
                <div className='page-home'>
                    <Toolbox/>
                    <div className='page-home__content '>
                        {
                            filterVal.length !== 0 ?
                                filterVal.map((loans) => (
                                    loans.place < 15 ?
                                        loans.short_description.summa.maximum_loan_amount >= Number(toolboxStateStore.valueRangeSumFrom) ?
                                            <CustomCard key={nanoid()} loans={loans}/>
                                            : null
                                        :
                                        null
                                ))
                                :
                                <div className='page-home-content__img'>
                                    <Image width={200} height={200} src={'/robot-sad.png'} alt={'d'}/>
                                    Увы, ничего не найдено
                                </div>
                        }
                    </div>
                </div>
            </div>
        )
    }
)
