import {makeAutoObservable} from 'mobx'
import {AllLoans} from "@/components/app/lib/models/all-loans";


interface IPageHomeStateStore {
    allLoans: AllLoans[]
    selectedOffer: AllLoans
}

class PageHomeStateStore implements IPageHomeStateStore {
    allLoans: AllLoans[] = []
    selectedOffer:AllLoans


    constructor() {
        makeAutoObservable(this)
    }

    setAllLoans(val: AllLoans[]): void {
        this.allLoans = val
    }

    setSelectedOffer(val: AllLoans): void {
        this.selectedOffer = val
        console.log(1)
    }


}

export default new PageHomeStateStore()
