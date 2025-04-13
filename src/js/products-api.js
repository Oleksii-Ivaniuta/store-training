import axios from "axios";

// Функції для роботи з бекендом
axios.defaults.baseURL = 'https://dummyjson.com/products';

export async function fetchCategories() {
    try {
        const data = await axios.get('/category-list').then((data) => { return data.data });
        console.log('fetchCategories', data);
        return data;
    }
    catch (error) {
        console.log(`fetch categories ${error}`);  
}
};

export async function fetchAllProducts(page = 1) {
    try {
        const data = await axios.get(`?limit=12&skip=${(page - 1) * 12}`).then((data) => { return data.data.products });
        console.log('fetchAllProducts', data);
        
           return data;
        
    }
    catch (error) {
        console.log(`fetch all products ${error}`);     
}
};

export async function fetchProductsById(id) {
    try {
        const data = await axios.get(`${id}`).then((data) => { return data.data });
        console.log('fetchProductsById', data);
        
           return data;
        
    }
    catch (error) {
        console.log(`fetch products by id ${error}`);     
}
};

export async function fetchProductsByQuery(query) {
    try {
        const data = await axios.get(`search?q=${query}`).then((data) => { return data.data.products });
        console.log('fetchProductsByQuery', data);
        
           return data;
        
    }
    catch (error) {
        console.log(`fetch products by query ${error}`);     
}
};

export async function fetchProductsByCategory(category, page = 1) {
    try {
        const data = await axios.get(`category/${category}?limit=12&skip=${(page - 1) * 12}`).then((data) => { return data.data.products });
        console.log('fetchProductsByCategory', data);
        
           return data;
        
    }
    catch (error) {
        console.log(`fetch products by category ${error}`);     
}
};

