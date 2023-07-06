import {Global, IGlobal} from "@/components/app/lib/models/global";



export interface IOrganizationInformation extends IGlobal {
    address: string;
    license: string;
    telephone: string;
    trademark: string;
}

export class OrganizationInformation extends Global<IOrganizationInformation, OrganizationInformation> implements IOrganizationInformation {
    address: string;
    license: string;
    telephone: string;
    trademark: string;
    constructor(obj: IOrganizationInformation) {
        super(obj)
    }

}
