import {PageLoans} from "@/components/app/pages/PageLoans/PageLoans";
import {getAllLoan} from "@/services/getLoans";
import {Comparison} from "@/components/app/pages/PageLoans/Comparison/Comparison";

import React from "react";




export const metadata = {
    title: 'Займы',
    description: 'Займ под 0%',
}

export default async function Home() {
    const allLoans = await getAllLoan()

    return (
        <>
            <PageLoans allLoans={allLoans}/>
            <Comparison />
        </>
    )
}
