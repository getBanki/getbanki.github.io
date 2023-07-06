

import { OptionSelect } from './option-select'
import { IInit, Init } from './init'
import {IDataApi} from "../../../app/lib/models/dataApi";


export type IGlobal = IInit

export class Global<I, T> extends Init<I, T> implements IGlobal {
    constructor(obj: IDataApi) {
        // @ts-ignore
        super(obj)
    }

    toSelectOption(nameFiled: string, labelField = nameFiled, icon = ''): OptionSelect {
        // @ts-ignore
        return new OptionSelect({ label: this[labelField], value: this[nameFiled], icon: icon })
    }
}
