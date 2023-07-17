import React from "react";
import {CustomCardTitle} from "@/components/app/generic/Custom/CustomCard/CustomCardTitle/CustomCardTitle";
import {CustomCardDecr} from "@/components/app/generic/Custom/CustomCard/CustomCardDesc/CustomCardDesc";
import {AllLoans} from "@/components/app/lib/models/all-loans";


interface IProps {
    loans: AllLoans
}

export const CustomCard = ({loans}: IProps) => {


        return (
            <div className="card custom-card  bg-base-100 shadow-xl">
                <div className="card-body">
                    <CustomCardTitle dataLoans={loans}/>
                    <CustomCardDecr dataLoans={loans}/>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary no-animation w-full">Оформить</button>
                    </div>
                    <div className="card-license">
                        Лицензия № {loans.organization_information.license}
                    </div>
                </div>
            </div>
        )
    }


