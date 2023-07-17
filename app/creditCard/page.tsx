import {PageCreditCard} from "@/components/app/pages/PageCreditCard/PageCreditCard";
import {Metadata} from "next";
export const metadata:Metadata = {
    title: 'Кредитные карты',
    description: 'Самые выгодные условия',
}

export default  function CreditCard() {


    return (
        <div>
          <PageCreditCard />
        </div>


    )
}

