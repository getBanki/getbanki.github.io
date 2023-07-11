export const DeletingObjFromArray = (d:any,arr:any) => {
    const beforeCompareStorage: any = arr
    delete beforeCompareStorage[arr.indexOf(d)]
    return beforeCompareStorage.filter((d: any) => d ? d : null)
}
export const ListPaymentMethods=(array:any[])=>{
    const list: string[] = []
    for (const data of array) {
        for (const description of data.description.payment_method) {
            if (!list.includes(description)) {
                list.push(description)
            }
        }
    }
    return list
}
export const ListDocuments=(array:any[])=>{
    const list: string[] = []
    for (const data of array) {
        for (const description of data.description.borrower_requirements.documents) {
            if (!list.includes(description)) {
                list.push(description)
            }
        }
    }
    return list
}
export const ListBorrowerCategory=(array:any[])=>{
    const list: string[] = []
    for (const data of array) {
        for (const description of data.description.borrower_category) {
            if (!list.includes(description)) {
                list.push(description)
            }
        }
    }
    return list
}