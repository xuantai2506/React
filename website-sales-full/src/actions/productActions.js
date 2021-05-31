import { FETCH_PRODUCTS } from "../types";

export const fetchProducts = async (dispact) => {
    const res = await fetch('/api/products');

    const data = await res.json();

    dispact({
        type: FETCH_PRODUCTS,
        payload: data,
    })
}