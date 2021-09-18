import * as types from './constants';

import { getItemsService } from '../../service/catalog';

export const getItems = () => async (dispatch) => {
  try {
    dispatch({
      type: types.LOAD_ITEMS_START,
    });
    const data = await getItemsService();
    return dispatch({
      type: types.LOAD_ITEMS_SUCCESS,
      payload: data,
    });
  } catch (e) {
    console.log(e);
    return dispatch({
      type: types.LOAD_ITEMS_ERROR,
      payload: e,
    });
  }
};
