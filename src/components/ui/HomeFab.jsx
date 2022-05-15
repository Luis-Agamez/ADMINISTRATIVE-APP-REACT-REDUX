import React from 'react'
import { Link } from "react-router-dom";
export const HomeFab = () => {
  return (
    <Link to="/">
    <button className="add home">
      <i className="fa fa-home" aria-hidden="true"></i>
    </button>
  </Link>
  )
}
