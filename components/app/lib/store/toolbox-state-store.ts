import {makeAutoObservable} from 'mobx'
import {AllLoans} from "@/components/app/lib/models/all-loans";
import {ListBorrowerCategory, ListDocuments, ListPaymentMethods} from "@/components/app/lib/common";


interface IToolBoxStateStore {
    valueSearchForm: string
    valueRangeSumFrom: number
    valueRangeDayFrom: number
    valueMethodObtaining: string
    valueDocuments: string
    valueCategoryBorrowers: string
    rangeSum: number[]
    rangeDay: number[]
    stateFilter: boolean
    listPayments: string[]
    listDocuments: string[]
    listCategoryBorrowers: string[]
}

class ToolBoxStateStore implements IToolBoxStateStore {
    valueSearchForm = ''
    valueRangeSumFrom = 0
    valueRangeDayFrom = 0
    valueMethodObtaining = ''
    valueDocuments = ''
    valueCategoryBorrowers = ''
    rangeSum = [100, 1000, 5000, 10000, 20000, 30000, 50000, 60000, 100000]
    rangeDay = [1, 7, 14, 20, 30, 60, 120, 240, 360]
    stateFilter = false
    listPayments: string[] = []
    listDocuments: string[] = []
    listCategoryBorrowers: string[] = []

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

    setValueMethodObtaining(val: string): void {
        this.valueMethodObtaining = val
    }

    setValueDocuments(val: string): void {
        this.valueDocuments = val
    }
    setValueCategoryBorrowers(val: string): void {
        this.valueCategoryBorrowers = val
    }

    setStateFilter(val: boolean): void {
        this.stateFilter = val
    }

    setListPayments(val: string[]): void {
        this.listPayments = val
    }

    setListDocuments(val: string[]): void {
        this.listDocuments = val
    }
    setListCategoryBorrowers(val: string[]): void {
        this.listCategoryBorrowers = val
    }

    getList(array: AllLoans[]) {
        console.log(array)
        this.setListDocuments(ListDocuments(array))
        this.setListPayments(ListPaymentMethods(array))
        this.setListCategoryBorrowers(ListBorrowerCategory(array))
    }

}


export default new ToolBoxStateStore()
