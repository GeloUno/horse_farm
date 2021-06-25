import { IUserInitialState } from '../../redux/reducers/userReducer';
import { IUser } from '../../models/users';
import { combineReducers, createStore } from 'redux';
import { createBrowserHistory } from 'history';
import userReducer from '../../redux/reducers/userReducer';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/core';
import { theme } from '../../utility/materialui';

import { render, screen } from '@testing-library/react';
import ResetPassword from './ResetPassword';


describe('Reset Password modal', () => {
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

  const componentToTest = (
    <Provider store={store} >
      <ThemeProvider theme={theme}>
        <Router history={customHistory}>
          <ResetPassword
            loginModalToggle={emptyVoid}
            resetPasswordModalToggle={emptyVoid}
            setResetPasswordModalShow={emptyVoid}
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
    render(componentToTest)
    const result = screen.getByTestId('resetpasswordModalContainer')
    expect(result).toBeInTheDocument()
    expect(result).toBeVisible()

  });
  it('should have modal', () => {
    render(componentToTest)
    const result = screen.getByTestId('resetpasswordModal')
    expect(result).toBeInTheDocument()
    expect(result).toBeVisible()
  });
  it('should have back icon', () => {
    render(componentToTest)
    const result = screen.getByTestId('backIconModalResetPassord')
    expect(result).toBeInTheDocument()
    expect(result).toBeVisible()
  });

  it('should have text aboult resetpassword', () => {
    render(componentToTest)
    const result = screen.getByTestId('textModalResetpassword')
    expect(result).toBeInTheDocument()
    expect(result).toBeVisible()
  });
  it('text aboult resetpassword should have content', () => {
    render(componentToTest)
    const result = screen.getByTestId('textModalResetpassword')
    expect(result).toHaveTextContent('Proszę podać e-mail w celu resetowania hasła. Instrukcja przywracania hasła będzie zawarta w wiadomości e-mail')
  });

  it('should have section with input form ', () => {
    render(componentToTest)
    const result = screen.getByTestId('inputSectionResetPassword')
    expect(result).toBeInTheDocument()
    expect(result).toBeVisible()
  });

  it('should have component reset password formik', () => {
    render(componentToTest)
    const result = screen.getByTestId('resetPasswordFormik')
    expect(result).toBeInTheDocument()
    expect(result).toBeVisible()
  });
});

