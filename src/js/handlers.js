import { currentPage } from "./constants";
import { clearProducts, removeLoadMoreBtn } from "./helpers";
import { fetchProductsByCategory, fetchProductsByQuery } from "./products-api";
import { refs } from "./refs";
import { renderProductById, renderProducts } from "./render-function";
import { removeFromLocalStorage, saveToLocalStorage } from "./storage";

// Функції, які передаються колбеками в addEventListners
export function searchProducts(event) {
    refs.notFound.classList.remove("not-found--visible");
    event.preventDefault();
    const query = refs.input.value.trim();
    removeFromLocalStorage('searchKey');
    try {
        fetchProductsByQuery(query)
            .then(data => {
                if (data.products.length > 0) {
                    renderProducts(fetchProductsByQuery(query), refs.products)
                }
                else {
                    clearProducts();
                    refs.notFound.classList.add("not-found--visible");
                }
            }
            )
        }
    catch (error) {
        console.log(`searchProducts ${error}`); 
    };
    refs.input.value = '';
};

export function saveInputData() {
    saveToLocalStorage('searchKey', refs.input.value);
};

export function loadCategory(event) {
    if (event.target.classList.contains('categories__btn')) {
        renderProducts(fetchProductsByCategory(currentPage, event.target.textContent), refs.products);
    }
};

export function loadProduct(event) {
    const card = event.target.closest('.products__item');
    if (card && refs.products.contains(card)) {
        const productId = card.dataset.id;
        renderProductById(refs.modalProduct, productId);
    }
    else {
        return
    }
};
