import { combineReducers } from 'redux';

import mentors from './mentors/reducer';
import clients from './clients/reducer';
import budget from './budget/reducer';
import groups from './groups/reducer';

export default combineReducers({
  mentors,
  clients,
  budget,
  groups,
});
