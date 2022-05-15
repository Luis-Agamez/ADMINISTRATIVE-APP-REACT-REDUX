import { types } from "../types/types";

export const setSuppliers = (supliers) => ({
  type: types.supplierLoad,
  payload: supliers,
});

export const addNewSupplier = (supplier) => ({
  type: types.supplierAddNew,
  payload: { ...supplier },
});

export const updateSupplier = (supplier) => ({
  type: types.supplierUpdate,
  payload: { ...supplier },
});

export const deleteSupplier = () => ({
  type: types.supplierDelete
});
