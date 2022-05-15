import React from 'react';
import { eventSetActive } from "../../actions/events";
import { useDispatch } from "react-redux";

export const SupplierCard = ({name,nit,address}) => {

  const dispatch = useDispatch();

  const handleActiveSupplier = () => {
      dispatch(eventSetActive({name,nit,address}));
  };


  return (
    <button className="box"  onClick={handleActiveSupplier}>
     <h2>Nombre: {name} </h2>
      <h3>NIT : {nit} </h3>
      <h4>Direccion : {address} </h4>
     </button >
      
  )
}
