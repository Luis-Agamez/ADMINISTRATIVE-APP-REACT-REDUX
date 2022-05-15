import React from 'react'
import { useDispatch } from 'react-redux';
// import { uiOpenModalCategory } from '../../actions/ui';

export const AddFab = ({uiOpenModal}) => {

    const dispatch = useDispatch();

    const openModal = (e) => {
        dispatch(uiOpenModal());
      };
    
  return (
    <button className="add"  onClick={openModal}>
    <i className="fa fa-plus" aria-hidden="true"></i>
  </button>
  )
}
