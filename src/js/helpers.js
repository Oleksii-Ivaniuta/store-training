import { refs } from "./refs";

//Допоміжні функції
export function clearProducts() {
    refs.products.innerHTML = "";
}

export function modalOpen() {
    refs.modalWindow.classList.add('modal--is-open');
}

export function modalClose() {
 refs.modalWindow.classList.remove('modal--is-open');
}