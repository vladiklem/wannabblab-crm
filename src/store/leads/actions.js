import {
  INIT_CLIENTS, INIT_CLIENTS_SUCCESS, INIT_LEADS, ADD_LEAD, INIT_LEADS_SUCCESS, ADD_LEAD_SUCCESS, ADD_CLIENT, ADD_CLIENT_SUCCESS,
} from "./constants";

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

export const initLeads = () => ({
  type: INIT_LEADS,
});

export const initLeadsSuccess = (leads) => ({
  type: INIT_LEADS_SUCCESS,
  payload: {
    leads,
  },
});

export const addLead = (lead) => ({
  type: ADD_LEAD,
  payload: {
    lead,
  },
});

export const addLeadSuccess = (lead) => ({
  type: ADD_LEAD_SUCCESS,
  payload: {
    lead,
  },
});
