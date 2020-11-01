import { INIT_PAYMENTS_SUCCESS, ADD_PAYMENT, ADD_PAYMENT_SUCCESS } from "./constants";

export const initPaymentsSuccess = (payments) => ({
  type: INIT_PAYMENTS_SUCCESS,
  payload: {
    payments,
  },
});

export const addPayment = (payment) => ({
  type: ADD_PAYMENT,
  payload: {
    payment,
  },
});

export const addPaymentSuccess = (payment) => ({
  type: ADD_PAYMENT_SUCCESS,
  payload: {
    payment,
  },
});
