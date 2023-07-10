"use client"
import React from "react";
import './Toolbox.scss'
import {CustomInput} from "@/components/app/generic/Custom/CustomInput/CustomInput";
import {observer} from "mobx-react-lite";

import toolboxStateStore from "@/components/app/lib/store/toolbox-state-store";
import {CustomDropdown} from "@/components/app/generic/Custom/CustomDropdown/CustomDropdown";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {nanoid} from "nanoid";
import {faSliders} from "@fortawesome/free-solid-svg-icons";


export const Toolbox = observer(() => {
        const onChangeRangeSumForm = (e: any) => {
            toolboxStateStore.setValueRangeSumFrom(e.target.id)
        }
        const onChangeRangeDayForm = (e: any) => {
            toolboxStateStore.setValueRangeDayFrom(e.target.id)
        }
        const clearForm = () => {
            toolboxStateStore.setValueRangeSumFrom(0)
            toolboxStateStore.setValueRangeDayFrom(0)
        }
        const rangeSum: number[] = [100, 1000, 5000, 10000, 20000, 30000, 50000, 60000, 100000]
        const rangeDay: number[] = [1, 7, 14, 20, 30, 60, 120, 240, 360]
        console.log(toolboxStateStore.valueRangeDayFrom)
        return (

            <div className='toolbox rounded-2xl bg-base-100 card mt-6 mb-3 shadow-md'>
                <div className='card-body'>
                    <div className='toolbox__visible'>
                        <CustomInput title={'Поиск по МФО'}
                                     value={toolboxStateStore.valueSearchForm}
                                     onChange={(e) => toolboxStateStore.setValueSearchForm(e.target.value)}/>
                        <CustomDropdown name={'Сумма'} title={`Сумма до ${toolboxStateStore.valueRangeSumFrom} ₽`}
                                        items={rangeSum}
                                        onChange={onChangeRangeSumForm}/>
                        <CustomDropdown name={'Срок'} title={`Срок ${toolboxStateStore.valueRangeDayFrom} дн`}
                                        items={rangeDay}
                                        onChange={onChangeRangeDayForm}/>


                        <div className='toolbox__btn'>
                            <button className="btn btn-primary">
                                <FontAwesomeIcon
                                    key={nanoid()}
                                    icon={faSliders}
                                    width={50}
                                />
                            </button>
                        </div>
                    </div>
                    <div className='w-full text-right h-2'>
                        {
                            toolboxStateStore.valueRangeSumFrom !== 0 || toolboxStateStore.valueRangeDayFrom !== 0 ?
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
