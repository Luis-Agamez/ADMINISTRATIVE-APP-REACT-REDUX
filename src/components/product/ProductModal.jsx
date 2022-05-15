import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { eventClearEvent } from '../../actions/events';
import { uiCloseModalProduct, uiOpenModalProduct } from '../../actions/ui';
import { AddFab } from '../ui/AddFab';
import { EditFab } from '../ui/EditFab';

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    background: '#f1f1f1',
    width: '800px',
    paddingTop: '30px',
    height: '700px',
    borderRadius: '20px'
  },
};

const initevent = {
  name: '',
  category: '',
  amount: '',
  description: '',
  priceBuy: '',
  priceSale: ''
}


Modal.setAppElement('#root');

export const ProductModal = () => {


  const dispatch = useDispatch();

  const { modalProduct } = useSelector(state => state.ui);
  const { active } = useSelector(state => state.principal);

  const [formValues, setFormValues] = useState(initevent);

  const { name, category, amount, description, priceBuy, priceSale } = formValues;
  console.log(name, category, amount, description, priceBuy, priceSale);

  const closeModal = () => {
    dispatch(uiCloseModalProduct());
    dispatch(eventClearEvent());
    setFormValues(initevent);
  }



  useEffect(() => {
    if (active) {
      setFormValues(active);
    }
  }, [active, setFormValues]);



  const handleInputChange = ({ target }) => {
    console.log(target.name);
    setFormValues(
      {
        ...formValues,
        [target.name]: target.value
      }
    )
  }

  const handleSubmitForm = (e) => {
    e.preventDefault();
    // Todo saved if active or not active
    closeModal();
  }

  const handleBeforeActive = () => {
    dispatch(eventClearEvent());
    setFormValues(initevent);
  }



  return (
    <>
      <Modal
        isOpen={modalProduct}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal">

        <h1>Product</h1>
        <form onSubmit={handleSubmitForm}>
          <label > <input type="text" placeholder="Nombre" name="name" value={name} onChange={handleInputChange} /> </label>
          <label > <input type="text" placeholder="Categoria" name="category" value={category} onChange={handleInputChange} /> </label>
          <label > <input type="text" placeholder="Cantidad" name="amount" value={amount} onChange={handleInputChange} /> </label>
          <label > <input type="text" placeholder="Descripcion" name="description" value={description} onChange={handleInputChange} /> </label>
          <label > <input type="text" placeholder="Precio de Compra" name="priceBuy" value={priceBuy} onChange={handleInputChange} /> </label>

          <label > <input type="text" placeholder="Precio de venta" name="priceSale" value={priceSale} onChange={handleInputChange} /> </label>
          <button className="blue" id="btn" type="submit">
            <i className="fa fa-pencil" aria-hidden="true"></i>
          </button>
        </form>
      </Modal>


      {active && (<>
        <button className="add before" onClick={handleBeforeActive}>
          <i className="fa fa-long-arrow-left" aria-hidden="true" ></i>
        </button>

        <button className="delete">
          <i className="fa fa-trash" aria-hidden="true"></i>
        </button>

        <EditFab  uiOpenModal={uiOpenModalProduct} />
      </>
      )}


      {!active && (
        
   <AddFab uiOpenModal={uiOpenModalProduct} />

      )}

    </>

  )
}
