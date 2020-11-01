import { INIT_BUDGET_SUCCESS } from "./constants";
import createReducer from "../../utils/store";

export const initialState = {
  initialSum: 0,
};

const handlers = {
  [INIT_BUDGET_SUCCESS]: (state, action) => ({ ...state, ...action.payload.budget }),
};

export default createReducer(initialState, handlers);
