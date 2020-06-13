import { call, all } from 'redux-saga/effects';

export function* onInitelement() {
    yield console.log('13');
}

export function* elementSagas() {
    yield all([
      call(onInitelement),
    ]);
  }