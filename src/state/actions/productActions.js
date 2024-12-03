// src/state/actions/productActions.js

import {
    FETCH_PRODUCTS_REQUEST,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_FAILURE,
    FETCH_PRODUCT_DETAIL_REQUEST,
    FETCH_PRODUCT_DETAIL_SUCCESS,
    FETCH_PRODUCT_DETAIL_FAILURE
} from '../actionTypes';
import { fetchProducts as getProducts, fetchProductById as getProductById } from '../../services/productService';

// Acción para obtener la lista de productos
export const fetchProducts = () => async (dispatch) => {
    dispatch({ type: FETCH_PRODUCTS_REQUEST });
    try {
        const products = await getProducts();
        dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: products });
    } catch (error) {
        dispatch({ type: FETCH_PRODUCTS_FAILURE, error: error.message });
    }
};

// Acción para obtener el detalle de un producto específico
export const fetchProductDetail = (productId) => async (dispatch) => {
    dispatch({ type: FETCH_PRODUCT_DETAIL_REQUEST });
    try {
        const product = await getProductById(productId);
        dispatch({ type: FETCH_PRODUCT_DETAIL_SUCCESS, payload: product });
    } catch (error) { 
        dispatch({ type: FETCH_PRODUCT_DETAIL_FAILURE, error: error.message });
    }
};
