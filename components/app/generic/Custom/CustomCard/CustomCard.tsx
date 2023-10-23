import React from "react";
import {CustomCardTitle} from "@/components/app/generic/Custom/CustomCard/CustomCardTitle/CustomCardTitle";
import {CustomCardDecr} from "@/components/app/generic/Custom/CustomCard/CustomCardDesc/CustomCardDesc";
import {AllLoans} from "@/components/app/lib/models/all-loans";
import './CustomCard.scss'

interface IProps {
    loans: AllLoans
    fav?:boolean
}

export const CustomCard = ({loans,fav}: IProps) => {


    return (
        <div className="card custom-card duration-500 bg-base-100 shadow-sm">
            <div className="card-body">
                <CustomCardTitle dataLoans={loans}/>
                {
                    !fav ?
                        <>
                            <CustomCardDecr dataLoans={loans}/>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary no-animation w-full">Оформить</button>
                            </div>
                            <div className="card-license">
                                Лицензия № {loans.organization_information.license}
                            </div>
                        </>
                        :
                        null
                }
            </div>
        </div>
    )
}


