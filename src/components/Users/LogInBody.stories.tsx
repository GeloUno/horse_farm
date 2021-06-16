import React from 'react';
import { Story, Meta } from '@storybook/react';
import LogInBody from './LogInBody';
import LogIn from '../../components/Modals/LogIn';
import { IUserInitialState } from '../../redux/reducers/userReducer';
import { IUser } from '../../models/users';
import { combineReducers, createStore } from 'redux';
import { createBrowserHistory } from 'history';
import userReducer from '../../redux/reducers/userReducer';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux'
import { ThemeProvider } from '@material-ui/core';
import { theme } from '../../utility/materialui';
// import { theme } from './utility/materialui';

const userEmptyExample: Partial<IUser> = {
  // email: `example@goo.com`,
  // emailVerified: true,
  // entityAccess: EntityAccess.USER,
  // providerId: `google.com`,
  // uid: `123456789qazwsx`,
  // firstName: `john`,
  // lastName: `doe`,
  // phone: `123123123`,
  // nick: `jd`,
  // photoId: `https://pbs.twimg.com/profile_images/1257280933557710850/95taFO3E_400x400.jpg`
}

const initialUserExample: IUserInitialState = {
  user: userEmptyExample,
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
  title: 'Components/LoginBody',
  component: LogIn,

} as Meta;

const emptyVoidExample = () => { }

export const PrimaryProfile: Story = () =>

  <LogInBody
    loginModalToggle={emptyVoidExample} resetPasswordModalToggle={emptyVoidExample} signinModalToggle={emptyVoidExample}
  />


PrimaryProfile.storyName = 'Log in body';
PrimaryProfile.decorators = [(Story) => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Router history={customHistory}>
        <Story />
      </Router>
    </ThemeProvider>
  </Provider>
)]