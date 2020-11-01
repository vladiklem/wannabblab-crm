import { takeLatest, put, call } from 'redux-saga/effects';

import { INIT_GROUPS, ADD_GROUP } from './constants';
import { addGroupSuccess, initGroupsSuccess } from './actions';
import { firebaseService } from '../../services/firebaseService';

function* initGroupsSaga() {
  const snapshot = yield call(firebaseService.get, 'groups');
  let groups = [];
  snapshot.forEach((user) => {
    groups = [...groups, { id: user.id, ...user.data() }];
  });
  yield put(initGroupsSuccess(groups));
}

function* addGroupSaga(action) {
  yield call(firebaseService.add, 'groups', action.payload.group);
  yield put(addGroupSuccess(action.payload.group));
}

export default [
  takeLatest(INIT_GROUPS, initGroupsSaga),
  takeLatest(ADD_GROUP, addGroupSaga),
];
