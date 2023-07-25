import {makeAutoObservable} from 'mobx'
import {AllLoans} from "@/components/app/lib/models/all-loans";


interface IPageHomeStateStore {
    allLoans: AllLoans[]
    selectedOffer: any
}

class PageHomeStateStore implements IPageHomeStateStore {
    allLoans: AllLoans[] = []
    selectedOffer = []


    constructor() {
        makeAutoObservable(this)
    }

    setAllLoans(val: AllLoans[]): void {
        this.allLoans = val
    }

    setSelectedOffer(val: any): void {
        this.selectedOffer = val
        console.log(1)
    }


}

export default new PageHomeStateStore()
