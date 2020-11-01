import {
  INIT_MENTORS,
  ADD_MENTOR,
  INIT_MENTORS_SUCCESS,
  ADD_MENTOR_SUCCESS,
} from './constants';

export const initMentors = () => ({
  type: INIT_MENTORS,
});

export const initMentorsSuccess = (mentors) => ({
  type: INIT_MENTORS_SUCCESS,
  payload: {
    mentors,
  },
});

export const addMentor = (mentor) => ({
  type: ADD_MENTOR,
  payload: {
    mentor,
  },
});

export const addMentorSuccess = (mentor) => ({
  type: ADD_MENTOR_SUCCESS,
  payload: {
    mentor,
  },
});
