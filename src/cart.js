import { refs } from './js/refs';
import { renderWishlist } from './js/render-function';
import { loadFromLocalStorage, saveToLocalStorage } from './js/storage';
//Логіка сторінки Cart

export const cart = {
   getCart() {
  const data = loadFromLocalStorage('cart');
  return Array.isArray(data) ? data : [];
},

    toggleCart(product) {
        const ct = cart.getCart();
        const exist = ct.some(item => item.id === product.id);
        let updateCart;
        if (exist) {
            updateCart = ct.filter(item => item.id !== product.id )
        }
        else {
            updateCart = [...ct, product];
        }
        saveToLocalStorage('cart', updateCart);
    }
};
console.log(cart.getCart());
refs.cartCounter.textContent = loadFromLocalStorage('cart')? (loadFromLocalStorage('cart')).length : 0;
renderWishlist(cart.getCart, refs.products);