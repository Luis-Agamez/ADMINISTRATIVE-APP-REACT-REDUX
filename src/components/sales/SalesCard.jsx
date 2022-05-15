import React from 'react';
import { eventSetActive } from "../../actions/events";
import { useDispatch } from "react-redux";

export const SalesCard = ({ name, clientName, sellerName, amount, date, description }) => {

    const dispatch = useDispatch();

    const handleActiveSale = () => {
        dispatch(eventSetActive({ name, clientName, sellerName, amount, date, description }));
    };


    return (
        <button className="boxv"  onClick={handleActiveSale}>
            <h4>Producto: {name} </h4>
            <h5>Cliente :  {clientName} </h5>
            <h5>Vendedor : {sellerName} </h5>
            <h5>Cantidad :  {amount} </h5>
            <h5>Fecha :  {date} </h5>
            <h6>Descripcion : {description} </h6>
        </button >
    )
}
