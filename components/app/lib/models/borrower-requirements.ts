import {Global, IGlobal} from "@/components/app/lib/models/global";



export interface IBorrowerRequirements extends IGlobal {
    age: {
        maximum_age: number;
        minimum_age: number;
    };
    documents: string[];
    registration: string;
}

export class BorrowerRequirements extends Global<IBorrowerRequirements, BorrowerRequirements> implements IBorrowerRequirements {

    age: {
        maximum_age: number;
        minimum_age: number;
    };
    documents: string[];
    registration: string;

    constructor(obj: IBorrowerRequirements) {
        super(obj)
    }

}
