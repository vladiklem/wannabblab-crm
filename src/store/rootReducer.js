import { combineReducers } from "redux";

import mentors from "./mentors/reducer";
import leads from "./leads/reducer";
import budget from "./budget/reducer";
import payments from "./payments/reducer";
import groups from "./groups/reducer";

export default combineReducers({
  mentors,
  leads,
  budget,
  payments,
  groups,
});
