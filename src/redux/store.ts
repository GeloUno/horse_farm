import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import userReducer from './reducers/userReducer';


interface IDefaultState {

}

const reducerUser = combineReducers({ userAction: userReducer });
const initinalState: IDefaultState = {};
const middleware = [thunk];

const store = createStore(
  reducerUser,
  initinalState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

export type RootState = ReturnType<typeof reducerUser>