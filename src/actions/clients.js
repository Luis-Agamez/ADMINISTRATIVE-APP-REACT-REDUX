import { types } from "../types/types";

export const setClients = (clients) => ({
  type: types.clientLoad,
  payload: clients,
});

export const addNewClient = (client) => ({
  type: types.clientAddNew,
  payload: { ...client },
});

export const updateClient = (client) => ({
  type: types.clientUpdate,
  payload: { ...client },
});

export const deleteClient = () => ({
  type: types.clientDelete
});
