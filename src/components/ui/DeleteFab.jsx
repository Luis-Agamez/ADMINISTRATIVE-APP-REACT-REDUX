import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export const DeleteFab = ({eventDelete,clearEvent}) => {

  const { active } = useSelector(state => state.principal);

  const dispatch = useDispatch();

const handleDeleteEvent = () => {
    if (active) {
      dispatch(eventDelete());
      dispatch(clearEvent());
    }
}
  return (
    <button className="delete" onClick={handleDeleteEvent} >
    <i className="fa fa-trash" aria-hidden="true"></i>
    </button>
  )
}
