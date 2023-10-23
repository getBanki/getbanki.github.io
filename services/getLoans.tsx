export const getAllLoan = async function getLoans() {
    const response = await fetch("https://functions.yandexcloud.net/d4e421s4el59uibv2hg9")
    return response.json()
}
