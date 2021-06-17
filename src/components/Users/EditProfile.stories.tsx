import React from 'react';
import { Story, Meta } from '@storybook/react';
import { IUserInitialState } from '../../redux/reducers/userReducer';
import { IUser } from '../../models/users';
import { combineReducers, createStore } from 'redux';
import { createBrowserHistory } from 'history';
import userReducer from '../../redux/reducers/userReducer';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux'
import { ThemeProvider } from '@material-ui/core';
import { theme } from '../../utility/materialui';
import EditProfile from './EditProfile';


const userExample: Partial<IUser> = {
  email: `example@goo.com`,
  providerId: `google.com`,
  uid: `123456789qazwsx`,
  id: '1111111111111',
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

const emptyVoid = () => { }

export default {
  title: 'Components/EditProfile',
  component: EditProfile,

} as Meta;


export const PrimaryProfile: Story = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Router history={customHistory}>
        <EditProfile logoutAfterTime={emptyVoid} logoutUserHandle={emptyVoid} />
      </Router>
    </ThemeProvider>
  </Provider>
)

PrimaryProfile.storyName = 'Full user';


const userExampleNoIdAndNoUid: Partial<IUser> = {
  email: `example@goo.com`,
  providerId: `google.com`,
  firstName: `john`,
  lastName: `doe`,
  phone: `123123123`,
  nick: `jd`,
  photoId: `https://pbs.twimg.com/profile_images/1257280933557710850/95taFO3E_400x400.jpg`
}

const initialUserExampleNoIdAndNoUid: IUserInitialState = {
  user: userExampleNoIdAndNoUid,
  isLoading: false,
  isError: false,
  errorMessage: null,
  idToken: `null`
}

const stateNoIdAndNoUid = {
  userAction: initialUserExampleNoIdAndNoUid
}

const storeNoIdAndNoUid = createStore(reducerUser, stateNoIdAndNoUid)



export const SecondProfile: Story = () => (
  <Provider store={storeNoIdAndNoUid}>
    <ThemeProvider theme={theme}>
      <Router history={customHistory}>
        <EditProfile logoutAfterTime={emptyVoid} logoutUserHandle={emptyVoid} />
      </Router>
    </ThemeProvider>
  </Provider>
)

SecondProfile.storyName = 'no data user';

const userExampleNoPhotoID: Partial<IUser> = {
  email: `example@goo.com`,
  providerId: `google.com`,
  uid: `123456789qazwsx`,
  id: '1111111111111',
  firstName: `john`,
  lastName: `doe`,
  phone: `123123123`,
  nick: `jd`,
  // photoId: `https://pbs.twimg.com/profile_images/1257280933557710850/95taFO3E_400x400.jpg`
}

const initialUserExampleNoPhotoID: IUserInitialState = {
  user: userExampleNoPhotoID,
  isLoading: false,
  isError: false,
  errorMessage: null,
  idToken: `null`
}

const stateNoPhotoID = {
  userAction: initialUserExampleNoPhotoID
}

const storeNoPhotoID = createStore(reducerUser, stateNoPhotoID)



export const ThirdProfile: Story = () => (
  <Provider store={storeNoPhotoID}>
    <ThemeProvider theme={theme}>
      <Router history={customHistory}>
        <EditProfile logoutAfterTime={emptyVoid} logoutUserHandle={emptyVoid} />
      </Router>
    </ThemeProvider>
  </Provider>
)

ThirdProfile.storyName = 'no photo';

const userExampleOnlyEmailAndUidID: Partial<IUser> = {
  email: `example@goo.com`,
  providerId: `google.com`,
  uid: `123456789qazwsx`,
  id: '1111111111111',
  // firstName: `john`,
  // lastName: `doe`,
  // phone: `123123123`,
  // nick: `jd`,
  // photoId: `https://pbs.twimg.com/profile_images/1257280933557710850/95taFO3E_400x400.jpg`
}

const initialUserExampleOnlyEmailAndUidID: IUserInitialState = {
  user: userExampleOnlyEmailAndUidID,
  isLoading: false,
  isError: false,
  errorMessage: null,
  idToken: `null`
}

const stateOnlyEmailAndUidID = {
  userAction: initialUserExampleOnlyEmailAndUidID
}

const storeOnlyEmailAndUidID = createStore(reducerUser, stateOnlyEmailAndUidID)



export const FourthProfile: Story = () => (
  <Provider store={storeOnlyEmailAndUidID}>
    <ThemeProvider theme={theme}>
      <Router history={customHistory}>
        <EditProfile logoutAfterTime={emptyVoid} logoutUserHandle={emptyVoid} />
      </Router>
    </ThemeProvider>
  </Provider>
)

FourthProfile.storyName = 'only email';