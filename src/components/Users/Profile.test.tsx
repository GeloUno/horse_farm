import { render, getByTestId, screen } from '@testing-library/react';
import Profile from './Profile'
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { IUserInitialState } from '../../redux/reducers/userReducer';
import { createStore, combineReducers } from 'redux';
import userReducer from '../../redux/reducers/userReducer';
import { IUser, EntityAccess } from '../../models/users';

describe('Profile component Full user data', () => {

  const userExample: IUser = {
    email: `example@goo.com`,
    emailVerified: true,
    entityAccess: EntityAccess.USER,
    providerId: `google.com`,
    uid: `123456789qazwsx`,
    firstName: `john`,
    lastName: `doe`,
    phone: `123123123`,
    nick: `jd`,
    photoId: `https://lh3.googleusercontent.com/a/AATXAJwCoWk-pzX--yABB2CJ6V2K0WcTRYN0SMjKfM3i=s96-c`
  };

  const initialUserExample: IUserInitialState = {
    user: userExample,
    isLoading: false,
    isError: false,
    errorMessage: null,
    idToken: `null`
  };

  const reducerUserExample = combineReducers({ userAction: userReducer });

  const state = {
    userAction: initialUserExample
  };
  const store = createStore(reducerUserExample, state);

  const customHistory = createBrowserHistory();

  const profileComponentTestingFullUserData = <Provider store={store}>
    <Router history={customHistory}>
      <Profile />
    </Router>
  </Provider>
  it('should ', () => {
    expect(1).toBe(1)
  });
  it('should render profile component ', () => {
    const { getByTestId } = render(profileComponentTestingFullUserData)
    expect(getByTestId(`profileContainer`)).toBeInTheDocument()

  });
  it('should profile component be visible ', () => {
    const { getByTestId } = render(profileComponentTestingFullUserData)
    expect(getByTestId(`profileContainer`)).toBeVisible()
  });
  it('should have image if user have photoId ', () => {
    const { getByTestId } = render(profileComponentTestingFullUserData)
    expect(getByTestId(`imageProfile`)).toBeInTheDocument()
    expect(getByTestId(`imageProfile`)).toBeVisible()
  });
  it('should image src be equals to exapme user testing ', () => {
    const { getByTestId } = render(profileComponentTestingFullUserData)
    expect(getByTestId(`imageProfileSrc`)).toHaveAttribute('src', 'https://lh3.googleusercontent.com/a/AATXAJwCoWk-pzX--yABB2CJ6V2K0WcTRYN0SMjKfM3i=s96-c')
  });

  it('should have nick in document nad be visible', () => {
    const { getByTestId } = render(profileComponentTestingFullUserData)
    expect(getByTestId(`nickProfile`)).toBeInTheDocument()
    expect(getByTestId(`nickProfile`)).toBeVisible()
  });
  it('should have nick content', () => {
    const { getByTestId } = render(profileComponentTestingFullUserData)
    expect(getByTestId(`nickProfile`)).toHaveTextContent('jd')
  });

  it('should have firstName in document nad be visible', () => {
    const { getByTestId } = render(profileComponentTestingFullUserData)
    expect(getByTestId(`firstNameProfile`)).toBeInTheDocument()
    expect(getByTestId(`firstNameProfile`)).toBeVisible()
  });
  it('should have firstName content', () => {
    const { getByTestId } = render(profileComponentTestingFullUserData)
    expect(getByTestId(`firstNameProfile`)).toHaveTextContent('john')
  });

  it('should have last Name in document nad be visible', () => {
    const { getByTestId } = render(profileComponentTestingFullUserData)
    expect(getByTestId(`firstNameProfile`)).toBeInTheDocument()
    expect(getByTestId(`firstNameProfile`)).toBeVisible()
  });
  it('should have last Name content', () => {
    const { getByTestId } = render(profileComponentTestingFullUserData)
    expect(getByTestId(`lastNameProfile`)).toHaveTextContent('doe')
  });
  it('should have email in document nad be visible', () => {
    const { getByTestId } = render(profileComponentTestingFullUserData)
    expect(getByTestId(`emailProfile`)).toBeInTheDocument()
    expect(getByTestId(`emailProfile`)).toBeVisible()
  });
  it('should have email content', () => {
    const { getByTestId } = render(profileComponentTestingFullUserData)
    expect(getByTestId(`emailProfile`)).toHaveTextContent('example@goo.com')
  });
  it('should have phone in document nad be visible', () => {
    const { getByTestId } = render(profileComponentTestingFullUserData)
    expect(getByTestId(`phoneProfile`)).toBeInTheDocument()
    expect(getByTestId(`phoneProfile`)).toBeVisible()
  });
  it('should have phone content', () => {
    const { getByTestId } = render(profileComponentTestingFullUserData)
    expect(getByTestId(`phoneProfile`)).toHaveTextContent('123123123')
  });
  it('should have button link edit profile in document and be visible', () => {
    const { getByTestId } = render(profileComponentTestingFullUserData)
    expect(getByTestId(`editionProfileLink`)).toBeInTheDocument()
    expect(getByTestId(`editionProfileLink`)).toBeVisible()
  });
  it('should button edit profile link to edit profile router', () => {
    const { getByTestId } = render(profileComponentTestingFullUserData)
    expect(getByTestId(`editionProfileLink`)).toHaveAttribute('href', '/edycjaprofilu')
  });
  it('should button edit profile have content', () => {
    const { getByTestId } = render(profileComponentTestingFullUserData)
    expect(getByTestId(`editionProfileLink`)).toHaveTextContent('edycja')
  });

  it('should have button link schema booking in document and be visible', () => {
    const { getByTestId } = render(profileComponentTestingFullUserData)
    expect(getByTestId(`schemaBookingProfileLink`)).toBeInTheDocument()
    expect(getByTestId(`schemaBookingProfileLink`)).toBeVisible()
  });
  it('should button schema booking link to schema booking', () => {
    const { getByTestId } = render(profileComponentTestingFullUserData)
    expect(getByTestId(`schemaBookingProfileLink`)).toHaveAttribute('href', '/planer')
  });
  it('should button schema booking have content', () => {
    const { getByTestId } = render(profileComponentTestingFullUserData)
    expect(getByTestId(`schemaBookingProfileLink`)).toHaveTextContent('planer')
  });

  it('should have button booking booking in document and be visible', () => {
    const { getByTestId } = render(profileComponentTestingFullUserData)
    expect(getByTestId(`bookingProfileLink`)).toBeInTheDocument()
    expect(getByTestId(`bookingProfileLink`)).toBeVisible()
  });
  it('should button booking link to booking', () => {
    const { getByTestId } = render(profileComponentTestingFullUserData)
    expect(getByTestId(`bookingProfileLink`)).toHaveAttribute('href', '/rezerwacja')
  });
  it('should button booking have content', () => {
    const { getByTestId } = render(profileComponentTestingFullUserData)
    expect(getByTestId(`bookingProfileLink`)).toHaveTextContent('rezerwacja')
  });

  it('should have button remove user profile in document and be visible', () => {
    const { getByTestId } = render(profileComponentTestingFullUserData)
    expect(getByTestId(`removeProfileLink`)).toBeInTheDocument()
    expect(getByTestId(`removeProfileLink`)).toBeVisible()
  });
  it('should button booking have content', () => {
    const { getByTestId } = render(profileComponentTestingFullUserData)
    expect(getByTestId(`removeProfileLink`)).toHaveTextContent('Usuń profil')
  });
});

