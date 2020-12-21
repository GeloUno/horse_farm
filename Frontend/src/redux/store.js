import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import userReducer from './reducers/userReducer';

const reducer = combineReducers({ userAction: userReducer });
const initinalState = {};
const middleware = [thunk];

const store = createStore(
  reducer,
  initinalState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
