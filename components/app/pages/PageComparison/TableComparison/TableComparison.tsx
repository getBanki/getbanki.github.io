"use client"
import React, {useEffect, useState} from "react";
import './TableComparison.scss'
import {useLocalStorage} from "usehooks-ts";
import {nanoid} from "nanoid";

interface IProps {
    data?: any
}

export const TableComparison = ({data}: IProps) => {

    const [compareStorage] = useLocalStorage('compareStorage', [])
    const [dataCompare, setDataCompare] = useState<any>([])
    // const pus = (percent: number, number: number) => {
    //     const arr: number[] = []
    //     let i = number
    //     while (i < 3000) {
    //         i = i + Math.round((percent / 100) * i)
    //         arr.push(i)
    //     }
    //     return arr
    // }



    useEffect(() => {
        if (typeof window !== 'undefined') {
            if (data === undefined) {
                setDataCompare(compareStorage)
            } else {
                setDataCompare(data)
            }
            console.log(data)
        }
        // let bob: number = 0
        // console.log(pus(40, 60).filter((d) => bob = bob + d))
        // console.log(bob)
        // const startTime = performance.now();
        // console.log(sumArray([1, [1, [2]], 2]))
        // const endTime = performance.now();
        // const executionTime = endTime - startTime;
        // console.log(`Время выполнения: ${executionTime} мс`);
    }, [compareStorage])
    // const onOpenLink = (d: any) => {
    //     console.log(d)
    // }
    return (
        <div>
            {
                dataCompare.length !== 0 ?
                    <div className='card bg-base-100 '>
                        <div className='card-body'>
                            <div key={nanoid()}>
                                <div className="overflow-x-auto table-comparison">
                                    <table className="table table-comparison table-pin-rows table-pin-cols">
                                        {/* head */}
                                        <thead>
                                        <tr>
                                            <th>Название</th>
                                            <td>Сумма</td>
                                            <td>Одобрим за</td>
                                            <td>Срок</td>
                                            <td>Процент</td>
                                            <td>Возраст</td>
                                            <td>Документы</td>
                                            <td>Получить</td>
                                            <td>Оплатить</td>
                                            <td>Регистарция</td>
                                            <td>Лицензия</td>
                                            <td>Адрес</td>
                                            <td>Телефон</td>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {
                                            dataCompare.map((data: any) => (
                                                <tr key={data.title}>
                                                    <th className='table-comparison__btn'>
                                                        <div className="avatar">
                                                            <div className="mask mask-squircle w-12">
                                                                <img src={data.img}
                                                                     alt="Avatar Tailwind CSS Component"/>
                                                            </div>
                                                        </div>
                                                        <div> {data.title}</div>
                                                    </th>
                                                    <td>
                                                        <div>
                                                            от {data.short_description.summa.minimum_loan_amount} - {data.short_description.summa.maximum_loan_amount} Руб
                                                            <br/>
                                                            <button className="btn btn-primary btn-xs">Оформить</button>
                                                        </div>
                                                    </td>
                                                    <td>{data.short_description.time.minimum_time} - {data.short_description.time.maximum_time} Мин</td>
                                                    <td> от {data.short_description.term.from} - {data.short_description.term.before} Дн</td>
                                                    <td>
                                                        до {data.short_description.percent.maximum_loan_interest} %
                                                        <br/>
                                                        {
                                                            data.short_description.percent.other ?
                                                                <div
                                                                    className=" bg-base-200 p-1 text-xs rounded-lg">{data.short_description.percent.other}
                                                                </div>
                                                                :
                                                                null
                                                        }
                                                    </td>
                                                    <td>
                                                        от {data.description.borrower_requirements.age.minimum_age} - {data.description.borrower_requirements.age.maximum_age} Лет
                                                    </td>
                                                    <td>
                                                        <div className="dropdown dropdown-bottom dropdown-hover">
                                                            <label tabIndex={0}
                                                                   className="btn m-1">{data.description.borrower_requirements.documents.length} вида
                                                                документа</label>
                                                            <ul tabIndex={0}
                                                                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 no-animation">
                                                                {data.description.borrower_requirements.documents.map((document: any) => (
                                                                    <li key={nanoid()}>
                                                                        {document}
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="dropdown dropdown-bottom dropdown-hover">
                                                            <label tabIndex={0}
                                                                   className="btn m-1 ">{data.description.borrower_requirements.documents.length} вида
                                                                документа</label>
                                                            <ul tabIndex={0}
                                                                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 no-animation">
                                                                {data.description.payment_method.map((d: any) => (
                                                                    <li key={nanoid()}>
                                                                        {d}
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    </td>
                                                    <td key={nanoid()}>
                                                        <div className="dropdown dropdown-bottom dropdown-hover">
                                                            <label tabIndex={0}
                                                                   className="btn m-1">{data.description.methods_obtaining.length} способов</label>
                                                            <ul tabIndex={0}
                                                                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                                                {data.description.methods_obtaining.map((d: any) => (
                                                                    <li key={nanoid()}>
                                                                        {d}
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    </td>
                                                    <td key={nanoid()}>
                                                        {data.description.borrower_requirements.registration}
                                                    </td>
                                                    <td key={nanoid()}>
                                                        {data.organization_information.license}
                                                    </td>
                                                    <td key={nanoid()}>
                                                        {data.organization_information.address}
                                                    </td>
                                                    <td key={nanoid()}>
                                                        {data.organization_information.telephone}
                                                    </td>
                                                </tr>
                                            ))
                                        }
                                        </tbody>

                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    <div className='flex flex-col items-center justify-center text-3xl'>
                        Нечего сравнивать 😴
                    </div>
            }
        </div>
    )
}
