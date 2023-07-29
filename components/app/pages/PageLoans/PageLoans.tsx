"use client"
import React, {useEffect} from "react";
import {AllLoans} from "@/components/app/lib/models/all-loans";
import './PageLoans.scss'
import {observer} from "mobx-react-lite";

import toolboxStateStore from "@/components/app/lib/store/toolbox-state-store";
import {CustomCard} from "@/components/app/generic/Custom/CustomCard/CustomCard";
import Image from "next/image";
import Toolbox from "@/components/app/pages/PageLoans/Toolbox/Toolbox";
import {PageDescription} from "@/components/app/generic/PageDescription/PageDescription";
import {Comparison} from "@/components/app/pages/PageLoans/Comparison/Comparison";


interface IProps {
    allLoans: AllLoans[]
}

export const PageLoans = observer(({allLoans}: IProps) => {

        const filterVal = (array: AllLoans[]) => {
            return array.filter((obj: AllLoans) => {
                const matchTitle = obj.title.toLowerCase().includes(toolboxStateStore.valueSearchForm.toLowerCase());
                const matchLoanAmount = obj.short_description.summa.maximum_loan_amount >= toolboxStateStore.valueRangeSumFrom ? obj : null
                const matchLoanDay = obj.short_description.term.before >= toolboxStateStore.valueRangeDayFrom ? obj : null
                const matchMethodObtaining = toolboxStateStore.valueMethodObtaining.length !== 0 ? obj.description.payment_method.includes(toolboxStateStore.valueMethodObtaining) : obj
                const matchDocuments = toolboxStateStore.valueDocuments.length !== 0 ? obj.description.borrower_requirements.documents.includes(toolboxStateStore.valueDocuments) : obj
                const matchBorrowers = toolboxStateStore.valueCategoryBorrowers.length !== 0 ? obj.description.borrower_category.includes(toolboxStateStore.valueCategoryBorrowers) : obj

                return matchTitle && matchLoanAmount && matchLoanDay && matchMethodObtaining && matchDocuments && matchBorrowers
            });
        }

        useEffect(() => {
            toolboxStateStore.getList(allLoans)
        }, [allLoans])


        return (
            <div className='animation page-content'>
                <div className='page-loans'>
                    <PageDescription title={'Займы'}
                                     desc={'Оформление займа онлайн у нас – это удобство и безопасность. Наш онлайн-сервис работает 24/7, что позволяет отправить заявку в любое удобное для вас время. Минимум формальностей, максимум выгоды!'}
                                     img={'/loans_robot.svg'}
                                     width={123}
                                     height={158}
                    />
                    <Toolbox/>
                    <div className='w-full text-right my-4'>
                        Доступно {filterVal(allLoans).length} предложений
                    </div>
                    <div className='page-loans__content '>
                        {
                            filterVal(allLoans).length !== 0 ?
                                filterVal(allLoans).map((loans) => (
                                    <CustomCard key={loans.title} loans={loans}/>
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
