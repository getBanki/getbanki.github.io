import {makeAutoObservable} from 'mobx'
import {AllLoans} from "@/components/app/lib/models/all-loans";


interface IPageHomeStateStore {
    allLoans: AllLoans[]
}

class PageHomeStateStore implements IPageHomeStateStore {
    allLoans: AllLoans[] = []

    constructor() {
        makeAutoObservable(this)
    }

    setAllLoans(val: AllLoans[]): void {
        this.allLoans = val
    }

}

export default new PageHomeStateStore()
