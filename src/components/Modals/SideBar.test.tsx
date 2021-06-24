import { IUserInitialState } from '../../redux/reducers/userReducer';
import { IUser, EntityAccess } from '../../models/users';
import { combineReducers, createStore } from 'redux';
import { createBrowserHistory } from 'history';
import userReducer from '../../redux/reducers/userReducer';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/core';
import { theme } from '../../utility/materialui';

import { render, screen } from '@testing-library/react';

import SideBar from './SideBar';


describe('SidBar modal no user', () => {
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
          <SideBar
            sideBarToggle={emptyVoid}
            loginModalToggle={emptyVoid}
            setSectionPage={emptyVoid}
          />
        </Router>
      </ThemeProvider>
    </Provider>
  )
  it('should ', () => {
    expect(1).not.toBe(2)
    expect(1).toBe(1)
  });
  it('should have screen', () => {
    render(componentToTest)
    const result = screen.getByTestId('sidebarBackground')
    expect(result).toBeInTheDocument()
    expect(result).toBeVisible()

  });
  it('should have modal', () => {
    render(componentToTest)
    const result = screen.getByTestId('sideBarBody')
    expect(result).toBeInTheDocument()
    expect(result).toBeVisible()
  });

  it('should have close modal icon', () => {
    render(componentToTest)
    const result = screen.getByTestId('closeSidBarModal')
    expect(result).toBeInTheDocument()
    expect(result).toBeVisible()
  });

  it('should have component guest NavList', () => {
    render(componentToTest)
    const result = screen.getByTestId('linkHomePage')
    expect(result).toBeInTheDocument()
    expect(result).toBeVisible()
  });
  it('should have content Login ', () => {
    render(componentToTest)
    const result = screen.getByTestId('linkToLogin')
    expect(result).toBeInTheDocument()
    expect(result).toBeVisible()
    expect(result).toHaveTextContent('Zaloguj')
  });
});

describe('SidBar modal with user', () => {
  const userExample: Partial<IUser> = {
    email: `example@goo.com`,
    emailVerified: true,
    entityAccess: EntityAccess.USER,
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

  const componentToTest = (
    <Provider store={store} >
      <ThemeProvider theme={theme}>
        <Router history={customHistory}>
          <SideBar
            sideBarToggle={emptyVoid}
            loginModalToggle={emptyVoid}
            setSectionPage={emptyVoid}
          />
        </Router>
      </ThemeProvider>
    </Provider>
  )
  it('should ', () => {
    expect(1).not.toBe(2)
    expect(1).toBe(1)
  });
  it('should have screen', () => {
    render(componentToTest)
    const result = screen.getByTestId('sidebarBackground')
    expect(result).toBeInTheDocument()
    expect(result).toBeVisible()
  });
  it('should have modal', () => {
    render(componentToTest)
    const result = screen.getByTestId('sideBarBody')
    expect(result).toBeInTheDocument()
    expect(result).toBeVisible()
  });
  it('should have close modal icon', () => {
    render(componentToTest)
    const result = screen.getByTestId('closeSidBarModal')
    expect(result).toBeInTheDocument()
    expect(result).toBeVisible()
  });
  it('should have user name', () => {
    render(componentToTest)
    const result = screen.getByTestId('sidBarUserName')
    expect(result).toBeInTheDocument()
    expect(result).toBeVisible()
    expect(result).toHaveTextContent(`${userExample.nick}`)
  });
  it('should have image user', () => {
    render(componentToTest)
    const result = screen.getByTestId('imageUser')
    expect(result).toBeInTheDocument()
    expect(result).toBeVisible()
  });
  it(' image user should have src', () => {
    render(componentToTest)
    const result = screen.getByTestId('imageUserSrc')
    expect(result).toBeInTheDocument()
    expect(result).toHaveAttribute('src', 'https://pbs.twimg.com/profile_images/1257280933557710850/95taFO3E_400x400.jpg')
  });
  it('should have content Logout ', () => {
    render(componentToTest)
    const result = screen.getByTestId('linkToLogout')
    expect(result).toBeInTheDocument()
    expect(result).toBeVisible()
    expect(result).toHaveTextContent('Wyloguj')
  });
});

