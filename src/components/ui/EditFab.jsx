import React from 'react'
import { useDispatch } from 'react-redux';

export const EditFab = ({uiOpenModal}) => {

    const dispatch = useDispatch();

    const openModal = (e) => {
        dispatch(uiOpenModal());
      };
    
  return (
    <button className="add" onClick={openModal} >
          <i className="fa fa-pencil-square-o edit" aria-hidden="true" ></i>
        </button>
  )
}
