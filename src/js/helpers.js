import { refs } from "./refs";

//Допоміжні функції
export function clearProducts() {
    refs.products.innerHTML = "";
}

export function addLoadMoreBtn() {
    refs.loadMoreBtn.classList.remove('visually-hidden');    
}

export function removeLoadMoreBtn() {
refs.loadMoreBtn.classList.add('visually-hidden');    
}