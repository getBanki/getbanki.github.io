import React from "react";
import {PageFormAddingCards} from "@/components/app/pages/PageFormAddingCards/PageFormAddingCards";
import {getAllLoan} from "@/services/getLoans";

export default async function Add() {

    const allLoans = await getAllLoan()
    return (

            <PageFormAddingCards allLoans={allLoans}/>

    )
}
