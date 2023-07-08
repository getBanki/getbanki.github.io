"use client"
import React, {useEffect, useState} from "react";
import './TableComparison.scss'
import {useLocalStorage} from "usehooks-ts";
import {nanoid} from "nanoid";

export const TableComparison = () => {

    const [compareStorage] = useLocalStorage('compareStorage', [])
    const [dataCompare, setDataCompare] = useState<any>([])
    // const pus = (percent: number, number: number) => {
    //     const arr: number[] = []
    //     let i = number
    //     while (i < 2000) {
    //         i = i + Math.round((percent / 100) * i)
    //         arr.push(i)
    //     }
    //     return arr
    // }
    function sumArray(arr: any[]): number {
        let sum = 0;
        for (const item of arr) {
            if (typeof item === 'number' && !isNaN(item)) {
                sum += item;
            } else if (Array.isArray(item)) {
                sum += sumArray(item);
            } else if (typeof item === 'string') {
                const parsedNumber = parseFloat(item);
                if (!isNaN(parsedNumber)) {
                    sum += parsedNumber;
                }
            }
        }
        return sum;
    }


    useEffect(() => {
        if (typeof window !== 'undefined') {
            setDataCompare(compareStorage)
        }
        console.log(dataCompare)
        const startTime = performance.now();
        console.log(sumArray([1, [1, [2]], 2]))
        // const endTime = performance.now();
        // const executionTime = endTime - startTime;
        // console.log(`Время выполнения: ${executionTime} мс`);
    }, [compareStorage])
    const onOpenLink = (d: any) => {
        console.log(d)
    }
    return (
        <div key={nanoid()} className='table-comparison'>
            <div className="overflow-x-auto">
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
                    </tr>
                    </thead>
                    <tbody>
                    {
                        dataCompare.map((data: any) => (
                                <tr key={nanoid()}>
                                    <th className='z-50'>
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12">
                                                <img src={data.img} alt="Avatar Tailwind CSS Component"/>
                                            </div>
                                        </div>
                                        <div> {data.title}</div>
                                    </th>
                                    <td>
                                        <div className=''>
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
                                        <div className="dropdown dropdown-bottom">
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
                                    <td key={nanoid()}>
                                        <div className="dropdown dropdown-bottom">
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
                                </tr>
                        ))
                    }
                    </tbody>

                </table>
            </div>
        </div>


        //         <tr>
        //             <th>Регистарция</th>
        //             {
        //                 dataCompare.map((data: any) => (
        //                     <td key={nanoid()}>
        //                         <div>
        //                             {data.description.borrower_requirements.registration}
        //                         </div>
        //                     </td>
        //                 ))
        //             }
        //         </tr>
        //         <tr>
        //             <th>Получить</th>
        //             {
        //                 dataCompare.map((data: any) => (
        //                     <td key={nanoid()}>
        //                         <div>
        //                             {data.description.methods_obtaining.map((d: any) => (
        //                                 <li key={nanoid()}>
        //                                     {d}
        //                                 </li>
        //                             ))}
        //                         </div>
        //                     </td>
        //                 ))
        //             }
        //         </tr>
        //         <tr>
        //             <th>Оплатить</th>
        //             {
        //                 dataCompare.map((data: any) => (
        //                     <td key={nanoid()}>
        //                         <div>
        //                             {data.description.payment_method.map((d: any) => (
        //                                 <li key={nanoid()}>
        //                                     {d}
        //                                 </li>
        //                             ))}
        //                         </div>
        //                     </td>
        //                 ))
        //             }
        //         </tr>
        //         <tr>
        //             <th>Лицензия</th>
        //             {
        //                 dataCompare.map((data: any) => (
        //                     <td key={nanoid()}>
        //                         <div>
        //                             {data.organization_information.license}
        //                         </div>
        //                     </td>
        //                 ))
        //             }
        //         </tr>
        //         <tr>
        //             <th>Адресс</th>
        //             {
        //                 dataCompare.map((data: any) => (
        //                     <td key={nanoid()}>
        //                         <div>
        //                             {data.organization_information.address}
        //                         </div>
        //                     </td>
        //                 ))
        //             }
        //         </tr>
        //         <tr>
        //             <th>Телефон</th>
        //             {
        //                 dataCompare.map((data: any) => (
        //                     <td key={nanoid()}>
        //                         <div>
        //                             {data.organization_information.telephone}
        //                         </div>
        //                     </td>
        //                 ))
        //             }
        //         </tr>
        //         </tbody>
        //     </table>
        // </div>
    )
}
