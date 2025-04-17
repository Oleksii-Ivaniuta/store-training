//Константи
export const storageKeys = {
    page: 1,
    increasePage(page) {
        storageKeys.page +=1 ;
    },
    setFirstPage() {
        storageKeys.page = 1;
    },
    category: null,
    setCategory(category) {
        storageKeys.category = category;
    },
    api: null,
    setApi(numberApi) {
        storageKeys.api = numberApi;
    }
}