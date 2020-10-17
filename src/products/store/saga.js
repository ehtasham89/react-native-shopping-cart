import { put, call, takeEvery } from 'redux-saga/effects';
import * as actions from './action'
import { api } from './../../services'

export function* getAllProducts() {
  const products = yield call(api.getProducts)

  yield put(actions.receiveProducts(products))
}

export function* watchGetProducts() {
  /*
    takeEvery will fork a new `getAllProducts` task on each GET_ALL_PRODUCTS actions
    i.e. concurrent GET_ALL_PRODUCTS actions are allowed
  */
  yield takeEvery(actions.GET_ALL_PRODUCTS, getAllProducts)
}
