import {nanoid} from "nanoid";
import React, {memo, useState} from "react";
import {faClock, faCoins, faPercent} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {AllLoans} from "@/components/app/lib/models/all-loans";

interface ICustomCard {
    dataLoans: AllLoans
}

export const CustomCardDecr = memo(({dataLoans}: ICustomCard) => {

        const [desc] = useState(dataLoans.short_description)

        return (
            <div className='card-desc'>

                <div key={nanoid()}>
                    <div key={nanoid()} className='card-desc-text bg-base-200 '>
                        <FontAwesomeIcon
                            role='img'
                            className='custom-icon '
                            icon={faCoins}/>
                        От {desc.summa.minimum_loan_amount} до {desc.summa.maximum_loan_amount} Руб.
                    </div>
                    <div key={nanoid()} className='card-desc-text bg-base-200'>
                        <FontAwesomeIcon
                            role='img'
                            className='custom-icon '
                            icon={faPercent}/>
                        От {desc.percent.minimum_loan_interest} до {desc.percent.maximum_loan_interest} %.
                    </div>
                    <div key={nanoid()} className='card-desc-text bg-base-200'>
                        <FontAwesomeIcon
                            role='img'
                            className='custom-icon '
                            icon={faClock}/>
                        От {desc.time.minimum_time} до {desc.time.maximum_time} Мин.
                    </div>
                </div>
            </div>
        )
    }
)
CustomCardDecr.displayName = 'CustomCardDecr'
