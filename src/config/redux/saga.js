import { fork, all } from 'redux-saga/effects';
import * as productSaga from './../../products/store/saga';

//root saga combiner
export default function* root() {
  yield all([fork(productSaga.getAllProducts), fork(productSaga.watchGetProducts)])
}

