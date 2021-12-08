import { SortingActionType } from './constants';

const setCategory = (payload) => ({
  type: SortingActionType.SET_CATEGORY,
  payload,
});

const setPriority = (payload) => ({
  type: SortingActionType.SET_PRIORITY,
  payload,
});

export {
  setCategory,
  setPriority,
};
