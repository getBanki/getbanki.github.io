"use client"
import React from "react";
import {observer} from "mobx-react-lite";
import toolboxStateStore from "@/components/app/lib/store/toolbox-state-store";
import {CustomDropdown} from "@/components/app/generic/Custom/CustomDropdown/CustomDropdown";




export default observer(() => {



        return (

            <div className='toolbox__invisible'>
                {
                    toolboxStateStore.stateFilter ?
                        <>

                            <CustomDropdown name={'Способ получения'}
                                            title={toolboxStateStore.valueMethodObtaining}
                                            items={toolboxStateStore.listPayments}
                                            onChange={(e: any) => toolboxStateStore.setValueMethodObtaining(e.target.id)}/>
                            <CustomDropdown name={'Документы'}
                                            title={toolboxStateStore.valueDocuments}
                                            items={toolboxStateStore.listDocuments}
                                            onChange={(e: any) => toolboxStateStore.setValueDocuments(e.target.id)}/>
                            <CustomDropdown name={'Категория заемщика'}
                                            title={toolboxStateStore.valueCategoryBorrowers}
                                            items={toolboxStateStore.listCategoryBorrowers}
                                            onChange={(e: any) => toolboxStateStore.setValueCategoryBorrowers(e.target.id)}/>
                        </>
                        :
                        null
                }
            </div>
        )
    }
)
