import { render, getByTestId, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { IUserInitialState } from '../../redux/reducers/userReducer';
import { createStore, combineReducers } from 'redux';
import userReducer from '../../redux/reducers/userReducer';
import { IUser, EntityAccess } from '../../models/users';
import { ThemeProvider } from '@material-ui/core';
import { theme } from '../../utility/materialui';
import LogInBody from './LogInBody';
describe('Login Body component no user in redux state', () => {

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

  const emptyVoidExample = () => { }

  const reducerUser = combineReducers({ userAction: userReducer });

  const state = {
    userAction: initialUserExample
  }

  const store = createStore(reducerUser, state)

  const customHistory = createBrowserHistory();


  const loginBodyNoUser = <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Router history={customHistory}>
        <LogInBody
          loginModalToggle={emptyVoidExample} resetPasswordModalToggle={emptyVoidExample} signinModalToggle={emptyVoidExample}
        />
      </Router>
    </ThemeProvider>
  </Provider>

  it('should ', () => {
    expect(1).toBe(1)
    expect(1).not.toBe(2)
  });
  it('should have login body in document and should be visible ', () => {
    const { getByTestId } = render(loginBodyNoUser)
    expect(getByTestId('loginBody')).toBeInTheDocument()
    expect(getByTestId('loginBody')).toBeVisible()
  });
  it('should have description and should be visible ', () => {
    const { getByTestId } = render(loginBodyNoUser)
    expect(getByTestId('loginDescription')).toBeInTheDocument()
    expect(getByTestId('loginDescription')).toBeVisible()
    expect(getByTestId('loginDescription')).toHaveTextContent('zaloguj przez:')
  });
  it('should have login button by google ', () => {
    const { getByTestId } = render(loginBodyNoUser)
    expect(getByTestId('socialMediaButtonGoogle')).toBeInTheDocument()
    expect(getByTestId('socialMediaButtonGoogle')).toBeVisible()
  });
  it('should have login button by facebook ', () => {
    const { getByTestId } = render(loginBodyNoUser)
    expect(getByTestId('socialMediaButtonFacebook')).toBeInTheDocument()
    expect(getByTestId('socialMediaButtonFacebook')).toBeVisible()
  });
  it('should have login form by password component ', () => {
    const { getByTestId } = render(loginBodyNoUser)
    expect(getByTestId('loginByPasswordFormikComponent')).toBeInTheDocument()
    expect(getByTestId('loginByPasswordFormikComponent')).toBeVisible()
  });
  it('should have Register button', () => {
    const { getByTestId } = render(loginBodyNoUser)
    expect(getByTestId('buttonRegister')).toBeInTheDocument()
    expect(getByTestId('buttonRegister')).toBeVisible()
    expect(getByTestId('buttonRegister')).toHaveTextContent('Rejesteacja')
  });
  it('should have Reset password button', () => {
    const { getByTestId } = render(loginBodyNoUser)
    expect(getByTestId('buttonResetPassword')).toBeInTheDocument()
    expect(getByTestId('buttonResetPassword')).toBeVisible()
    expect(getByTestId('buttonResetPassword')).toHaveTextContent('Resetuj hasło')
  });
})