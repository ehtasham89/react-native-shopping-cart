import { put, call, fork, takeEvery, all } from 'redux-saga/effects'

export function* watchGetProducts() {
  /*
    takeEvery will fork a new `getAllProducts` task on each GET_ALL_PRODUCTS actions
    i.e. concurrent GET_ALL_PRODUCTS actions are allowed
  */
  yield takeEvery("GET_ALL_PRODUCTS", getAllProducts)
}


export default function* root() {
  yield all([fork(getAllProducts), fork(watchGetProducts)])
}

