import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { uiCloseModalSupplier, uiOpenModalSupplier } from '../../actions/ui';
import { eventClearEvent } from '../../actions/events';
import { addNewSupplier, deleteSupplier } from '../../actions/supplier';
import { AddFab } from '../ui/AddFab';
import { EditFab } from '../ui/EditFab';
import { DeleteFab } from '../ui/DeleteFab';


const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    background: '#f1f1f1',
    width: '500px',
    paddingTop: '30px',
    height: '500px',
    borderRadius: '20px'
  },
};

const initevent = {
  name: '',
  nit: '',
  address: ''
}


Modal.setAppElement('#root');



export const SupplierModal = () => {

  const dispatch = useDispatch();

  const { modalSupplier } = useSelector(state => state.ui);
  const { active } = useSelector(state => state.principal);

  const [formValues, setFormValues] = useState(initevent);

  const { name, nit, address } = formValues;
  console.log(name,nit,address);

  const closeModal = () => {
    dispatch(uiCloseModalSupplier());
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
    dispatch(addNewSupplier(formValues));
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
        isOpen={modalSupplier}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal">

        <h1>Proveedor</h1>
        <form onSubmit={handleSubmitForm}>
          <label > <input type="text" placeholder="Nombre" name="name" value={name} onChange={handleInputChange} /> </label>
          <label > <input type="number" placeholder="Nit" name="nit" value={nit} onChange={handleInputChange} /> </label>
          <label > <input type="text" placeholder="Dirreccion" name="address" value={address} onChange={handleInputChange} /> </label>
          <button className="blue" id="btn" type="submit">
            <i className="fa fa-pencil" aria-hidden="true"></i>
          </button>
        </form>
      </Modal>


      {active && (<>
        <button className="add before" onClick={handleBeforeActive}>
          <i className="fa fa-long-arrow-left" aria-hidden="true" ></i>
        </button>
         
         <div onClick={handleBeforeActive}>
        <DeleteFab eventDelete={deleteSupplier} clearEvent={eventClearEvent} />
        </div>

         <EditFab uiOpenModal={uiOpenModalSupplier} />

      </>
      )}


      {!active && (
         <AddFab uiOpenModal={uiOpenModalSupplier}/>

      )}
    </>
  )
}
