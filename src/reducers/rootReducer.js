import { combineReducers } from "redux"
import { mainReducer } from "./mainReducer";
import { uiReducer } from "./uiReducer";

export const rootReducer = combineReducers({
    ui:uiReducer,
    principal: mainReducer

    // TODO AuthReducer
});