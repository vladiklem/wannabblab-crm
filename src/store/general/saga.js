import { takeLatest, put } from "redux-saga/effects";
import { initMentorsSuccess } from "../mentors/actions";
import { initLeadsSuccess } from "../leads/actions";
import { initPaymentsSuccess } from "../payments/actions";
import { initBudgetSuccess } from "../budget/actions";
import { getAppData } from "../../services/localStorageService";

import { INIT_APP } from "./constants";
import { toArray } from "../../utils/functions";

function* initAppSaga() {
  const store = getAppData();
  yield put(initMentorsSuccess(toArray(store.mentors)));
  yield put(initLeadsSuccess(toArray(store.leads)));
  const parsedPayments = toArray(store.payments);
  yield put(initPaymentsSuccess(parsedPayments));
  yield put(initBudgetSuccess(store.budget));
}

export default [
  takeLatest(INIT_APP, initAppSaga),
];
