import {Global, IGlobal} from "@/components/app/lib/models/global";


export interface IShortDescription extends IGlobal {
    percent: {
        maximum_loan_interest: number;
        minimum_loan_interest: number;
        option: string;
        other: string;
    };
    stocks: string;
    summa: {
        maximum_loan_amount: number;
        minimum_loan_amount: number;
    };
    term: {
        before: number;
        from: number;
    };
    time: {
        maximum_time: number;
        minimum_time: number;
        other: string;
    };
}

export class ShortDescription extends Global<IShortDescription, ShortDescription> implements IShortDescription {
    percent: {
        maximum_loan_interest: number;
        minimum_loan_interest: number;
        option: string;
        other: string;
    };
    stocks: string;
    summa: {
        maximum_loan_amount: number;
        minimum_loan_amount: number;
    };
    term: {
        before: number;
        from: number;
    };
    time: {
        maximum_time: number;
        minimum_time: number;
        other: string;
    };

    constructor(obj: IShortDescription) {
        super(obj)
    }

}
