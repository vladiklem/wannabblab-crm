import {
  ADD_CLIENT_SUCCESS,
  INIT_CLIENTS_SUCCESS,
  UPDATE_CLIENT_SUCCESS,
} from './constants';
import createReducer from '../../utils/store';

export const initialState = [];

const handlers = {
  [INIT_CLIENTS_SUCCESS]: (state, { payload }) => [
    ...state,
    ...payload.clients,
  ],
  [ADD_CLIENT_SUCCESS]: (state, { payload }) => [...state, payload.client],
  [UPDATE_CLIENT_SUCCESS]: (state, { payload }) => [
    ...state.map((client) =>
      client.id === payload.client.id ? { ...client, ...payload.client } : client),
  ],
};

export default createReducer(initialState, handlers);
