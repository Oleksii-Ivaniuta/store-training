//Обʼєкт з посиланнями на ДОМ елементи

export const refs = {
    categories: document.querySelector(".categories"),
    products: document.querySelector(".products"),
    input: document.querySelector('.search-form__input'),
    form: document.querySelector('.search-form'),
    notFound: document.querySelector('.not-found'),
    modalProduct: document.querySelector('.modal-product'),
    modalWindow: document.querySelector('.modal'),
    modalCloseBtn: document.querySelector('.modal__close-btn'),
    main: document.getElementsByTagName('main')[0],
    loadMoreBtn: document.querySelector('.load-more-btn'),
    addToWishListBtn: document.querySelector('.modal-product__btn--wishlist'),
    addToCartBtn: document.querySelector('.modal-product__btn--cart'),
    wishListCounter: document.querySelector('[data-wishlist-count]'),
    cartCounter: document.querySelector('[data-cart-count]'),
};
