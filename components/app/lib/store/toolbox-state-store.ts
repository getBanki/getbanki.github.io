import {makeAutoObservable} from 'mobx'


interface IToolBoxStateStore {
    valueSearchForm: string
    valueRangeSumFrom: number
    valueRangeDayFrom: number
}

class ToolBoxStateStore implements IToolBoxStateStore {
    valueSearchForm = ''
    valueRangeSumFrom = 0
    valueRangeDayFrom = 0

    constructor() {
        makeAutoObservable(this)
    }

    setValueSearchForm(val: string): void {
        this.valueSearchForm = val
    }
    setValueRangeSumFrom(val: number): void {
        this.valueRangeSumFrom = val
    }
    setValueRangeDayFrom(val: number): void {
        this.valueRangeDayFrom = val
    }

}

export default new ToolBoxStateStore()
