
import { refs } from "./refs";

//Допоміжні функції
export function clearProducts() {
    refs.products.innerHTML = "";
}

export function addLoadMoreBtn() {
    refs.main.insertAdjacentHTML("beforeEnd", `<button class="load-more-btn" type="button">Load more</button>`);
    refs.loadMoreBtn = document.querySelector('.load-more-btn');
    refs.loadMoreBtn.addEventListener('click', loadMoreProducts);
    
}

export function removeLoadMoreBtn() {
    if (refs.loadMoreBtn) {
    refs.loadMoreBtn.remove();
    }
}