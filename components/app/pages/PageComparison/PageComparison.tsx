"use client"
import React from "react";
import './PageComparison.scss'
import {TableComparison} from "@/components/app/pages/PageComparison/TableComparison/TableComparison";


export const PageComparison = () => {

    return (


        <>

            <div className=' card page-comparison__text bg-base-100'>
                <div className='card-body'>
                    Сравнение условий финансовых продуктов
                    Сравните суммы, сроки, процентные ставки и другие параметры отмеченных вами финансовых продуктов.
                </div>
            </div>
            <TableComparison/>
        </>


    )
}
