import {Global, IGlobal} from "@/components/app/lib/models/global";
import {ShortDescription} from "@/components/app/lib/models/short-description";
import {OrganizationInformation} from "@/components/app/lib/models/organization-information";
import {BorrowerRequirements} from "@/components/app/lib/models/borrower-requirements";


export interface IAllLoans extends IGlobal {
    description: {
        borrower_category: [
                | "Безработным"
                | "Пенсионерам"
                | "Бизнес"
                | "Должникам"
        ];
        borrower_requirements: BorrowerRequirements;
        methods_obtaining: string[];
        payment_method: string[];
    };
    img: string;
    link: string;
    organization_information: OrganizationInformation;
    place: number;
    rate: number;
    short_description: ShortDescription;
    title: string;
}

export class AllLoans extends Global<IAllLoans, AllLoans> implements IAllLoans {
    description: {
        borrower_category: [
                | "Безработным"
                | "Пенсионерам"
                | "Бизнес"
                | "Должникам"
        ];
        borrower_requirements: BorrowerRequirements;
        methods_obtaining: string[];
        payment_method: string[];
    };
    img: string;
    link: string;
    organization_information: OrganizationInformation;
    place: number;
    rate: number;
    short_description: ShortDescription;
    title: string;

    constructor(obj: IAllLoans) {
        super(obj)
    }

}
