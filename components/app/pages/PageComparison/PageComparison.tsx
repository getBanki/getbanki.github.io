"use client"
import React from "react";
import './PageComparison.scss'
import {TableComparison} from "@/components/app/pages/PageComparison/TableComparison/TableComparison";


export const PageComparison = () => {

    return (
        <div className='page-comparison page-content'>
            <div className=' card mb-4 bg-base-100'>
                <div className='card-body'>
                    Сравнение условий финансовых продуктов
                    Сравните суммы, сроки, процентные ставки и другие параметры отмеченных вами финансовых продуктов.
                </div>
            </div>
            <TableComparison/>
        </div>
    )
}
