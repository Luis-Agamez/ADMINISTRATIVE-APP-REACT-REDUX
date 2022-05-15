import { types } from "../types/types";

const initialState = {
  categorys: [],
  suppliers: [],
  products: [],
  clients: [],
  sales: [],
  active: null,
};

export const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    //Active state

    case types.setActive:
      return {
        ...state,
        active: {
          ...action.payload,
        },
      };

    case types.setClearActive:
      return {
        ...state,
        active: null,
      };

    //Category
    case types.categoryAddNew:
      return {
        ...state,
        categorys: [action.payload, ...state.categorys],
      };

    case types.categoryLoad:
      return {
        ...state,
        categorys: [action.payload],
      };

    case types.categoryUpdate:
      return {
        ...state,
        categorys: state.categorys.map((category) =>
          category.id === action.payload.id ? action.payload : category
        ),
      };

    case types.categoryDelete:
      return {
        ...state,
        categorys: state.categorys.filter(
          category => category.name !== state.active.name
          )
      };

    //Client

    case types.clientLoad:
      return {
        ...state,
        clients: [action.payload],
      };

    case types.clientAddNew:
      return {
        ...state,
        clients: [action.payload, ...state.clients],
      };

    case types.clientDelete:
      return {
        ...state,
        clients: state.clients.filter(
          client => (client.name !== state.active.name)
          )

      };

    case types.clientUpdate:
      return {
        ...state,
        clients: state.clients.map((client) =>
          client.id === action.payload.id ? action.payload : client
        ),
      };

    //Suppliers

    case types.supplierLoad:
      return {
        ...state,
        suppliers: [action.payload],
      };

    case types.supplierAddNew:
      return {
        ...state,
        suppliers: [action.payload, ...state.suppliers],
      };

     // Update name x id de Product

    case types.supplierDelete:
      return {
        ...state,
        suppliers: state.suppliers.filter(
          supplier => (supplier.id !== state.active.id)
          )
        
      };

    case types.supplierUpdate:
      return {
        ...state,
        suppliers: state.suppliers.map((supplier) =>
          supplier.id === action.payload.id ? action.payload : supplier
        ),
      };

    // Product

    case types.productLoad:
      return {
        ...state,
        products: [action.payload],
      };

    case types.productAddNew:
      return {
        ...state,
        products: [action.payload, ...state.products],
      };

    case types.productDelete:
      return {
        ...state,
        products: state.products.filter(
          product => (product.id !== state.active.id)
          )
        
      };

     

    case types.productUpdate:
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.payload.id ? action.payload : product
        ),
      };

    //Cleaning Data

    case types.logoutCleaning:
      return {
        ...state,
        action: null,
        categorys: [],
        suppliers: [],
        products: [],
        clients: [],
        sales: [],
      };

    //Default state
    default:
      return state;
  }
};
