// src/services/productService.js

import { fetchData } from '../utils/apiUtils';

// Obtener todos los productos
export const fetchProducts = async () => {
    const url = 'http://localhost:8080/products';
    try {
        const products = await fetchData(url);
        return products;
    } catch (error) {
        throw new Error('Error fetching products: ' + error.message);
    }
};

// Obtener un producto por ID
export const fetchProductById = async (productId) => {
    const url = `http://localhost:8080/products/${productId}`;
    try {
        const product = await fetchData(url);
        return product;
    } catch (error) {
        throw new Error('Error fetching product details: ' + error.message);
    }
};
