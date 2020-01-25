import { all } from "redux-saga/effects";

import postsSagas from './posts/postsSagas'

export default function* rootSaga() {
  yield all([...postsSagas]);
}
