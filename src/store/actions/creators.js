import * as ActionTypes from './types';

export const setPersonalItems = personalItems => ({
  type: ActionTypes.SET_PERSONAL_ITEMS,
  personalItems,
});

export const setHealthyItems = healthyItems => ({
  type: ActionTypes.SET_HEALTHY_ITEMS,
  healthyItems,
});

export const setFastFoodItems = fastFoodItems => ({
  type: ActionTypes.SET_FAST_FOOD_ITEMS,
  fastFoodItems,
});

export const setIsLoading = isLoading => ({
  type: ActionTypes.SET_IS_LOADING,
  isLoading,
});
