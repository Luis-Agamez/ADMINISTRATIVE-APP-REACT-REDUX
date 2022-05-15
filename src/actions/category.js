import { fetchConToken } from "../helpers/fetch";
import { types } from "../types/types";

export const startNewCategory = () => {
  return async (useDispatch) => {
    // const newCategory ={
    //     name :''
    // }

    try {
      //TODO Fetch EndPoint
      // dispatch(activeCategory(newCategory));
      // dispatch(addNewCategory(newCategory));
    } catch (error) {
      console.error(error);
    }
  };
};

export const addNewCategory = (category) => ({
  type: types.categoryAddNew,
  payload: { ...category },
});

// export const activeCategory = (category) => ({
//   type: types.setActive,
//   payload: { ...category },
// });

export const startLoadingCategorys = (uid) => {
  return async (dispatch) => {
    //TODO getNotes
    const resp = await fetchConToken("auth/renew");

    const body = await resp.json();

    if (body.ok) {
      dispatch(setCategorys(body.categorys));
    }
  };
};

export const setCategorys = (categorys) => ({
  types: types.categoryLoad,
  payload: categorys,
});

export const startSaveCategory = (category) => {
  return async (dispatch, getState) => {
    // const uid = getState().auth.uid;

    const resp = await fetchConToken("auth/renew");

    const body = await resp.json();

    if (body.ok) {
      dispatch();
    }
  };
};

export const refreshCategory = (category) => ({
  typw: types.categoryUpdate,
  payload: category,
});

export const startCategoryDeleting = (id) => {
  return async (dispatch) => {
    //TODO EndPoint Delete

    dispatch(DeleteCategory());
  };
};

export const DeleteCategory = () => ({
  type: types.categoryDelete
});
