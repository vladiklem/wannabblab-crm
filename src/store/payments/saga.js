import {
  takeLatest, put, select,
} from "redux-saga/effects";

import { ADD_PAYMENT } from "./constants";
import { addPaymentSuccess } from "./actions";
import { saveAppData } from "../../services/localStorageService";
import { toObject } from "../../utils/functions";

function* addPaymentSaga({ payload }) {
  const data = yield select((state) => state.payments);
  const newData = [...data, payload.payment];
  saveAppData("payments", toObject(newData));
  yield put(addPaymentSuccess(payload.mentor));
}

export default [
  takeLatest(ADD_PAYMENT, addPaymentSaga),
];
