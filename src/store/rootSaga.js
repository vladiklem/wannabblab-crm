import { all } from "redux-saga/effects";

import general from "./general/saga";
import mentors from "./mentors/saga";
import leads from "./leads/saga";
import payments from "./payments/saga";
import groups from "./groups/saga";

export default function* () {
  yield all([...general, ...mentors, ...leads, ...payments, ...groups]);
}
