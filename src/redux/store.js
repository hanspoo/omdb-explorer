import { createStore, applyMiddleware, compose } from 'redux';
import promise from 'redux-promise-middleware';

import reducer from './reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  /* preloadedState, */ composeEnhancers(applyMiddleware(promise)),
);

export default store;
