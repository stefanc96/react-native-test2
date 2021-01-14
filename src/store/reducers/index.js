import * as ActionTypes from '../actions/types';
import {initialState} from './state';

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_PERSONAL_ITEMS:
      const {personalItems} = action;
      state = {
        ...state,
        personalItems,
      };
      break;
    case ActionTypes.SET_HEALTHY_ITEMS:
      const {healthyItems} = action;
      state = {
        ...state,
        healthyItems,
      };
      break;
    case ActionTypes.SET_FAST_FOOD_ITEMS:
      const {fastFoodItems} = action;
      state = {
        ...state,
        fastFoodItems,
      };
      break;
    case ActionTypes.SET_IS_LOADING:
      const {isLoading} = action;
      state = {
        ...state,
        isLoading,
      };
      break;
  }

  return state;
};
