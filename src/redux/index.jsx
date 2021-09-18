import { combineReducers } from 'redux';
import { basketReducer } from './basket/reducer';
import { catalogReducer } from './catalog/reducer';

export const rootReducer = combineReducers({
  catalog: catalogReducer,
  basket: basketReducer,
});
