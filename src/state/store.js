// src/state/store.js

import { createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk';

import authReducer from './reducers/authReducer';
import userReducer from './reducers/userReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  // otros reducers
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
