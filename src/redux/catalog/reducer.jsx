import * as types from './constants';

const initialState = {
  catalog: [],
  isLoading: true,
};
export const catalogReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOAD_ITEMS_START:
      return {
        ...state,
        isLoading: true,
      };
    case types.LOAD_ITEMS_SUCCESS:
      return {
        ...state,
        catalog: action.payload.items,
        isLoading: false,
      };
    default:
      return state;
  }
};
