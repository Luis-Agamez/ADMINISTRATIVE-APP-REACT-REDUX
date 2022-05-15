import { types } from "../types/types";

const initialState={
    modalCategory:false,
    modalSupplier: false,
    modalProduct : false,
    modalClient:false,
    modalSales:false,
    activeMenu:false,
    Loading:true
};

export const uiReducer = (state = initialState,action) =>{


    //Loading State
 switch (action.type) {
  case types.uiStartLoding : return {
      ...state,Loading:true
  }

  case types.uiFinishLoding: return {
    ...state,Loading:false
}


//Modal Category State
 
 case types.uiOpenModalCategory:return{
     ...state,
       modalCategory:true
 }

 case types.uiCloseModalCategory:return{
     ...state,modalCategory:false
 }


//Modal Supplier State

case types.uiOpenModalSupplier:return{
    ...state,
      modalSupplier:true
}

case types.uiCloseModalSupplier:return{
    ...state,modalSupplier:false
}


//Modal Client state

case types.uiOpenModalClient:return{
    ...state,
      modalClient:true
}

case types.uiCloseModalClient:return{
    ...state,modalClient:false
}


// Modal Product state

case types.uiOpenModalProduct:return{
    ...state,
      modalProduct:true
}

case types.uiCloseModalProduct:return{
    ...state,modalProduct:false
}



//Menu Active state

case types.iuActiveMenu:return{
    ...state,
    activeMenu:true
}

case types.iuDesactiveMenu:return{
    ...state,activeMenu:false
}


 
  default : return state;
 }

 
}