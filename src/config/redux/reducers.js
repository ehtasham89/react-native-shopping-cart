import { combineReducers } from 'redux';

import products from './../../products/store/reducer';
//import cart from './../../cart/store/reducer';
//import favourite from './../../favourite/store/reducer';

const rootReducer = combineReducers({
  products,
});

export default rootReducer;
