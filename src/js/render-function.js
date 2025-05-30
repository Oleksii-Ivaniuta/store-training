// Функцію для створення, рендеру або видалення розмітки
import { storageKeys } from './constants';
import { addLoadMoreBtn, removeLoadMoreBtn } from './helpers';
import { modalOpen } from './modal';
import { fetchCategories, fetchProductsById } from './products-api';
import { refs } from './refs';

export async function renderCategories(div) {
    try {
        div.innerHTML = "";
    const data = await fetchCategories();
    const markup = data
      .map((i) => {return `<li class="categories__item">
 <button class="categories__btn" type="button">${i}</button>
</li>`;
      })
        .join('');
        div.insertAdjacentHTML("beforeEnd", markup);
  } catch (error) {
    console.log(`render categories ${error}`);
  }
};

export async function renderProducts(apiFunction, div) {
    try {
        div.innerHTML = "";
      const data = await apiFunction;
        const markup = data.products.map((i) => { 
return `<li class="products__item" data-id="${i.id}">
    <img class="products__image" src="${i.thumbnail}" alt="${i.title}"/>
    <p class="products__title">${i.title}</p>
    <p class="products__brand"><span class="products__brand--bold">Brand: ${i.brand}</span></p>
    <p class="products__category">Category: ${i.category}</p>
    <p class="products__price">Price: ${i.price}$</p>
 </li>`
        }).join("");
      div.insertAdjacentHTML("beforeEnd", markup);
      if (data.total > 12 && !(data.products.length > 12))
      {
        addLoadMoreBtn();      
      }
      else {
        removeLoadMoreBtn();
      }
    }
    catch(error) {
        console.log(`render products ${error}`);
    }
};

export async function renderProductById(div, id) {
      try {
        div.innerHTML = "";
        const data = await fetchProductsById(id);
        storageKeys.setCurrentId(data);
        const markup = `<img class="modal-product__img" src="${data.thumbnail}" alt="${data.title}" />
      <div class="modal-product__content">
        <p class="modal-product__title">${data.title}</p>
        <ul class="modal-product__tags">${data.tags}</ul>
        <p class="modal-product__description">${data.description}</p>
        <p class="modal-product__shipping-information">Shipping: ${data.shippingInformation}</p>
        <p class="modal-product__return-policy">Return Policy: ${data.returnPolicy}</p>
        <p class="modal-product__price">Price: ${data.price}$</p>
      </div>`;
        div.insertAdjacentHTML("beforeEnd", markup);
        modalOpen();
    }
    catch(error) {
        console.log(`render products ${error}`);
      }
}

export function renderMoreProducts(data, div) {
const markup = data.products.map((i) => { 
return `<li class="products__item" data-id="${i.id}">
    <img class="products__image" src="${i.thumbnail}" alt="${i.title}"/>
    <p class="products__title">${i.title}</p>
    <p class="products__brand"><span class="products__brand--bold">Brand: ${i.brand}</span></p>
    <p class="products__category">Category: ${i.category}</p>
    <p class="products__price">Price: ${i.price}$</p>
 </li>`
        }).join("");
  div.insertAdjacentHTML("beforeEnd", markup);
  const listItem = document.querySelector('.products__item');
      let rect = listItem.getBoundingClientRect();
      window.scrollBy({
        top: rect.height * 2,
        behavior: 'smooth',
      });
}

export async function renderWishlist(dataFunction, div) {
  div.innerHTML = "";
  try {
    const data = await dataFunction();
     const markup = data.map((i) => { 
return `<li class="products__item" data-id="${i.id}">
    <img class="products__image" src="${i.thumbnail}" alt="${i.title}"/>
    <p class="products__title">${i.title}</p>
    <p class="products__brand"><span class="products__brand--bold">Brand: ${i.brand}</span></p>
    <p class="products__category">Category: ${i.category}</p>
    <p class="products__price">Price: ${i.price}$</p>
 </li>`
        }).join("");
    div.insertAdjacentHTML("beforeEnd", markup);
  }
    catch(error) {
        console.log(`render wishlist ${error}`);
      }
}