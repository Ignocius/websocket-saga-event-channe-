import { createStore as createReduxStore, applyMiddleware } from 'redux';
// import { persistStore } from 'redux-persist';
import logger from 'redux-logger';

import createSagaMiddleware from 'redux-saga';

import rootDSaga from './root-saga';

import rootReducer from './root-reducer';

const sagaMiddleware = createSagaMiddleware();

const MIDDLEWARES = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
  MIDDLEWARES.push(logger);
};



const createStore = (initialState) => {
  const store = createReduxStore(
    rootReducer,
    {
      app: initialState.app,
    },
    applyMiddleware(...MIDDLEWARES),
  );

  sagaMiddleware.run(rootDSaga);
  return {
    store,
  };
};


export default createStore;

// const persistor = persistStore(store);

// export default { store, persistor };