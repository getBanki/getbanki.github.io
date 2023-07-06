import {PageHome} from "@/components/app/pages/PageHome/PageHome";
import {getAllLoan} from "@/services/getLoans";
import {Comparison} from "@/components/app/pages/PageHome/Comparison/Comparison";

import React from "react";




export const metadata = {
    title: 'Займы',
    description: 'Займ под 0%',
}

export default async function Home() {
    const allLoans = await getAllLoan()

    return (
        <>
            <PageHome allLoans={allLoans}/>
            <Comparison />
        </>
    )
}