describe('Profile component user no phone and photoId', () => {

  const userExample: IUser = {
    email: `example@goo.com`,
    emailVerified: true,
    entityAccess: EntityAccess.USER,
    providerId: `google.com`,
    uid: `123456789qazwsx`,
    firstName: `john`,
    lastName: `doe`,
    // phone: `123123123`,
    nick: `jd`,
    // photoId: `https://lh3.googleusercontent.com/a/AATXAJwCoWk-pzX--yABB2CJ6V2K0WcTRYN0SMjKfM3i=s96-c`
  };

  const initialUserExample: IUserInitialState = {
    user: userExample,
    isLoading: false,
    isError: false,
    errorMessage: null,
    idToken: `null`
  };

  const reducerUserExample = combineReducers({ userAction: userReducer });

  const state = {
    userAction: initialUserExample
  };
  const store = createStore(reducerUserExample, state);

  const customHistory = createBrowserHistory();

  const profileComponentTestingFullUserData = <Provider store={store}>
    <Router history={customHistory}>
      <Profile />
    </Router>
  </Provider>
  it('should ', () => {
    expect(1).toBe(1)
  });
  it('should render profile component ', () => {
    const { getByTestId } = render(profileComponentTestingFullUserData)
    expect(getByTestId(`profileContainer`)).toBeInTheDocument()

  });
  it('should profile component be visible ', () => {
    const { getByTestId } = render(profileComponentTestingFullUserData)
    expect(getByTestId(`profileContainer`)).toBeVisible()
  });
  it('should have image if user have photoId ', () => {
    const { getByTestId } = render(profileComponentTestingFullUserData)
    expect(getByTestId(`imageProfile`)).toBeInTheDocument()
    expect(getByTestId(`imageProfile`)).toBeVisible()
  });
  it('should image profile not be in document', () => {
    const { getByTestId } = render(profileComponentTestingFullUserData)
    const result = screen.queryByTestId(`imageProfileSrc`)
    expect(result).toBeNull()
  });

  it('should have nick in document nad be visible', () => {
    const { getByTestId } = render(profileComponentTestingFullUserData)
    expect(getByTestId(`nickProfile`)).toBeInTheDocument()
    expect(getByTestId(`nickProfile`)).toBeVisible()
  });
  it('should have nick content', () => {
    const { getByTestId } = render(profileComponentTestingFullUserData)
    expect(getByTestId(`nickProfile`)).toHaveTextContent('jd')
  });

  it('should have firstName in document nad be visible', () => {
    const { getByTestId } = render(profileComponentTestingFullUserData)
    expect(getByTestId(`firstNameProfile`)).toBeInTheDocument()
    expect(getByTestId(`firstNameProfile`)).toBeVisible()
  });
  it('should have firstName content', () => {
    const { getByTestId } = render(profileComponentTestingFullUserData)
    expect(getByTestId(`firstNameProfile`)).toHaveTextContent('john')
  });

  it('should have last Name in document nad be visible', () => {
    const { getByTestId } = render(profileComponentTestingFullUserData)
    expect(getByTestId(`firstNameProfile`)).toBeInTheDocument()
    expect(getByTestId(`firstNameProfile`)).toBeVisible()
  });
  it('should have last Name content', () => {
    const { getByTestId } = render(profileComponentTestingFullUserData)
    expect(getByTestId(`lastNameProfile`)).toHaveTextContent('doe')
  });
  it('should have email in document nad be visible', () => {
    const { getByTestId } = render(profileComponentTestingFullUserData)
    expect(getByTestId(`emailProfile`)).toBeInTheDocument()
    expect(getByTestId(`emailProfile`)).toBeVisible()
  });
  it('should have email content', () => {
    const { getByTestId } = render(profileComponentTestingFullUserData)
    expect(getByTestId(`emailProfile`)).toHaveTextContent('example@goo.com')
  });
  it('should have phone in document nad be visible', () => {
    const { getByTestId } = render(profileComponentTestingFullUserData)
    expect(getByTestId(`phoneProfile`)).toBeInTheDocument()
    expect(getByTestId(`phoneProfile`)).toBeVisible()
  });
  it('should have empty phone content', () => {
    const { getByTestId } = render(profileComponentTestingFullUserData)
    expect(getByTestId(`phoneProfile`)).toHaveTextContent('')
  });
  it('should have button link edit profile in document and be visible', () => {
    const { getByTestId } = render(profileComponentTestingFullUserData)
    expect(getByTestId(`editionProfileLink`)).toBeInTheDocument()
    expect(getByTestId(`editionProfileLink`)).toBeVisible()
  });
  it('should button edit profile link to edit profile router', () => {
    const { getByTestId } = render(profileComponentTestingFullUserData)
    expect(getByTestId(`editionProfileLink`)).toHaveAttribute('href', '/edycjaprofilu')
  });
  it('should button edit profile have content', () => {
    const { getByTestId } = render(profileComponentTestingFullUserData)
    expect(getByTestId(`editionProfileLink`)).toHaveTextContent('edycja')
  });

  it('should have button link schema booking in document and be visible', () => {
    const { getByTestId } = render(profileComponentTestingFullUserData)
    expect(getByTestId(`schemaBookingProfileLink`)).toBeInTheDocument()
    expect(getByTestId(`schemaBookingProfileLink`)).toBeVisible()
  });
  it('should button schema booking link to schema booking', () => {
    const { getByTestId } = render(profileComponentTestingFullUserData)
    expect(getByTestId(`schemaBookingProfileLink`)).toHaveAttribute('href', '/planer')
  });
  it('should button schema booking have content', () => {
    const { getByTestId } = render(profileComponentTestingFullUserData)
    expect(getByTestId(`schemaBookingProfileLink`)).toHaveTextContent('planer')
  });

  it('should have button booking booking in document and be visible', () => {
    const { getByTestId } = render(profileComponentTestingFullUserData)
    expect(getByTestId(`bookingProfileLink`)).toBeInTheDocument()
    expect(getByTestId(`bookingProfileLink`)).toBeVisible()
  });
  it('should button booking link to booking', () => {
    const { getByTestId } = render(profileComponentTestingFullUserData)
    expect(getByTestId(`bookingProfileLink`)).toHaveAttribute('href', '/rezerwacja')
  });
  it('should button booking have content', () => {
    const { getByTestId } = render(profileComponentTestingFullUserData)
    expect(getByTestId(`bookingProfileLink`)).toHaveTextContent('rezerwacja')
  });

  it('should have button remove user profile in document and be visible', () => {
    const { getByTestId } = render(profileComponentTestingFullUserData)
    expect(getByTestId(`removeProfileLink`)).toBeInTheDocument()
    expect(getByTestId(`removeProfileLink`)).toBeVisible()
  });
  it('should button booking have content', () => {
    const { getByTestId } = render(profileComponentTestingFullUserData)
    expect(getByTestId(`removeProfileLink`)).toHaveTextContent('Usuń profil')
  });
});