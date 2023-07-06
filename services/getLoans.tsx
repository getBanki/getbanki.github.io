export const getAllLoan = async function getLoans() {
    const response = await fetch("https://functions.yandexcloud.net/d4e421s4el59uibv2hg9")
    return response.json()
}
export const getNews = async function getLoans() {
    const response = await fetch("https://newsapi.org/v2/everything?q=tesla&from=2023-05-04&sortBy=publishedAt&apiKey=16db47f2a4a44b31a518c159de10c621")
    return response.json()
}
