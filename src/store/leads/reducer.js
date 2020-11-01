import { ADD_CLIENT, INIT_CLIENTS_SUCCESS } from "./constants";
import createReducer from "../../utils/store";

export const initialState = [];

const handlers = {
  [INIT_CLIENTS_SUCCESS]: (state, action) => ([...state, ...action.payload.clients]),
  [ADD_CLIENT]: (state, action) => ([...state, action.payload.client]),
};

export default createReducer(initialState, handlers);
