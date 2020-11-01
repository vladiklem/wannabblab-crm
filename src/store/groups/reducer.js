import { INIT_GROUPS_SUCCESS, ADD_GROUP_SUCCESS } from './constants';
import createReducer from '../../utils/store';

export const initialState = [];

const handlers = {
  [INIT_GROUPS_SUCCESS]: (state, action) => [
    ...state,
    ...action.payload.groups,
  ],
  [ADD_GROUP_SUCCESS]: (state, action) => [...state, action.payload.group],
};

export default createReducer(initialState, handlers);
