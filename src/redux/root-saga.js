import { all, call } from 'redux-saga/effects';

import { elementSagas } from './element/element.sagas'

export default function* rootSaga() {
  yield all([ 
    call(elementSagas),
  ]);
}