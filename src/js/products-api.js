import axios from 'axios';
import { storageKeys } from './constants';

// Функції для роботи з бекендом
axios.defaults.baseURL = 'https://dummyjson.com/products';

export async function fetchCategories() {
  try {
    const data = await axios.get('/category-list').then(data => {
      return data.data;
    });
    return data;
  } catch (error) {
    console.log(`fetch categories ${error}`);
  }
}

export async function fetchAllProducts(page = storageKeys.page) {
  try {
    const data = await axios
      .get(`?limit=12&skip=${(page - 1) * 12}`)
      .then(data => {
          return data.data;
      });  
      storageKeys.setApi(1);
    return data;
  } catch (error) {
    console.log(`fetch all products ${error}`);
  }
}

export async function fetchProductsById(id) {
  try {
    const data = await axios.get(`${id}`).then(data => {
      return data.data;
    });
    return data;
  } catch (error) {
    console.log(`fetch products by id ${error}`);
  }
}

export async function fetchProductsByQuery(query) {
  try {
    const data = await axios.get(`search?q=${query}`).then(data => {
      return data.data;
    });
    return data;
  } catch (error) {
    console.log(`fetch products by query ${error}`);
  }
}

export async function fetchProductsByCategory(page = storageKeys.page, category) {
  try {
    const data = await axios
      .get(`category/${category}?limit=12&skip=${(page - 1) * 12}`)
      .then(data => {
        return data.data;
      });
      storageKeys.setApi(2);
    return data;
  } catch (error) {
    console.log(`fetch products by category ${error}`);
  }
}
