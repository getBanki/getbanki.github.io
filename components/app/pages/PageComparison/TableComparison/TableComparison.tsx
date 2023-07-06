"use client"
import React, {useEffect, useState} from "react";
import {nanoid} from "nanoid";
import {useLocalStorage} from "usehooks-ts";

export const TableComparison = () => {

    const [compareStorage] = useLocalStorage('compareStorage', [])
    const [dataCompare, setDataCompare] = useState<any>([])
    const pus = (percent: number, number: number) => {
        const arr: number[] = []
        let i = number
        while (i < 2000) {
            i = i + Math.round((percent / 100) * i)
            arr.push(i)
        }
        return arr
    }
    useEffect(() => {
        if (typeof window !== 'undefined') {
            setDataCompare(compareStorage)
        }
        // console.log(pus(30, 5))
        console.log(dataCompare)
    }, [compareStorage])
    const onOpenLink = (d: any) => {
        console.log(d)
    }
    return (


        <div className="page-comparison__table">
            <table className='table '>
                <thead className='sticky top-0 z-20'>
                <tr>
                    <th></th>
                    {
                        dataCompare.map((img: any) => (
                       <>
                           <td key={nanoid()}>
                               <div className="avatar">
                                   <div className="w-16 rounded-xl">
                                       <img src={img.img} alt={img.title}/>
                                   </div>
                               </div>
                           </td>
                       </>
                        ))
                    }
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th>Название</th>
                    {
                        dataCompare.map((data: any) => (
                            <td key={nanoid()}>
                                <button className="btn btn-primary">{data.title}</button>
                            </td>
                        ))
                    }
                </tr>
                <tr>
                    <th>Сумма</th>
                    {
                        dataCompare.map((data: any) => (
                            <td key={nanoid()}>{data.short_description.summa.minimum_loan_amount} - {data.short_description.summa.maximum_loan_amount} Руб</td>
                        ))
                    }
                </tr>
                <tr>
                    <th>Срок</th>
                    {
                        dataCompare.map((data: any) => (
                            <td key={nanoid()}>{data.short_description.term.from} - {data.short_description.term.before} Дн</td>
                        ))
                    }
                </tr>
                <tr>
                    <th>Одобрим за</th>
                    {
                        dataCompare.map((data: any) => (
                            <td key={nanoid()}>{data.short_description.time.minimum_time} - {data.short_description.time.maximum_time} Мин</td>
                        ))
                    }
                </tr>
                <tr>
                    <th>Процент</th>
                    {
                        dataCompare.map((data: any) => (
                            <td key={nanoid()}>
                                <div>
                                    {data.short_description.percent.other}
                                </div>
                            </td>
                        ))
                    }
                </tr>
                <tr>
                    <th>Возраст</th>
                    {
                        dataCompare.map((data: any) => (
                            <td key={nanoid()}>
                                <div>
                                    {data.description.borrower_requirements.age.minimum_age} - {data.description.borrower_requirements.age.maximum_age} Лет
                                </div>
                            </td>
                        ))
                    }
                </tr>
                <tr>
                    <th>Документы</th>
                    {
                        dataCompare.map((data: any) => (
                            <td key={nanoid()}>
                                <div>
                                    {data.description.borrower_requirements.documents.map((document: any) => (
                                        <li key={nanoid()}>
                                            {document}
                                        </li>
                                    ))}
                                </div>
                            </td>
                        ))
                    }
                </tr>
                <tr>
                    <th>Регистарция</th>
                    {
                        dataCompare.map((data: any) => (
                            <td key={nanoid()}>
                                <div>
                                    {data.description.borrower_requirements.registration}
                                </div>
                            </td>
                        ))
                    }
                </tr>
                <tr>
                    <th>Получить</th>
                    {
                        dataCompare.map((data: any) => (
                            <td key={nanoid()}>
                                <div>
                                    {data.description.methods_obtaining.map((d: any) => (
                                        <li key={nanoid()}>
                                            {d}
                                        </li>
                                    ))}
                                </div>
                            </td>
                        ))
                    }
                </tr>
                <tr>
                    <th>Оплатить</th>
                    {
                        dataCompare.map((data: any) => (
                            <td key={nanoid()}>
                                <div>
                                    {data.description.payment_method.map((d: any) => (
                                        <li key={nanoid()}>
                                            {d}
                                        </li>
                                    ))}
                                </div>
                            </td>
                        ))
                    }
                </tr>
                <tr>
                    <th>Лицензия</th>
                    {
                        dataCompare.map((data: any) => (
                            <td key={nanoid()}>
                                <div>
                                    {data.organization_information.license}
                                </div>
                            </td>
                        ))
                    }
                </tr>
                <tr>
                    <th>Адресс</th>
                    {
                        dataCompare.map((data: any) => (
                            <td key={nanoid()}>
                                <div>
                                    {data.organization_information.address}
                                </div>
                            </td>
                        ))
                    }
                </tr>
                <tr>
                    <th>Телефон</th>
                    {
                        dataCompare.map((data: any) => (
                            <td key={nanoid()}>
                                <div>
                                    {data.organization_information.telephone}
                                </div>
                            </td>
                        ))
                    }
                </tr>
                </tbody>
            </table>
        </div>
    )
}
