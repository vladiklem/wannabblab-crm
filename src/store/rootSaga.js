import { all } from 'redux-saga/effects';

import mentors from './mentors/saga';
import clients from './clients/saga';
import groups from './groups/saga';

export default function* () {
  yield all([...mentors, ...clients, ...groups]);
}
