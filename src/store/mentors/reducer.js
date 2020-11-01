import { INIT_MENTORS_SUCCESS, ADD_MENTOR_SUCCESS } from "./constants";
import createReducer from "../../utils/store";

export const initialState = [];

const handlers = {
  [INIT_MENTORS_SUCCESS]: (state, action) => ([...state, ...action.payload.mentors]),
  [ADD_MENTOR_SUCCESS]: (state, action) => ([
    ...state,
    action.payload.mentor,
  ]),
};

export default createReducer(initialState, handlers);
