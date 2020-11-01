import {
  INIT_CLIENTS,
  INIT_CLIENTS_SUCCESS,
  ADD_CLIENT,
  ADD_CLIENT_SUCCESS,
  UPDATE_CLIENT,
  UPDATE_CLIENT_SUCCESS,
} from './constants';

export const initClients = () => ({
  type: INIT_CLIENTS,
});

export const initClientsSuccess = (clients) => ({
  type: INIT_CLIENTS_SUCCESS,
  payload: {
    clients,
  },
});

export const addClient = (client) => ({
  type: ADD_CLIENT,
  payload: {
    client,
  },
});

export const addClientSuccess = (client) => ({
  type: ADD_CLIENT_SUCCESS,
  payload: {
    client,
  },
});

export const updateClient = (client) => ({
  type: UPDATE_CLIENT,
  payload: {
    client,
  },
});

export const updateClientSuccess = (client) => ({
  type: UPDATE_CLIENT_SUCCESS,
  payload: {
    client,
  },
});
