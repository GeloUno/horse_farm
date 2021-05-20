import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import configurationStore from 'redux-mock-store'
import thunk from 'redux-thunk';
import { Router } from 'react-router';
import { createBrowserHistory } from "history";
import NavBar from './NavBar';
import { Provider } from 'react-redux';
import { IUserInitialState } from '../redux/reducers/userReducer';
import { EntityAccess } from '../models/users';

const customHistory = createBrowserHistory();


const middlewares = [thunk]
const mockStore = configurationStore(middlewares)

Enzyme.configure({ adapter: new Adapter() });

const loginModalToggleMock = jest.fn()
const sideBarToggleMock = jest.fn()
const setSectionPageMock = jest.fn()


describe('NavBar component no user', () => {

  const initialState: IUserInitialState = {
    user: {
      // email: undefined,
      // providerId: undefined,
      // emailVerified: undefined,
      // isNewUser: undefined,
      // entityAccess: undefined
    },
    isLoading: false,
    isError: false,
    errorMessage: null,
    idToken: null
  };

  const store = mockStore({ userAction: initialState })

  const navBar =
    <Provider store={store}>
      <Router history={customHistory}>
        <NavBar
          loginModalToggle={loginModalToggleMock}
          sideBarToggle={sideBarToggleMock}
          setSectionPage={setSectionPageMock}
        />
      </Router>
    </Provider>

  const wrapper = mount(navBar)

  test('should have one nav tag', () => {
    const result = wrapper.find('nav')
    expect(result).toHaveLength(1)
  });

  test('should have two ul tag', () => {
    const result = wrapper.find('ul')
    expect(result).toHaveLength(2)
  });

  test('should have seven li tag', () => {
    const result = wrapper.find('li')
    expect(result).toHaveLength(7)
  });

  test('should have seven h2 tag', () => {
    const result = wrapper.find('h2')
    expect(result).toHaveLength(7)
  });

  test('should have two i tag', () => {
    const result = wrapper.find('i')
    expect(result).toHaveLength(2)
  });
  test('should have one NavList ', () => {
    const result = wrapper.find('NavList')
    expect(result).toHaveLength(1)
  });

})

describe('NavBar component with user', () => {

  const initialState: IUserInitialState = {
    user: {
      email: 'johndoe@goo.uk',
      providerId: 'google.com',
      emailVerified: true,
      isNewUser: false,
      entityAccess: EntityAccess.USER
    },
    isLoading: false,
    isError: false,
    errorMessage: null,
    idToken: null
  };

  const store = mockStore({ userAction: initialState })

  const navBar =
    <Provider store={store}>
      <Router history={customHistory}>
        <NavBar
          loginModalToggle={loginModalToggleMock}
          sideBarToggle={sideBarToggleMock}
          setSectionPage={setSectionPageMock}
        />
      </Router>
    </Provider>

  const wrapper = mount(navBar)

  test('should have one nav tag', () => {
    const result = wrapper.find('nav')
    expect(result).toHaveLength(1)
  });

  test('should have two ul tag', () => {
    const result = wrapper.find('ul')
    expect(result).toHaveLength(2)
  });

  test('should have seven li tag', () => {
    const result = wrapper.find('li')
    expect(result).toHaveLength(7)
  });

  test('should have seven h2 tag', () => {
    const result = wrapper.find('h2')
    expect(result).toHaveLength(7)
  });

  test('should have two i tag', () => {
    const result = wrapper.find('i')
    expect(result).toHaveLength(2)
  });
  test('should have one NavList ', () => {
    const result = wrapper.find('NavList')
    expect(result).toHaveLength(1)
  });

})

