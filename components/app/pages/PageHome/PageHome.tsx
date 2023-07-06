"use client"
import React from "react";
import {AllLoans} from "@/components/app/lib/models/all-loans";
import './PageHome.scss'
import {PageHomeContent} from "@/components/app/pages/PageHome/Content/PageHomeContent";
import {observer} from "mobx-react-lite";


interface IProps {
    allLoans: AllLoans[]
}

export const PageHome: React.FC<IProps> = observer(({allLoans}) => {


        return (
            <PageHomeContent allLoans={allLoans}/>
        )
    }
)