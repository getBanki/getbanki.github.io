"use client"
import React from "react";
import './Toolbox.scss'
import {CustomInput} from "@/components/app/generic/Custom/CustomInput/CustomInput";
import {observer} from "mobx-react-lite";

import toolboxStateStore from "@/components/app/lib/store/toolbox-state-store";
import {CustomDropdown} from "@/components/app/generic/Custom/CustomDropdown/CustomDropdown";


export const Toolbox = observer(() => {
        const onChangeRangeSumForm = (e: any) => {
            toolboxStateStore.setValueRangeSumFrom(e.target.id)
        }
        const onChangeRangeDayForm = (e: any) => {
            toolboxStateStore.setValueRangeDayFrom(e.target.id)
        }
        const rangeSum: number[] = [100, 1000, 5000, 10000, 20000, 30000, 50000, 60000, 100000]
        return (

            <div className='toolbox rounded-2xl bg-base-100 card mt-5'>
                <div className='card-body'>
                    <div className='toolbox__visible'>
                        <CustomInput title={'Поиск по МФО'}
                                     value={toolboxStateStore.valueSearchForm}
                                     onChange={(e) => toolboxStateStore.setValueSearchForm(e.target.value)}/>
                        <CustomDropdown name={'Сумма'} title={`Сумма до ${toolboxStateStore.valueRangeSumFrom} ₽`}
                                        items={rangeSum}
                                        onChange={onChangeRangeSumForm}/>
                        <CustomDropdown name={'Срок'} title={`Срок ${toolboxStateStore.valueRangeDayFrom} дн`}
                                        items={rangeSum}
                                        onChange={onChangeRangeDayForm}/>

                    </div>
                </div>
            </div>
        )
    }
)
