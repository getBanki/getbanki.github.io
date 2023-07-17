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
        }


        return (

            <div className='toolbox rounded-2xl bg-base-100 card mt-6 mb-3 shadow-md'>
                <div className='card-body'>
                    <VisibleBlock/>
                    <InvisibleBlock/>
                    <div className='w-full text-right h-2'>
                        {
                            toolboxStateStore.valueRangeSumFrom !== 0 || toolboxStateStore.valueRangeDayFrom !== 0 || toolboxStateStore.valueMethodObtaining.length !== 0 || toolboxStateStore.valueDocuments.length
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
