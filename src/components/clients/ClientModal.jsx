import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { addNewClient, deleteClient } from '../../actions/clients';
import { eventClearEvent } from '../../actions/events';
import { uiCloseModalClient, uiOpenModalClient } from '../../actions/ui';
import { AddFab } from '../ui/AddFab';
import { DeleteFab } from '../ui/DeleteFab';
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
    width: '500px',
    paddingTop: '30px',
    height: '500px',
    borderRadius: '20px'
  },
};

const initevent = {
  name: '',
  lastName: '',
  email: ''
}



Modal.setAppElement('#root');

export const ClientModal = () => {


  const dispatch = useDispatch();

  const { modalClient } = useSelector(state => state.ui);
  const { active } = useSelector(state => state.principal);

  console.log(modalClient);

  const [formValues, setFormValues] = useState(initevent);


  const { name, lastName, email } = formValues;
  console.log(name, lastName, email);

  const closeModal = () => {
    dispatch(uiCloseModalClient());
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
    closeModal();

    if(!active){
      dispatch(addNewClient(formValues));
    }
    // Todo saved if active or not active
    
  }

  const handleBeforeActive = () => {
    dispatch(eventClearEvent());
    setFormValues(initevent);
  }


  return (
    <>
      <Modal
        isOpen={modalClient}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal">

        <h1>Clientes</h1>
        <form  onSubmit={handleSubmitForm} >
          <label > <input type="text" placeholder="Nombre" name="name" value={name} onChange={handleInputChange} /> </label>
          <label > <input type="text" placeholder="Apellido" name="lastName" value={lastName} onChange={handleInputChange} /> </label>
          <label > <input type="text" placeholder="Email" name="email" value={email} onChange={handleInputChange} /> </label>
          
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
        <DeleteFab eventDelete={deleteClient} clearEvent={eventClearEvent} />

        </div>
         <EditFab uiOpenModal={uiOpenModalClient} />

      </>
      )}


      {!active && (
        <AddFab uiOpenModal={uiOpenModalClient} />

      )}



    </>
  )
}
