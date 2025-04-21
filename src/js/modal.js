import { addToCart, addToWishlist } from "./handlers";
import { refs } from "./refs";

//Описана робота модалки - відкриття закриття і все що з модалкою повʼязано
function addModalListerners() {
    refs.modalWindow.addEventListener('click', handleBackdropClickClose);
    refs.modalCloseBtn.addEventListener('click', modalClose);
    document.addEventListener('keydown', handleEscapeClose);
    refs.addToCartBtn.addEventListener('click', addToCart);
    refs.addToWishListBtn.addEventListener('click', addToWishlist);
}

export function removeModalListerners() {
   refs.modalWindow.removeEventListener('click', handleBackdropClickClose);
    refs.modalCloseBtn.removeEventListener('click', modalClose);
    document.removeEventListener('keydown', handleEscapeClose);
       refs.addToCartBtn.removeEventListener('click', addToCart);
    refs.addToWishListBtn.removeEventListener('click', addToWishlist);
}

export function modalOpen() {
    refs.modalWindow.classList.add('modal--is-open');
    addModalListerners();
}

export function modalClose() {
    refs.modalWindow.classList.remove('modal--is-open');
    removeModalListerners();
}

function handleEscapeClose(event) {
    if (event.key === 'Escape') {
        modalClose();       
    }
    else {
        return;
    }
}

function handleBackdropClickClose(event) {
    if (event.target === refs.modalWindow) {
        modalClose();
    }
    else {
        return;
    }
}