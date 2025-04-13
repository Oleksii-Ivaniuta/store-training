// Функцію для створення, рендеру або видалення розмітки

import { fetchCategories } from './products-api';

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
        console.log(`render products ${error}`);
    }
};