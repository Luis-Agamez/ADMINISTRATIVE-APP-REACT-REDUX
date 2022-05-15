import { types } from "../types/types";

export const eventSetActive = (event) =>({
    type: types.setActive,
    payload: event
});


export const eventClearEvent = () =>({
    type : types.setClearActive
    });
    