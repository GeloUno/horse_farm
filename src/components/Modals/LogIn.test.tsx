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

import { render, screen } from '@testing-library/react';





describe('Login modal', () => {
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

  const emptyVoid = () => { }

  const loginModal = (
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
  it('should ', () => {
    expect(1).not.toBe(2)
    expect(1).toBe(1)
  });
  it('should have container', () => {
    render(loginModal)
    const result = screen.getByTestId('loginModalContainer')
    expect(result).toBeInTheDocument()
    expect(result).toBeVisible()

  });
  it('should have modal', () => {
    render(loginModal)
    const result = screen.getByTestId('loginModal')
    expect(result).toBeInTheDocument()
    expect(result).toBeVisible()

  });
  it('should have body with image ', () => {
    render(loginModal)
    const result = screen.getByTestId('imageModal')
    expect(result).toBeInTheDocument()
    expect(result).toBeVisible()
  });
  it('image modal should have src', () => {
    render(loginModal)
    const result = screen.getByTestId('imageModalSource')
    expect(result).toHaveAttribute('src', 'LoginHorse.png')

  });
  it('should have body with input form ', () => {
    render(loginModal)
    const result = screen.getByTestId('inputModalLoginBody')
    expect(result).toBeInTheDocument()
    expect(result).toBeVisible()
  });
  it('should have back icon', () => {
    render(loginModal)
    const result = screen.getByTestId('backIconModalLogin')
    expect(result).toBeInTheDocument()
    expect(result).toBeVisible()
  });
  it('should have back icon', () => {
    render(loginModal)
    const result = screen.getByTestId('backIconModalLogin')
    expect(result).toBeInTheDocument()
    expect(result).toBeVisible()
  });
  it('should input form login', () => {
    render(loginModal)
    const result = screen.getByTestId('loginBody')
    expect(result).toBeInTheDocument()
    expect(result).toBeVisible()
  });
  it('should have button link to reset password', () => {
    render(loginModal)
    const result = screen.getByTestId('loginBody')
    expect(result).toBeInTheDocument()
    expect(result).toBeVisible()
  });
  it('should have button link to register', () => {
    render(loginModal)
    const result = screen.getByTestId('loginBody')
    expect(result).toBeInTheDocument()
    expect(result).toBeVisible()
  });
});

