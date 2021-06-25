import { IUserInitialState } from '../../redux/reducers/userReducer';
import { IUser } from '../../models/users';
import { combineReducers, createStore } from 'redux';
import { createBrowserHistory } from 'history';
import userReducer from '../../redux/reducers/userReducer';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/core';
import { theme } from '../../utility/materialui';
import SingUpUser from './SignUp';

import { render, screen } from '@testing-library/react';

// import configureMockStore from 'redux-mock-store'
// import thunk from 'redux-thunk'

// const middlewares = [thunk]
// const mockStore = configureMockStore(middlewares)



describe('SignUp modal', () => {
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
  const loginModalToggleMock = jest.fn()
  const signinModalToggleMock = jest.fn()
  const setSinginModalShowMock = jest.fn()

  const signupModal = (
    <Provider store={store} >
      <ThemeProvider theme={theme}>
        <Router history={customHistory}>
          <SingUpUser
            loginModalToggle={loginModalToggleMock}
            signinModalToggle={signinModalToggleMock}
            setSinginModalShow={setSinginModalShowMock}
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
    render(signupModal)
    const result = screen.getByTestId('signupModalContainer')
    expect(result).toBeInTheDocument()
    expect(result).toBeVisible()

  });
  it('should have modal', () => {
    render(signupModal)
    const result = screen.getByTestId('signinModal')
    expect(result).toBeInTheDocument()
    expect(result).toBeVisible()

  });
  it('should have body with image ', () => {
    render(signupModal)
    const result = screen.getByTestId('imageModal')
    expect(result).toBeInTheDocument()
    expect(result).toBeVisible()
  });
  it('image modal should have src', () => {
    render(signupModal)
    const result = screen.getByTestId('imageModalSourceSignup')
    expect(result).toHaveAttribute('src', 'SigninHorse.png')

  });
  it('should have body with input form ', () => {
    render(signupModal)
    const result = screen.getByTestId('signupInputForm')
    expect(result).toBeInTheDocument()
    expect(result).toBeVisible()
  });
  it('should have input body form register', () => {
    render(signupModal)
    const result = screen.getByTestId('signupInputForm')
    expect(result).toBeInTheDocument()
    expect(result).toBeVisible()
  });
  it('should have back icon', () => {
    render(signupModal)
    const result = screen.getByTestId('backIconModalSignup')
    expect(result).toBeInTheDocument()
    expect(result).toBeVisible()
  });
});

