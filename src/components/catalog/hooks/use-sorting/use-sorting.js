import { useReducer } from 'react';
import { SortingActionType } from './constants';

const initialState = {
  category: null,
  priority: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case SortingActionType.SET_CATEGORY:
      return ({
        ...state,
        category: action.payload,
      });
    case SortingActionType.SET_PRIORITY:
      return ({
        ...state,
        priority: action.payload,
      });
    default:
      return state;
  }
};

const useSorting = () => {
  const store = useReducer(reducer, initialState);

  return store;
};

export default useSorting;
