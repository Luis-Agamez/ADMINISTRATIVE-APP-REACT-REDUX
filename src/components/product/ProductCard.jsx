import React from 'react';
import { eventSetActive } from "../../actions/events";
import { useDispatch } from "react-redux";

export const ProductCard = ({name,category,amount,description,priceBuy,priceSale}) => {

  const dispatch = useDispatch();

    const handleActiveProduct = () => {
        dispatch(eventSetActive({name,category,amount,description,priceBuy,priceSale}));
    };

  return (
    <button className="box"  onClick={handleActiveProduct}>
    <h4>Nombre: {name}</h4>
    <h5>Categoria : {category}</h5>
     <h6>Cantidad: {amount} </h6>
    <h6>Description : {description} </h6>
    <h5>Precio de Compra : {priceBuy} </h5>
    <h5>Precio de Venta  : {priceSale} </h5>
    </button >
  )
}
