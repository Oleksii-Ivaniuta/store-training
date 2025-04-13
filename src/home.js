import { fetchAllProducts, fetchCategories, fetchProductsByCategory, fetchProductsById, fetchProductsByQuery } from "./js/products-api";
import { refs } from "./js/refs";
import { renderCategories, renderProducts } from "./js/render-function";
import { removeFromLocalStorage } from "./js/storage";

//Логіка сторінки Home

renderCategories(refs.categories);

renderProducts(fetchAllProducts(1), refs.products);