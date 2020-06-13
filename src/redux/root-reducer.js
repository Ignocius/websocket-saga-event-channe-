import { combineReducers } from 'redux';

import elementReducer from './element/element.reducers';

const rootRedcuer = combineReducers({
  app: elementReducer,
});

// export default persistReducer(persistConfig, rootRedcuer);
export default rootRedcuer;