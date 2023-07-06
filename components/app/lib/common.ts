export const deleteItem = (storageItem: any, dataItem: any): any => {
    storageItem.map((d: any) => {
        if (d.title === dataItem.data.title) {
            const beforeCompareStorage: any = storageItem
            delete beforeCompareStorage[storageItem.indexOf(d)]
            const afterCompare = beforeCompareStorage.filter((d: any) => d ? d : null)
            return afterCompare.length === 0 ? [] : afterCompare
        }
    })
    console.log(storageItem)
}
