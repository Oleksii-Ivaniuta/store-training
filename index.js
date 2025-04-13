import"./assets/styles-BK7AYJoX.js";import{a}from"./assets/vendor-N5iQpiFS.js";a.defaults.baseURL="https://dummyjson.com/products";async function n(){try{const r=await a.get("/category-list").then(t=>t.data);return console.log("fetchCategories",r),r}catch(r){console.log(`fetch categories ${r}`)}}async function d(r=1){try{const t=await a.get(`?limit=12&skip=${(r-1)*12}`).then(c=>c.data.products);return console.log("fetchAllProducts",t),t}catch(t){console.log(`fetch all products ${t}`)}}const s={categories:document.querySelector(".categories"),products:document.querySelector(".products")};async function l(r){try{r.innerHTML="";const c=(await n()).map(o=>`<li class="categories__item">
 <button class="categories__btn" type="button">${o}</button>
</li>`).join("");r.insertAdjacentHTML("beforeEnd",c)}catch(t){console.log(`render categories ${t}`)}}async function i(r,t){try{t.innerHTML="";const o=(await r).map(e=>`<li class="products__item" data-id="${e.id}">
    <img class="products__image" src="${e.thumbnail}" alt="${e.title}"/>
    <p class="products__title">${e.title}</p>
    <p class="products__brand"><span class="products__brand--bold">Brand: ${e.brand}</span></p>
    <p class="products__category">Category: ${e.category}</p>
    <p class="products__price">Price: ${e.price}$</p>
 </li>`).join("");t.insertAdjacentHTML("beforeEnd",o)}catch(c){console.log(`render products ${c}`)}}l(s.categories);i(d(1),s.products);
//# sourceMappingURL=index.js.map
