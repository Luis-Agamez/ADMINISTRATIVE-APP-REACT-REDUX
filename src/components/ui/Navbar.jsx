import React from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { eventClearEvent } from '../../actions/events';
import './style.css';
export const Navbar = () => {

 const dispatch = useDispatch()

 const {active} = useSelector(state => state.principal)

  const handleRemoveEvent = () => {
     if(active) {
       dispatch(eventClearEvent());
     }
  }


  return (
    <div className="navbar navbar-ligth bg-ligth mt">

      {/* <button className="userBtn">
         <i className="fa fa-user-circle user" aria-hidden="true"></i>
         <span className="navbar-brand">Andres</span>
         </button> */}


      <Link to="/category">
        <button className="userBtn"  onClick={handleRemoveEvent}>
          <i className="fa fa-server user" aria-hidden="true"></i>
          <span className="navbar-brand">Categorys</span>
        </button>
      </Link>


      <Link to="/suppliers">
        <button className="userBtn" onClick={handleRemoveEvent}>
          <i className="fa fa-truck user" aria-hidden="true"></i>
          <span className="navbar-brand">Suppliers</span>
        </button>
      </Link>


      <Link to="/clients">
        <button className="userBtn" onClick={handleRemoveEvent}>
          <i className="fa fa-address-card-o user" aria-hidden="true"></i>
          <span className="navbar-brand">Clients</span>
        </button>
      </Link>



      <Link to="/product"  onClick={handleRemoveEvent} >
        <button className="userBtn">
          <i className="fa fa-shopping-cart user" aria-hidden="true"></i>
          <span className="navbar-brand">Products</span>
        </button>
      </Link>




      <Link to="/sales">
        <button className="userBtn" onClick={handleRemoveEvent}>
          <i className="fa fa-handshake-o user" aria-hidden="true"></i>
          <span className="navbar-brand">Sales</span>
        </button>
      </Link>

      {/* <Link to="/login">
        <button className="logoutBtn">
          <span className="logout">Salir   </span>
          <i className="fa fa-sign-out logout" aria-hidden="true"></i>
        </button>
      </Link> */}
    </div>
  )
}
