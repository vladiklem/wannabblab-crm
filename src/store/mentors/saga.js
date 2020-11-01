import {
  takeLatest, put, call,
} from "redux-saga/effects";

import { ADD_MENTOR, INIT_MENTORS } from "./constants";
import { initMentorsSuccess, addMentorSuccess } from "./actions";
import { firebaseService } from "../../services/firebaseService";

function* initMentorsSaga() {
  const snapshot = yield call(firebaseService.get, "mentors");
  let mentors = [];
  snapshot.forEach((user) => {
    mentors = [...mentors, { id: user.id, ...user.data() }];
  });
  yield put(initMentorsSuccess(mentors));
}

function* addMentorSaga({ payload }) {
  yield call(firebaseService.add, "mentors", payload.mentor);
  yield put(addMentorSuccess(payload.mentor));
}

export default [
  takeLatest(INIT_MENTORS, initMentorsSaga),
  takeLatest(ADD_MENTOR, addMentorSaga),
];
