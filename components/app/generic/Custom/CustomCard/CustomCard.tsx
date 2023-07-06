"use client"
import {nanoid} from "nanoid";
import React, {memo} from "react";
import {CustomCardTitle} from "@/components/app/generic/Custom/CustomCard/CustomCardTitle/CustomCardTitle";
import {CustomCardDecr} from "@/components/app/generic/Custom/CustomCard/CustomCardDesc/CustomCardDesc";
import {AllLoans} from "@/components/app/lib/models/all-loans";

interface ICustomCard {
    loans: AllLoans
}

export const CustomCard = memo( function ({loans}: ICustomCard) {


    return (
           <div key={nanoid()} className="card custom-card  bg-base-100 shadow-xl">
               <div key={nanoid()} className="card-body">
                   <CustomCardTitle dataLoans={loans}/>
                   <CustomCardDecr key={nanoid()} dataLoans={loans}/>
                   <div key={nanoid()} className="card-actions justify-end">
                       <button key={nanoid()} className="btn btn-primary no-animation w-full">Оформить</button>
                   </div>
                   <div key={nanoid()} className="card-license">
                       Лицензия № {loans.organization_information.license}
                   </div>
               </div>
           </div>
    )
})

CustomCard.displayName = 'CustomCard';
