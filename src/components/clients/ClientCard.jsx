import React from 'react'
import { eventSetActive } from "../../actions/events";
import { useDispatch } from "react-redux";

export const ClientCard = ({name,lastName,email}) => {

  const dispatch = useDispatch();

  const handleActiveClient = () => {
      dispatch(eventSetActive({name,lastName,email}));
  };

  return (
    <button className="box" onClick={handleActiveClient}  >
      <h2>Nombre : {name}</h2>
      <h2>Apellido : {lastName} </h2>
      <h3>Email : {email}</h3>
     </button >
  )
}
