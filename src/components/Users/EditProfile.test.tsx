import { render, getByTestId, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { IUserInitialState } from '../../redux/reducers/userReducer';
import { createStore, combineReducers } from 'redux';
import userReducer from '../../redux/reducers/userReducer';
import { IUser, EntityAccess } from '../../models/users';
import { ThemeProvider } from '@material-ui/core';
import { theme } from '../../utility/materialui';
import EditProfile from './EditProfile';




describe('Edit profile component ', () => {

  const userExample: Partial<IUser> = {
    email: `example@goo.com`,
    emailVerified: true,
    entityAccess: EntityAccess.USER,
    providerId: `google.com`,
    id: '1234567890',
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

  const mockFn1 = () => jest.fn()
  const mockFn2 = () => jest.fn()

  const reducerUser = combineReducers({ userAction: userReducer });

  const state = {
    userAction: initialUserExample
  }

  const store = createStore(reducerUser, state)

  const customHistory = createBrowserHistory();


  const editProfile = <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Router history={customHistory}>
        <EditProfile
          logoutAfterTime={mockFn1}
          logoutUserHandle={mockFn2}
        />
      </Router>
    </ThemeProvider>
  </Provider>



  it('should ', () => {
    expect(1).toBe(1)
    expect(1).not.toBe(2)
  });

  it('should have eidt profile container ', async () => {
    render(editProfile);

    const result = await screen.findByTestId('editProfileUser')

    expect(result).toBeInTheDocument()
    expect(result).toBeVisible()

  });
  it('should have eidt profile image ', async () => {
    render(editProfile);

    const result = await screen.findByTestId('editImageProfile')

    expect(result).toBeInTheDocument()
    expect(result).toBeVisible()

  });
  it('should have image profile visible ', async () => {
    render(editProfile);

    const result = await screen.findByTestId('imageProfile')

    expect(result).toBeInTheDocument()
    expect(result).toBeVisible()

  });
  it('should have button to change image profile ', async () => {
    render(editProfile);

    const result = await screen.findByTestId('editImageButtonProfile')

    expect(result).toBeInTheDocument()
    expect(result).toBeVisible()

  });
  it('button to change image profile should have content change photo', async () => {
    render(editProfile);

    const result = await screen.findByTestId('editImageButtonProfile')
    expect(result).toHaveTextContent('Zmień zdjęcie')
  });
  it('should have edit profile formik component', async () => {
    render(editProfile);

    const result = await screen.findByTestId('editProfileFormikComponent')
    expect(result).toBeInTheDocument()
    expect(result).toBeValid()
  });
  it('should not have message component', async () => {
    render(editProfile);

    const result = await screen.queryByTestId('messageComponent')

    expect(result).toBeNull()

  });
})

describe('Edit profile component no user data id and uid ', () => {

  const userExample: Partial<IUser> = {
    email: `example@goo.com`,
    emailVerified: true,
    entityAccess: EntityAccess.USER,
    providerId: `google.com`,
    // id: '1234567890',
    // uid: `123456789qazwsx`,
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

  const mockFn1 = () => jest.fn()
  const mockFn2 = () => jest.fn()

  const reducerUser = combineReducers({ userAction: userReducer });

  const state = {
    userAction: initialUserExample
  }

  const store = createStore(reducerUser, state)

  const customHistory = createBrowserHistory();


  const editProfile = <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Router history={customHistory}>
        <EditProfile
          logoutAfterTime={mockFn1}
          logoutUserHandle={mockFn2}
        />
      </Router>
    </ThemeProvider>
  </Provider>



  it('should ', () => {
    expect(1).toBe(1)
    expect(1).not.toBe(2)
  });

  it('should have eidt profile container ', async () => {
    render(editProfile);

    const result = await screen.queryByTestId('editProfileUser')

    expect(result).toBeInTheDocument()
    expect(result).toBeVisible()

  });
  it('should have eidt profile image div ', async () => {
    render(editProfile);

    const result = await screen.queryByTestId('editImageProfile')

    expect(result).toBeInTheDocument()
    expect(result).toBeVisible()


  });
  it('should not have image profile visible ', async () => {
    render(editProfile);

    const result = await screen.queryByTestId('imageProfile')

    expect(result).toBeNull()

  });
  it('should not have button to change image profile ', async () => {
    render(editProfile);

    const result = await screen.queryByTestId('editImageButtonProfile')

    expect(result).toBeNull()


  });
  it('button to change image profile should not be visible', async () => {
    render(editProfile);

    const result = await screen.queryByTestId('editImageButtonProfile')

    expect(result).toBeNull()
  });
  it('should not have edit profile formik component', async () => {
    render(editProfile);

    const result = await screen.queryByTestId('editProfileFormikComponent')

    expect(result).toBeNull()

  });
  it('should have message component', async () => {
    render(editProfile);

    const result = await screen.queryByTestId('messageComponent')

    expect(result).toBeInTheDocument()
    expect(result).toBeVisible()

  });
})
