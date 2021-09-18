import * as types from './constants';

export const buyItem = (data) => async (dispatch) => {
  try {
    dispatch({
      type: types.CREATE_ITEM_START,
    });
    return dispatch({
      type: types.CREATE_ITEM_SUCCESS,
      payload: data,
    });
  } catch (e) {
    console.log(e);
    return dispatch({
      type: types.CREATE_ITEM_ERROR,
      payload: e,
    });
  }
};

export const getItemsFromLS = () => async (dispatch) => {
  try {
    dispatch({
      type: types.LOAD_ITEM_LOCALSTORAGE_START,
    });
    const selectItems = JSON.parse(localStorage.getItem('selectItems'));
    if (selectItems === null) throw localStorage.setItem('selectItems', JSON.stringify([]));
    return dispatch({
      type: types.LOAD_ITEM_LOCALSTORAGE_SUCCESS,
      payload: selectItems,
    });
  } catch (e) {
    console.log(e);
    return dispatch({
      type: types.LOAD_ITEM_LOCALSTORAGE_ERROR,
      payload: e,
    });
  }
};

export const deleteItemFromLS = (item) => async (dispatch) => {
  try {
    dispatch({
      type: types.DELETE_ITEM_LOCALSTORAGE_START,
    });
    const selectItems = JSON.parse(localStorage.getItem('selectItems'));
    console.log('12');
    const filterSelectItems = selectItems.filter((element) => element.id !== item.id);
    console.log(filterSelectItems);
    localStorage.setItem('selectItems', JSON.stringify(filterSelectItems));
    return dispatch({
      type: types.DELETE_ITEM_LOCALSTORAGE_SUCCESS,
      payload: filterSelectItems,
    });
  } catch (e) {
    console.log(e);
    return dispatch({
      type: types.DELETE_ITEM_LOCALSTORAGE_ERROR,
      payload: e,
    });
  }
};
