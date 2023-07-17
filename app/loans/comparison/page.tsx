import {Metadata} from "next";
import {PageComparison} from "@/components/app/pages/PageComparison/PageComparison";

export const metadata: Metadata = {
    title: 'Кредитные карты',
    description: 'Самые выгодные условия',
}

export default function CreditCard() {


    return (
        <div>
            <PageComparison/>
        </div>


    )
}

