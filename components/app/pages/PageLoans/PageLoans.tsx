"use client"
import React from "react";
import {AllLoans} from "@/components/app/lib/models/all-loans";
import './PageLoans.scss'
import {Content} from "@/components/app/pages/PageLoans/Content/Content";
import {observer} from "mobx-react-lite";


interface IProps {
    allLoans: AllLoans[]
}

export const PageLoans: React.FC<IProps> = observer(({allLoans}) => {


        return (
            <Content allLoans={allLoans}/>
        )
    }
)
