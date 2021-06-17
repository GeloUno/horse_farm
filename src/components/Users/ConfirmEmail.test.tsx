
import { IUserInitialState } from '../../redux/reducers/userReducer';
import { IUser } from '../../models/users';
import { combineReducers, createStore } from 'redux';
import { createBrowserHistory } from 'history';
import userReducer from '../../redux/reducers/userReducer';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/core';
import { theme } from '../../utility/materialui';
import ConfirmEmail from './ConfirmEmail';
import { render, screen, fireEvent } from '@testing-library/react';





describe('Confirm email with user no email verified', () => {

  const userExample: Partial<IUser> = {
    email: `example@goo.com`,
    emailVerified: false,
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

  const intervalGetEmailConfirmStatusMock = jest.fn()
  const handleSendVerificationEmailMock = jest.fn()
  const handleSignOutMock = jest.fn()


  const confirmEmail = (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router history={customHistory}>
          <ConfirmEmail
            email={userExample.email!}
            intervalGetEmailConfirmStatus={intervalGetEmailConfirmStatusMock}
            handleSendVerificationEmail={handleSendVerificationEmailMock}
            handleSignOut={handleSignOutMock}
          />
        </Router>
      </ThemeProvider>
    </Provider>
  )
  it('should ', () => {
    expect(1).toBe(1)
  });
  it(`should have component in document and be visible`, async () => {
    render(confirmEmail)
    const result = await screen.getByTestId('confirmEmailComponent')
    expect(result).toBeInTheDocument()
    expect(result).toBeVisible()
  });
  it(`should have title`, async () => {
    render(confirmEmail)
    const result = await screen.getByTestId('confirmEmailTitle')
    expect(result).toBeInTheDocument()
    expect(result).toBeVisible()
    expect(result).toHaveTextContent(`To już ostatni krok rejestracji`)
  });
  it(`should have description`, async () => {
    render(confirmEmail)
    const result = await screen.getByTestId('confirmEmailDescription')
    expect(result).toBeInTheDocument()
    expect(result).toBeVisible()
    expect(result).toHaveTextContent(`Na adres: ${userExample.email} wysłaliśmy prośbę o potwierdzenie że podany email podczas rejestracji jest poprawny`)
  });
  it(`should have button to send again email to confirm`, async () => {
    render(confirmEmail)
    const result = await screen.getByTestId('confirmEmailButtonSendAgain')
    expect(result).toBeInTheDocument()
    expect(result).toBeVisible()

  });
  it(`button to send again email should have content`, async () => {
    render(confirmEmail)
    const result = await screen.getByTestId('confirmEmailButtonSendAgain')
    expect(result).toHaveTextContent(`Wyślij ponownie`)
  });
  it(`button to send again email should not be disable`, async () => {
    render(confirmEmail)
    const result = await screen.getByTestId('confirmButton')
    expect(result).not.toBeDisabled()
  });
  it(`button to send again email should can be click`, async () => {
    render(confirmEmail)
    const button = await screen.getByTestId('confirmButton')
    await fireEvent.click(button)
    expect(handleSendVerificationEmailMock).toHaveBeenCalledTimes(1)
  });
  it(`should have button cancel confirm email`, async () => {
    render(confirmEmail)
    const result = await screen.getByTestId('cancelButton')
    expect(result).toBeInTheDocument()
    expect(result).toBeVisible()

  });
  it(`button cancel confirm email should have content`, async () => {
    render(confirmEmail)
    const result = await screen.getByTestId('cancelButton')
    expect(result).toHaveTextContent(`anuluj`)
  });
  it(`button cancel confirm email should not be disable`, async () => {
    render(confirmEmail)
    const result = await screen.getByTestId('cancelButton')
    expect(result).not.toBeDisabled()
  });
  it(`button cancel confirm email should can be click`, async () => {
    render(confirmEmail)
    const button = await screen.getByTestId('cancelButton')
    await fireEvent.click(button)
    expect(handleSignOutMock).toHaveBeenCalledTimes(1)
  });
  it(`intervalGetEmailConfirmStatusMock should be call on start`, async () => {
    render(confirmEmail)

    expect(intervalGetEmailConfirmStatusMock).toHaveBeenCalledTimes(1)
  });





});
