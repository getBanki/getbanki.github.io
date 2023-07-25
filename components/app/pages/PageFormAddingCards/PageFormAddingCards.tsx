"use client"
import React from "react";
import {TableComparison} from "@/components/app/pages/PageComparison/TableComparison/TableComparison";
import './PageFormAddingCards.scss'
import {CustomInput} from "@/components/app/generic/Custom/CustomInput/CustomInput";

interface IProps {
    allLoans: any
}

export const PageFormAddingCards = ({allLoans}: IProps) => {

    return (
        <div>
            <div className='page-add-cards page-content'>
                <div className='card bg-base-100 mb-4'>
                    <div className='card-body'>
                        <div className='page-add-cards__form'>
                            <CustomInput title={"Место"}/>
                            <CustomInput title={"Название"}/>
                            <CustomInput title={"Рейтинг"}/>
                            <CustomInput title={"Ссылка на картинку"}/>
                            <CustomInput title={"Ссылка на офер"}/>
                            <CustomInput title={"ID офера"}/>
                        </div>
                        <label className='bg-amber-200 p-2 rounded-xl py-4'>Короткое описание</label>
                        <div className='page-add-cards__form'>
                            <CustomInput title={"Акиции МФО"}/>
                            <CustomInput title={"Сумма минимального займа"}/>
                            <CustomInput title={"Сумма максимального займа"}/>
                            <CustomInput title={"Минимальный процент"}/>
                            <CustomInput title={"Максимальный процент"}/>
                            <CustomInput title={"Другое"}/>
                            <CustomInput title={"Опции"}/>
                            <CustomInput title={"Минимальное время"}/>
                            <CustomInput title={"Максимальное время"}/>
                            <CustomInput title={"От скольки дней"}/>
                            <CustomInput title={"До скольки дней"}/>
                        </div>
                        <label className='bg-amber-200 p-2 rounded-xl my-4'>Полное описание</label>
                        <div className='page-add-cards__form'>
                            <CustomInput title={"Способы получения"}/>
                            <CustomInput title={"Способы оплаты"}/>
                            <CustomInput title={"Категория заемщика"}/>
                            <CustomInput title={"Минимальный процент"}/>
                            <CustomInput title={"Максимальный возраст"}/>
                            <CustomInput title={"Микимальный возраст"}/>
                            <CustomInput title={"Регистарция"}/>
                            <CustomInput title={"Документы"}/>
                        </div>
                        <label className='bg-amber-200 p-2 rounded-xl my-4'>Информация об организации МФО</label>
                        <div className='page-add-cards__form'>
                            <CustomInput title={"Лицензия"}/>
                            <CustomInput title={"Телефон"}/>
                            <CustomInput title={"Адрес регистрации"}/>
                            <CustomInput title={"Названием зарегистрированного МФО"}/>
                        </div>
                        <div className='card-body flex items-end'>
                            <div className="join ">
                                <button className="btn btn-secondary join-item">Очистить</button>
                                <button className="btn btn-primary join-item">Отправить</button>
                            </div>
                        </div>
                    </div>
                </div>
                <TableComparison data={allLoans}/>
            </div>
        </div>
    )
}
