import { takeLatest, put, call } from 'redux-saga/effects';

import { INIT_CLIENTS, ADD_CLIENT, UPDATE_CLIENT } from './constants';
import { CLIENTS } from '../../constants';
import {
  addClientSuccess,
  initClientsSuccess,
  updateClientSuccess,
} from './actions';
import { firebaseService } from '../../services/firebaseService';

function* initClientsSaga() {
  const snapshot = yield call(firebaseService.get, CLIENTS);
  let clients = [];
  snapshot.forEach((user) => {
    clients = [...clients, { id: user.id, ...user.data() }];
  });
  yield put(initClientsSuccess(clients));
}

function* addClientSaga({ payload }) {
  yield call(firebaseService.add, CLIENTS, payload.client);
  yield put(addClientSuccess(payload.client));
}

function* updateClientSaga({ payload: { client } }) {
  yield call(firebaseService.upd, CLIENTS, client.id, client);
  yield put(updateClientSuccess(client));
}

export default [
  takeLatest(INIT_CLIENTS, initClientsSaga),
  takeLatest(ADD_CLIENT, addClientSaga),
  takeLatest(UPDATE_CLIENT, updateClientSaga),
];
