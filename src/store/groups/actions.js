import {
  INIT_GROUPS, ADD_GROUP, INIT_GROUPS_SUCCESS, ADD_GROUP_SUCCESS,
} from "./constants";

export const initGroups = () => ({
  type: INIT_GROUPS,
});

export const initGroupsSuccess = (groups) => ({
  type: INIT_GROUPS_SUCCESS,
  payload: {
    groups,
  },
});

export const addGroup = (group) => ({
  type: ADD_GROUP,
  payload: {
    group,
  },
});

export const addGroupSuccess = (group) => ({
  type: ADD_GROUP_SUCCESS,
  payload: {
    group,
  },
});
