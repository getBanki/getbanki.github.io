"use client"
import React from "react";
import './Toolbox.scss'
import {observer} from "mobx-react-lite";
import toolboxStateStore from "@/components/app/lib/store/toolbox-state-store";
import VisibleBlock from "@/components/app/pages/PageLoans/Toolbox/VisibleBlock/VisibleBlock";
import InvisibleBlock from "@/components/app/pages/PageLoans/Toolbox/InvisibleBlock/InvisibleBlock";

export default observer(() => {

        const clearForm = () => {
            toolboxStateStore.setValueRangeSumFrom(0)
            toolboxStateStore.setValueRangeDayFrom(0)
            toolboxStateStore.setValueMethodObtaining('')
            toolboxStateStore.setValueDocuments('')
            toolboxStateStore.setValueCategoryBorrowers('')
        }


        return (

            <div className='toolbox rounded-2xl bg-base-100 card  shadow-sm'>
                <div className='card-body'>
                    <VisibleBlock/>
                    <InvisibleBlock/>
                    <div className='w-full text-right h-2'>
                        {
                            toolboxStateStore.valueCategoryBorrowers.length !== 0 || toolboxStateStore.valueRangeSumFrom !== 0 || toolboxStateStore.valueRangeDayFrom !== 0 || toolboxStateStore.valueMethodObtaining.length !== 0 || toolboxStateStore.valueDocuments.length
                            !== 0 ?
                                <button onClick={clearForm}>Очистить</button>
                                :
                                null
                        }
                    </div>
                </div>
            </div>
        )
    }
)
