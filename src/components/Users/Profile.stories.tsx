import React from 'react';
import { Story, Meta } from '@storybook/react';
import Profile from './Profile';
import { Provider } from 'react-redux';
import { IUser, EntityAccess } from '../../models/users';
import { IUserInitialState } from './../../redux/reducers/userReducer';
import { createStore, combineReducers } from 'redux';
import userReducer from '../../redux/reducers/userReducer';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';


const userExample: IUser = {
  email: `example@goo.com`,
  emailVerified: true,
  entityAccess: EntityAccess.USER,
  providerId: `google.com`,
  uid: `123456789qazwsx`,
  firstName: `john`,
  lastName: `doe`,
  phone: `123123123`,
  nick: `jd`,
  photoId: `https://pbs.twimg.com/profile_images/1257280933557710850/95taFO3E_400x400.jpg`
}

const initialUserExample: IUserInitialState = {
  user: userExample,
  isLoading: false,
  isError: false,
  errorMessage: null,
  idToken: `null`
}

const reducerUser = combineReducers({ userAction: userReducer });

const state = {
  userAction: initialUserExample
}

const store = createStore(reducerUser, state)

const customHistory = createBrowserHistory();

export default {
  title: 'Components/Profile',
  component: Profile,

} as Meta;

export const PrimaryProfile: Story = () =>
  <Provider store={store}>
    <Router history={customHistory}>
      <Profile />
    </Router>
  </Provider>

PrimaryProfile.storyName = 'Profile User';
