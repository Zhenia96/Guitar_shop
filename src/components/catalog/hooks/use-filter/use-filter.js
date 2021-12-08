import { useReducer } from 'react';
import { FilterActionType } from './constants';

const initialState = {
  firstPriceLimit: null,
  secondPriceLimit: null,
  availableTypes: [],
  availableStringCounts: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case FilterActionType.SET_FIRST_PRICE_LIMIT:
      return ({
        ...state,
        firstPriceLimit: action.payload,
      });
    case FilterActionType.SET_SECOND_PRICE_LIMIT:
      return ({
        ...state,
        secondPriceLimit: action.payload,
      });
    case FilterActionType.ADD_TYPE:
      return ({
        ...state,
        availableTypes: [...state.availableTypes, action.payload],
      });
    case FilterActionType.DELETE_TYPE:
      return ({
        ...state,
        availableTypes: state.availableTypes.filter(
          (type) => type !== action.payload,
        ),
      });
    case FilterActionType.ADD_STRING_COUNT:
      return ({
        ...state,
        availableStringCounts: [...state.availableStringCounts, action.payload],
      });
    case FilterActionType.DELETE_STRING_COUNT:
      return ({
        ...state,
        availableStringCounts: state.availableStringCounts.filter(
          (stringCount) => stringCount !== action.payload,
        ),
      });
    default:
      return state;
  }
};

const useFilter = () => {
  const store = useReducer(reducer, initialState);

  return store;
};

export default useFilter;
