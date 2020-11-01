import {
  takeLatest, put, select, call,
} from "redux-saga/effects";

import { INIT_CLIENTS, ADD_CLIENT } from "./constants";
import { addClientSuccess, initClientsSuccess } from "./actions";
import { firebaseService } from "../../services/firebaseService";

function* initClientsSaga() {
  const snapshot = yield call(firebaseService.get, "clients");
  let clients = [];
  snapshot.forEach((user) => {
    clients = [...clients, { id: user.id, ...user.data() }];
  });
  yield put(initClientsSuccess(clients));
}

function* addClientSaga(action) {
  yield call(firebaseService.add, "clients", action.payload.client);
  yield put(addClientSuccess(action.payload.client));
}

export default [
  takeLatest(INIT_CLIENTS, initClientsSaga),
  takeLatest(ADD_CLIENT, addClientSaga),
];
