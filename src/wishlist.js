//Логіка сторінки Wishlist

import { refs } from './js/refs';
import { renderWishlist } from './js/render-function';
import { loadFromLocalStorage, saveToLocalStorage } from './js/storage';

export const wishList = {
   getWishlist() {
  const data = loadFromLocalStorage('wishlist');
  return Array.isArray(data) ? data : [];
},

    toggleWishlist(product) {
        const wl = wishList.getWishlist();
        const exist = wl.some(item => item.id === product.id);
        let updateWishlist;
        if (exist) {
            updateWishlist = wl.filter(item => item.id !== product.id )
        }
        else {
            updateWishlist = [...wl, product];
        }
        saveToLocalStorage('wishlist', updateWishlist);
    }
};
console.log(wishList.getWishlist());
refs.wishListCounter.textContent = loadFromLocalStorage('wishlist')? (loadFromLocalStorage('wishlist')).length : 0;
renderWishlist(wishList.getWishlist, refs.products);
