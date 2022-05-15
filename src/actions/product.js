import { types } from "../types/types";

export const setProducts = (products) => ({
  type: types.productLoad,
  payload: products,
});

export const addNewProduct = (product) => ({
  type: types.productAddNew,
  payload: { ...product },
});

export const updateProduct = (product) => ({
  type: types.productUpdate,
  payload: { ...product },
});

export const deleteProduct = () => ({
  type: types.productDelete,
});
