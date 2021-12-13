import { FilterActionType } from './constants';

const setFirstPriceLimit = (payload) => ({
  type: FilterActionType.SET_FIRST_PRICE_LIMIT,
  payload,
});

const setSecondPriceLimit = (payload) => ({
  type: FilterActionType.SET_SECOND_PRICE_LIMIT,
  payload,
});

const addType = (payload) => ({
  type: FilterActionType.ADD_TYPE,
  payload,
});

const deleteType = (payload) => ({
  type: FilterActionType.DELETE_TYPE,
  payload,
});

const addStringCount = (payload) => ({
  type: FilterActionType.ADD_STRING_COUNT,
  payload,
});

const deleteStringCount = (payload) => ({
  type: FilterActionType.DELETE_STRING_COUNT,
  payload,
});

const setStringCounts = (payload) => ({
  type: FilterActionType.SET_STRING_COUNTS,
  payload,
});

const filterAction = {
  setFirstPriceLimit,
  setSecondPriceLimit,
  addType,
  deleteType,
  addStringCount,
  deleteStringCount,
  setStringCounts,
};

export {
  filterAction,
};
