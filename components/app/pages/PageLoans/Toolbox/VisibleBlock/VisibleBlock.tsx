"use client"
import React, {useState} from "react";
import {CustomInput} from "@/components/app/generic/Custom/CustomInput/CustomInput";
import {observer} from "mobx-react-lite";
import toolboxStateStore from "@/components/app/lib/store/toolbox-state-store";
import {CustomDropdown} from "@/components/app/generic/Custom/CustomDropdown/CustomDropdown";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFilter, faSliders} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import './VisibleBlock.scss'


export default observer(() => {
        const [state, setState] = useState(false)

    const onClickChange=()=>{
        setState(!state)
        toolboxStateStore.setStateFilter(!toolboxStateStore.stateFilter)
    }
        return (

            <div className='toolbox__visible'>
                <CustomInput title={'Поиск по МФО'}
                             value={toolboxStateStore.valueSearchForm}
                             onChange={(e) => toolboxStateStore.setValueSearchForm(e.target.value)}/>
                <CustomDropdown name={'Сумма'} title={`Сумма до ${toolboxStateStore.valueRangeSumFrom} ₽`}
                                items={toolboxStateStore.rangeSum}
                                onChange={(e: any) => toolboxStateStore.setValueRangeSumFrom(e.target.id)}/>
                <CustomDropdown name={'Срок'} title={`Срок ${toolboxStateStore.valueRangeDayFrom} дн`}
                                items={toolboxStateStore.rangeDay}
                                onChange={(e: any) => toolboxStateStore.setValueRangeDayFrom(e.target.id)}/>

                <div className='toolbox__btn'>
                    <button onClick={onClickChange}
                            title={'Фильтр'} className={`btn ${state? 'btn-primary':''}`} >
                        <FontAwesomeIcon
                            icon={faFilter}
                            style={{marginRight: '0'}}
                        />
                    </button>
                </div>
            </div>
        )
    }
)
