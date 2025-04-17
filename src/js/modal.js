import { refs } from "./refs";

//Описана робота модалки - відкриття закриття і все що з модалкою повʼязано
function addModalListerners() {
    refs.modalWindow.addEventListener('click', handleBackdropClickClose);
    refs.modalCloseBtn.addEventListener('click', modalClose);
    document.addEventListener('keydown', handleEscapeClose);
}

export function removeModalListerners() {
   refs.modalWindow.removeEventListener('click', handleBackdropClickClose);
    refs.modalCloseBtn.removeEventListener('click', modalClose);
    document.removeEventListener('keydown', handleEscapeClose);
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