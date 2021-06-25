import { Story, Meta } from '@storybook/react';
import { IUserInitialState } from '../../redux/reducers/userReducer';
import { IUser } from '../../models/users';
import { combineReducers, createStore } from 'redux';
import { createBrowserHistory } from 'history';
import userReducer from '../../redux/reducers/userReducer';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/core';
import { theme } from '../../utility/materialui';
import LoginUser from './LogIn';

const userExample: Partial<IUser> = {
  // email: `example@goo.com`,
  // emailVerified: true,
  // providerId: `google.com`,
  // uid: `123456789qazwsx`,
  // id: '1111111111111',
  // firstName: `john`,
  // lastName: `doe`,
  // phone: `123123123`,
  // nick: `jd`,
  // photoId: `https://pbs.twimg.com/profile_images/1257280933557710850/95taFO3E_400x400.jpg`
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
  title: 'Modals/LoginUser',
  component: LoginUser,

} as Meta;

const emptyVoid = () => { }

const PrimaryProfile: Story = (args) => (
  <Provider store={store} >
    <ThemeProvider theme={theme}>
      <Router history={customHistory}>
        <LoginUser
          loginModalToggle={emptyVoid}
          signinModalToggle={emptyVoid}
          resetPasswordModalToggle={emptyVoid}
          setLoginModalShow={emptyVoid}
        />
      </Router>
    </ThemeProvider>
  </Provider>
)
export const Login = PrimaryProfile.bind({})
Login.args = {
}

Login.storyName = 'Login user no user';