describe('NavBar component with owner', () => {

  const initialState: IUserInitialState = {
    user: {
      email: 'johndoe@goo.uk',
      providerId: 'google.com',
      emailVerified: true,
      isNewUser: false,
      entityAccess: EntityAccess.OWNER
    },
    isLoading: false,
    isError: false,
    errorMessage: null,
    idToken: null
  };

  const store = mockStore({ userAction: initialState })

  const navBar =
    <Provider store={store}>
      <Router history={customHistory}>
        <NavBar
          loginModalToggle={loginModalToggleMock}
          sideBarToggle={sideBarToggleMock}
          setSectionPage={setSectionPageMock}
        />
      </Router>
    </Provider>

  const wrapper = mount(navBar)

  test('should have one nav tag', () => {
    const result = wrapper.find('nav')
    expect(result).toHaveLength(1)
  });

  test('should have two ul tag', () => {
    const result = wrapper.find('ul')
    expect(result).toHaveLength(2)
  });

  test('should have seven li tag', () => {
    const result = wrapper.find('li')
    expect(result).toHaveLength(7)
  });

  test('should have seven h2 tag', () => {
    const result = wrapper.find('h2')
    expect(result).toHaveLength(7)
  });

  test('should have two i tag', () => {
    const result = wrapper.find('i')
    expect(result).toHaveLength(2)
  });
  test('should have one NavList ', () => {
    const result = wrapper.find('NavList')
    expect(result).toHaveLength(1)
  });

})

describe('NavBar component with coach', () => {

  const initialState: IUserInitialState = {
    user: {
      email: 'johndoe@goo.uk',
      providerId: 'google.com',
      emailVerified: true,
      isNewUser: false,
      entityAccess: EntityAccess.COACH
    },
    isLoading: false,
    isError: false,
    errorMessage: null,
    idToken: null
  };

  const store = mockStore({ userAction: initialState })

  const navBar =
    <Provider store={store}>
      <Router history={customHistory}>
        <NavBar
          loginModalToggle={loginModalToggleMock}
          sideBarToggle={sideBarToggleMock}
          setSectionPage={setSectionPageMock}
        />
      </Router>
    </Provider>

  const wrapper = mount(navBar)

  test('should have one nav tag', () => {
    const result = wrapper.find('nav')
    expect(result).toHaveLength(1)
  });

  test('should have two ul tag', () => {
    const result = wrapper.find('ul')
    expect(result).toHaveLength(2)
  });

  test('should have seven li tag', () => {
    const result = wrapper.find('li')
    expect(result).toHaveLength(7)
  });

  test('should have seven h2 tag', () => {
    const result = wrapper.find('h2')
    expect(result).toHaveLength(7)
  });

  test('should have two i tag', () => {
    const result = wrapper.find('i')
    expect(result).toHaveLength(2)
  });
  test('should have one NavList ', () => {
    const result = wrapper.find('NavList')
    expect(result).toHaveLength(1)
  });

})
describe('NavBar component with admin', () => {

  const initialState: IUserInitialState = {
    user: {
      email: 'johndoe@goo.uk',
      providerId: 'google.com',
      emailVerified: true,
      isNewUser: false,
      entityAccess: EntityAccess.ADMIN
    },
    isLoading: false,
    isError: false,
    errorMessage: null,
    idToken: null
  };

  const store = mockStore({ userAction: initialState })

  const navBar =
    <Provider store={store}>
      <Router history={customHistory}>
        <NavBar
          loginModalToggle={loginModalToggleMock}
          sideBarToggle={sideBarToggleMock}
          setSectionPage={setSectionPageMock}
        />
      </Router>
    </Provider>

  const wrapper = mount(navBar)

  test('should have one nav tag', () => {
    const result = wrapper.find('nav')
    expect(result).toHaveLength(1)
  });

  test('should have two ul tag', () => {
    const result = wrapper.find('ul')
    expect(result).toHaveLength(2)
  });

  test('should have seven li tag', () => {
    const result = wrapper.find('li')
    expect(result).toHaveLength(7)
  });

  test('should have seven h2 tag', () => {
    const result = wrapper.find('h2')
    expect(result).toHaveLength(7)
  });

  test('should have two i tag', () => {
    const result = wrapper.find('i')
    expect(result).toHaveLength(2)
  });
  test('should have one NavList ', () => {
    const result = wrapper.find('NavList')
    expect(result).toHaveLength(1)
  });

})