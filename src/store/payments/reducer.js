import { INIT_PAYMENTS_SUCCESS, ADD_PAYMENT_SUCCESS } from "./constants";
import createReducer from "../../utils/store";
import { PaymentTarget } from "../../constants";

export const initialState = [];

export const initialPayment = {
  id: "",
  sum: 0,
  target: PaymentTarget.NONE,
  targetId: "",
  description: "",
};

const handlers = {
  [INIT_PAYMENTS_SUCCESS]: (state, action) => ([...state, ...action.payload.payments]),
  [ADD_PAYMENT_SUCCESS]: (state, action) => ([
    ...state,
    action.payload.payment,
  ]),
};

export default createReducer(initialState, handlers);
