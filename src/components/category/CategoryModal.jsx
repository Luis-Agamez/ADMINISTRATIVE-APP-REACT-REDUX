import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { addNewCategory, DeleteCategory } from '../../actions/category';
import { eventClearEvent } from '../../actions/events';
import { uiCloseModalCategory, uiOpenModalCategory, } from '../../actions/ui';
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
    height: '300px',
    borderRadius: '20px'
  },
};

const initevent = {
  name: '',
}


Modal.setAppElement('#root');

export const CategoryModal = () => {


  const dispatch = useDispatch();

  const { modalCategory } = useSelector(state => state.ui);
  const { active } = useSelector(state => state.principal);

  // const nombre = useSelector(state => state.principal.active.name);
  // console.log(nombre);

  const [formValues, setFormValues] = useState(initevent);

  const { name } = formValues;
  

  const closeModal = () => {
    dispatch(uiCloseModalCategory());
    dispatch(eventClearEvent());
    setFormValues(initevent);
  }

  // function afterOpenModal() {
  //   // references are now sync'd and can be accessed.
  //   subtitle.style.color = '#f00';
  // }


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
    if(!active){
      dispatch(addNewCategory(formValues));
    }
  }

  const handleBeforeActive = () => {
    dispatch(eventClearEvent());
    setFormValues(initevent);
  }



  return (
    <>
      <Modal
        isOpen={modalCategory}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal">

        <h1>{(active) ? 'Edit Category' : 'New Category'}</h1>
        <form onSubmit={handleSubmitForm} >
          <label > <input type="text" placeholder="Nombre" value={name} name="name" onChange={handleInputChange} /> </label>
          <button className="blue" id="btn" type="submit">
            <i className="fa fa-floppy-o" aria-hidden="true"></i>
            Saved</button>
        </form>
      </Modal>

      {active && (<>
        <button className="add before" onClick={handleBeforeActive}>
          <i className="fa fa-long-arrow-left" aria-hidden="true" ></i>
        </button>

          <div onClick={handleBeforeActive}>
          <DeleteFab eventDelete={DeleteCategory} clearEvent={eventClearEvent} />
          </div>
         <EditFab uiOpenModal={uiOpenModalCategory} />
      </>
      )}


      {!active && (
        <AddFab uiOpenModal={uiOpenModalCategory} />
      )}


    </>
  )
}
