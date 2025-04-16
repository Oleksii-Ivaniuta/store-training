import { loadCategory, loadProduct, saveInputData, searchProducts } from "./js/handlers";
import { fetchAllProducts, fetchCategories, fetchProductsByCategory, fetchProductsById, fetchProductsByQuery } from "./js/products-api";
import { refs } from "./js/refs";
import { renderCategories, renderProducts } from "./js/render-function";
import { loadFromLocalStorage, removeFromLocalStorage } from "./js/storage";

//Логіка сторінки Home

renderCategories(refs.categories);

renderProducts(fetchAllProducts(1), refs.products);

refs.input.value = loadFromLocalStorage('searchKey') ? loadFromLocalStorage('searchKey') : '';

refs.input.addEventListener('input', saveInputData);

refs.form.addEventListener('submit', searchProducts);

refs.categories.addEventListener('click', loadCategory);

fetchProductsById(2);

refs.products.addEventListener('click', loadProduct);