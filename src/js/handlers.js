import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { storageKeys } from './constants';
import { clearProducts, removeLoadMoreBtn } from './helpers';
import {
  fetchAllProducts,
  fetchProductsByCategory,
  fetchProductsByQuery,
} from './products-api';
import { refs } from './refs';
import {
  renderMoreProducts,
  renderProductById,
  renderProducts,
} from './render-function';
import { loadFromLocalStorage, removeFromLocalStorage, saveToLocalStorage } from './storage';
import { wishList } from "../wishlist";
import { cart } from "../cart";

// Функції, які передаються колбеками в addEventListners
export function searchProducts(event) {
  refs.notFound.classList.remove('not-found--visible');
    event.preventDefault();
    const query = refs.input.value.trim();
  removeFromLocalStorage('searchKey');
  try {
    fetchProductsByQuery(query).then(data => {
      if (data.products.length > 0) {
      renderProducts(fetchProductsByQuery(query), refs.products);
      } else {
        clearProducts();
        refs.notFound.classList.add('not-found--visible');
      }
    });
  } catch (error) {
    console.log(`searchProducts ${error}`);
  }
    refs.input.value = '';
}

export function saveInputData() {
  saveToLocalStorage('searchKey', refs.input.value);
}

export function loadCategory(event) {
  if (event.target.classList.contains('categories__btn')) {
    removeLoadMoreBtn();
    storageKeys.setFirstPage();
    storageKeys.setCategory(event.target.textContent);
    renderProducts(
      fetchProductsByCategory(storageKeys.page, event.target.textContent),
      refs.products
    );
  }
}

export function loadProduct(event) {
  const card = event.target.closest('.products__item');
  if (card && refs.products.contains(card)) {
    const productId = card.dataset.id;
    renderProductById(refs.modalProduct, productId);
  } else {
    return;
  }
}

export async function loadMoreProducts() {
  storageKeys.increasePage();
  try {
    if (storageKeys.api === 1) {
      const data = await fetchAllProducts();
      renderMoreProducts(data, refs.products);
      if (data.total - data.skip < 12) {
        removeLoadMoreBtn();
          iziToast.info({
          message: 'You reached the end of list',
          position: 'bottomCenter',
        });
      }
    } else if (storageKeys.api === 2) {
      const data = await fetchProductsByCategory(
        storageKeys.page,
        storageKeys.category
      );
      renderMoreProducts(data, refs.products);
      console.log(data);

      if (data.total - data.skip < 12) {
        removeLoadMoreBtn();
        iziToast.info({
          message: 'You reached the end of list',
          position: 'bottomCenter',
        });
      }
    }
  } catch (error) {
    console.log(`load more ${error}`);
  }
}


export function addToWishlist() {
  const id = storageKeys.currentId;
  wishList.toggleWishlist(id);
  refs.wishListCounter.textContent = `${(loadFromLocalStorage('wishlist')).length}`;
}


export function addToCart() {
  const id = storageKeys.currentId;
  cart.toggleCart(id);
  refs.cartCounter.textContent = `${(loadFromLocalStorage('cart')).length}`;
console.log(`add to cart, ${id}`)
}

