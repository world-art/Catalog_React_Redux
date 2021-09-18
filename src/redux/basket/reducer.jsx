import * as types from './constants';

const initialState = {
  basket: [],
};
export const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CREATE_ITEM_SUCCESS:
      return {
        ...state,
        basket: state.basket.concat([action.payload]),
      };
    case types.LOAD_ITEM_LOCALSTORAGE_SUCCESS:
      return {
        ...state,
        basket: state.basket.concat(action.payload),
      };
    case types.DELETE_ITEM_LOCALSTORAGE_SUCCESS:
      return {
        ...state,
        basket: action.payload,
      };
    default:
      return state;
  }
};
