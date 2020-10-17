import { combineReducers } from 'redux';

import products from './../../products/store/reducer';
import cart from './../../cart/store/reducer';
import fav from './../../favourite/store/reducer';

const rootReducer = combineReducers({
  products,
  cart,
  fav
});

export default rootReducer;
