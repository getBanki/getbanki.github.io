"use client"
import React, {FC} from "react";
import {CustomCard} from "@/components/app/generic/Custom/CustomCard/CustomCard";
import './Content.scss'
import Image from "next/image";
import {Toolbox} from "@/components/app/pages/PageLoans/Toolbox/Toolbox";
import {observer} from "mobx-react-lite";
import toolboxStateStore from "@/components/app/lib/store/toolbox-state-store";
import {AllLoans} from "@/components/app/lib/models/all-loans";
import {nanoid} from "nanoid";

interface IProps {
    allLoans: AllLoans[]
}

export const Content: FC<IProps> = observer(({allLoans}) => {

        const filterVal = allLoans.filter((val: any) => (
            val.title.toLowerCase().includes(toolboxStateStore.valueSearchForm.toLowerCase())
        ))
        console.log(filterVal)

        return (

            <div className='animation'>
                <div className='page-loans'>
                    <Toolbox/>
                    <div className='page-loans__content '>
                        {
                            filterVal.length !== 0 ?
                                filterVal.map((loans) => (
                                    loans.place < 15 ?
                                        loans.short_description.summa.maximum_loan_amount >= toolboxStateStore.valueRangeSumFrom ?
                                            loans.short_description.term.before >= toolboxStateStore.valueRangeDayFrom ?

                                                <CustomCard key={nanoid()} loans={loans}/>
                                                :
                                                null
                                            : null
                                        :
                                        null
                                ))
                                :
                                <div className='page-loans-content__img'>
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
