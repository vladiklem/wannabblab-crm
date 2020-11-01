import { INIT_BUDGET_SUCCESS } from './constants';

export const initBudgetSuccess = (budget) => ({
  type: INIT_BUDGET_SUCCESS,
  payload: {
    budget,
  },
});
