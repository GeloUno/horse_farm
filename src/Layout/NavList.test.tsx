import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { NavList } from './NavList';
import configurationStore from 'redux-mock-store'
import thunk from 'redux-thunk';
import { IUserInitialState } from '../redux/reducers/userReducer';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { createBrowserHistory } from "history";
import { Link } from 'react-router-dom';
import { EntityAccess } from '../models/users';

const customHistory = createBrowserHistory();


const middlewares = [thunk]
const mockStore = configurationStore(middlewares)

Enzyme.configure({ adapter: new Adapter() });

describe('NavList no user login', () => {

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

  const setSection = jest.fn()
  const loginModalToggleMock = jest.fn();


  const navList =
    <Provider store={store}>
      <Router history={customHistory}>
        <NavList
          loginModalToggle={loginModalToggleMock}
          setSectionPage={setSection}
        />
      </Router>
    </Provider>


  const wrapper = mount(navList)

  test('should have one NavList ', () => {
    const result = wrapper.find('NavList')
    expect(result).toHaveLength(1)
  });

  test('should have 6 Link ', () => {
    const result = wrapper.find(Link)
    expect(result).toHaveLength(6)
  });

  test('should have 6 li', () => {
    const result = wrapper.find('li')
    expect(result).toHaveLength(6)
  });

  test('should have 6 a', () => {
    const result = wrapper.find('a')
    expect(result).toHaveLength(6)
  });

  test('should tag a have class name sm-hidden', () => {
    const result = wrapper.find('a')
    result.map(data => {
      const dataResult = data.hasClass('sm-hidden');
      expect(dataResult).toBe(true)
    })
    expect(result).toHaveLength(6)
  });

  test('should last tag a have access to open modal', () => {
    const result = wrapper.find('a').last().hasClass('accessToggleModalShow')
    expect(result).toBe(true)
  });

  test('should tag i have access to open modal', () => {
    const result = wrapper.find('i').last().hasClass('accessToggleModalShow')
    expect(result).toBe(true)
  });

  test('should have text Główna Atrakcje Opinia Kontakt Galeria Zaloguj', () => {
    const result = wrapper.find('Link').map((data) => data.text())
    expect(result).toEqual(['Główna', 'Atrakcje', 'Opinia', 'Kontakt', 'Galeria', 'Zaloguj'])
  })

  test('should every Links have class name sm-hidden', () => {
    const result = wrapper.find('Link').everyWhere((n) => n.hasClass('sm-hidden'))
    expect(result).toEqual(true)
  })

  test('should some Link have class name accessToggleModalShow', () => {
    const result = wrapper.find('Link').someWhere((n) => n.hasClass('accessToggleModalShow'))
    expect(result).toEqual(true)
  })

  test('should open modal on click to login', () => {
    const result = wrapper.find(Link).last()
    result.simulate('click')
    expect(loginModalToggleMock).toHaveBeenCalled()
  });

  test('should run method select section', () => {
    const result = wrapper.find(Link).at(1)
    result.simulate('click')
    expect(setSection).toHaveBeenCalled()
  });
  test('should run method select section', () => {
    const result = wrapper.find(Link).at(2)
    result.simulate('click')
    expect(setSection).toHaveBeenCalled()
  });
  test('should run method select section', () => {
    const result = wrapper.find(Link).at(3)
    result.simulate('click')
    expect(setSection).toHaveBeenCalled()
  });

  test('should have empty link', () => {
    const result = wrapper.find(Link).at(0).prop('to')
    expect(result).toEqual("/")
  });
  test('should have empty link', () => {
    const result = wrapper.find(Link).at(1).prop('to')
    expect(result).toEqual("/")
  });

  test('should have empty link', () => {
    const result = wrapper.find(Link).at(2).prop('to')
    expect(result).toEqual("/")
  });

  test('should have empty link', () => {
    const result = wrapper.find(Link).at(3).prop('to')
    expect(result).toEqual("/")
  });

  test('should have link to /galeria', () => {
    const result = wrapper.find(Link).at(4).prop('to')
    expect(result).toEqual('/galeria')
  });
});



describe('NavList with user login', () => {

  const initialState: IUserInitialState = {
    user: {
      email: 'johndoe@google.com',
      providerId: 'gooogle.com',
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

  const setSection = jest.fn()
  const loginModalToggleMock = jest.fn();


  const navList =
    <Provider store={store}>
      <Router history={customHistory}>

        <NavList
          loginModalToggle={loginModalToggleMock}
          setSectionPage={setSection}
        />
      </Router>
    </Provider>


  const wrapper = mount(navList)

  test('should have one NavList ', () => {
    const result = wrapper.find('NavList')
    expect(result).toHaveLength(1)
  });

  test('should have 6 Link ', () => {
    const result = wrapper.find(Link)
    expect(result).toHaveLength(6)
  });

  test('should have 6 li', () => {
    const result = wrapper.find('li')
    expect(result).toHaveLength(6)
  });

  test('should have 6 a', () => {
    const result = wrapper.find('a')
    expect(result).toHaveLength(6)
  });

  test('should tag a have class name sm-hidden', () => {
    const result = wrapper.find('a')
    result.map(data => {
      const dataResult = data.hasClass('sm-hidden');
      expect(dataResult).toBe(true)
    })
    expect(result).toHaveLength(6)
  });

  test('should last tag a not have access to open modal', () => {
    const result = wrapper.find('a').last().hasClass('accessToggleModalShow')
    expect(result).toBe(false)
  });

  test('should tag i not have access to open modal', () => {
    const result = wrapper.find('i').last().hasClass('accessToggleModalShow')
    expect(result).toBe(false)
  });

  test('should have text Główna Profil Planer Rezerwacja Galeria Wyloguj', () => {
    const result = wrapper.find('Link').map((data) => data.text())
    expect(result).toEqual(['Główna', 'Profil', 'Planer', 'Rezerwacja', 'Galeria', 'Wyloguj'])
  })

  test('should every Links have class name sm-hidden', () => {
    const result = wrapper.find('Link').everyWhere((n) => n.hasClass('sm-hidden'))
    expect(result).toEqual(true)
  })



  test('should have empty link', () => {
    const result = wrapper.find(Link).at(0).prop('to')
    expect(result).toEqual("/")
  });
  test('should have empty link', () => {
    const result = wrapper.find(Link).at(1).prop('to')
    expect(result).toEqual("/profil")
  });

  test('should have empty link', () => {
    const result = wrapper.find(Link).at(2).prop('to')
    expect(result).toEqual("/planer")
  });

  test('should have empty link', () => {
    const result = wrapper.find(Link).at(3).prop('to')
    expect(result).toEqual("/rezerwacja")
  });

  test('should have link to /galeria', () => {
    const result = wrapper.find(Link).at(4).prop('to')
    expect(result).toEqual('/galeria')
  });
});

describe('NavList with user coach', () => {

  const initialState: IUserInitialState = {
    user: {
      email: 'johndoe@google.com',
      providerId: 'gooogle.com',
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

  const setSection = jest.fn()
  const loginModalToggleMock = jest.fn();


  const navList =
    <Provider store={store}>
      <Router history={customHistory}>

        <NavList
          loginModalToggle={loginModalToggleMock}
          setSectionPage={setSection}
        />
      </Router>
    </Provider>


  const wrapper = mount(navList)

  test('should have one NavList ', () => {
    const result = wrapper.find('NavList')
    expect(result).toHaveLength(1)
  });

  test('should have 6 Link ', () => {
    const result = wrapper.find(Link)
    expect(result).toHaveLength(6)
  });

  test('should have 6 li', () => {
    const result = wrapper.find('li')
    expect(result).toHaveLength(6)
  });

  test('should have 6 a', () => {
    const result = wrapper.find('a')
    expect(result).toHaveLength(6)
  });

  test('should tag a have class name sm-hidden', () => {
    const result = wrapper.find('a')
    result.map(data => {
      const dataResult = data.hasClass('sm-hidden');
      expect(dataResult).toBe(true)
    })
    expect(result).toHaveLength(6)
  });

  test('should last tag a not have access to open modal', () => {
    const result = wrapper.find('a').last().hasClass('accessToggleModalShow')
    expect(result).toBe(false)
  });

  test('should tag i not have access to open modal', () => {
    const result = wrapper.find('i').last().hasClass('accessToggleModalShow')
    expect(result).toBe(false)
  });

  test('should have text Główna Profil Planer Rezerwacja Galeria Wyloguj', () => {
    const result = wrapper.find('Link').map((data) => data.text())
    expect(result).toEqual(['Główna', 'Profil', 'Planer', 'Rezerwacja', 'Terener', 'Wyloguj'])
  })

  test('should every Links have class name sm-hidden', () => {
    const result = wrapper.find('Link').everyWhere((n) => n.hasClass('sm-hidden'))
    expect(result).toEqual(true)
  })



  test('should have empty link', () => {
    const result = wrapper.find(Link).at(0).prop('to')
    expect(result).toEqual("/")
  });
  test('should have empty link', () => {
    const result = wrapper.find(Link).at(1).prop('to')
    expect(result).toEqual("/profil")
  });

  test('should have empty link', () => {
    const result = wrapper.find(Link).at(2).prop('to')
    expect(result).toEqual("/planer")
  });

  test('should have empty link', () => {
    const result = wrapper.find(Link).at(3).prop('to')
    expect(result).toEqual("/rezerwacja")
  });

  test('should have link to /galeria', () => {
    const result = wrapper.find(Link).at(4).prop('to')
    expect(result).toEqual('/galeria')
  });
});



describe('NavList with user owner', () => {

  const initialState: IUserInitialState = {
    user: {
      email: 'johndoe@google.com',
      providerId: 'gooogle.com',
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

  const setSection = jest.fn()
  const loginModalToggleMock = jest.fn();


  const navList =
    <Provider store={store}>
      <Router history={customHistory}>

        <NavList
          loginModalToggle={loginModalToggleMock}
          setSectionPage={setSection}
        />
      </Router>
    </Provider>


  const wrapper = mount(navList)

  test('should have one NavList ', () => {
    const result = wrapper.find('NavList')
    expect(result).toHaveLength(1)
  });

  test('should have 6 Link ', () => {
    const result = wrapper.find(Link)
    expect(result).toHaveLength(6)
  });

  test('should have 6 li', () => {
    const result = wrapper.find('li')
    expect(result).toHaveLength(6)
  });

  test('should have 6 a', () => {
    const result = wrapper.find('a')
    expect(result).toHaveLength(6)
  });

  test('should tag a have class name sm-hidden', () => {
    const result = wrapper.find('a')
    result.map(data => {
      const dataResult = data.hasClass('sm-hidden');
      expect(dataResult).toBe(true)
    })
    expect(result).toHaveLength(6)
  });

  test('should last tag a not have access to open modal', () => {
    const result = wrapper.find('a').last().hasClass('accessToggleModalShow')
    expect(result).toBe(false)
  });

  test('should tag i not have access to open modal', () => {
    const result = wrapper.find('i').last().hasClass('accessToggleModalShow')
    expect(result).toBe(false)
  });

  test('should have text Główna Profil Planer Rezerwacja Galeria Wyloguj', () => {
    const result = wrapper.find('Link').map((data) => data.text())
    expect(result).toEqual(['Główna', 'Profil', 'Planer', 'Rezerwacja', 'Właściciel', 'Wyloguj'])
  })

  test('should every Links have class name sm-hidden', () => {
    const result = wrapper.find('Link').everyWhere((n) => n.hasClass('sm-hidden'))
    expect(result).toEqual(true)
  })


  test('should have empty link', () => {
    const result = wrapper.find(Link).at(0).prop('to')
    expect(result).toEqual("/")
  });
  test('should have empty link', () => {
    const result = wrapper.find(Link).at(1).prop('to')
    expect(result).toEqual("/profil")
  });

  test('should have empty link', () => {
    const result = wrapper.find(Link).at(2).prop('to')
    expect(result).toEqual("/planer")
  });

  test('should have empty link', () => {
    const result = wrapper.find(Link).at(3).prop('to')
    expect(result).toEqual("/rezerwacja")
  });

  test('should have link to /galeria', () => {
    const result = wrapper.find(Link).at(4).prop('to')
    expect(result).toEqual('/galeria')
  });
});

describe('NavList with user admin', () => {

  const initialState: IUserInitialState = {
    user: {
      email: 'johndoe@google.com',
      providerId: 'gooogle.com',
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

  const setSection = jest.fn()
  const loginModalToggleMock = jest.fn();


  const navList =
    <Provider store={store}>
      <Router history={customHistory}>

        <NavList
          loginModalToggle={loginModalToggleMock}
          setSectionPage={setSection}
        />
      </Router>
    </Provider>


  const wrapper = mount(navList)

  test('should have one NavList ', () => {
    const result = wrapper.find('NavList')
    expect(result).toHaveLength(1)
  });

  test('should have 6 Link ', () => {
    const result = wrapper.find(Link)
    expect(result).toHaveLength(6)
  });

  test('should have 6 li', () => {
    const result = wrapper.find('li')
    expect(result).toHaveLength(6)
  });

  test('should have 6 a', () => {
    const result = wrapper.find('a')
    expect(result).toHaveLength(6)
  });

  test('should tag a have class name sm-hidden', () => {
    const result = wrapper.find('a')
    result.map(data => {
      const dataResult = data.hasClass('sm-hidden');
      expect(dataResult).toBe(true)
    })
    expect(result).toHaveLength(6)
  });

  test('should last tag a not have access to open modal', () => {
    const result = wrapper.find('a').last().hasClass('accessToggleModalShow')
    expect(result).toBe(false)
  });

  test('should tag i not have access to open modal', () => {
    const result = wrapper.find('i').last().hasClass('accessToggleModalShow')
    expect(result).toBe(false)
  });

  test('should have text Główna Profil Planer Rezerwacja Galeria Wyloguj', () => {
    const result = wrapper.find('Link').map((data) => data.text())
    expect(result).toEqual(['Główna', 'Profil', 'Planer', 'Użytkownicy', 'Administrator', 'Wyloguj'])
  })

  test('should every Links have class name sm-hidden', () => {
    const result = wrapper.find('Link').everyWhere((n) => n.hasClass('sm-hidden'))
    expect(result).toEqual(true)
  })



  test('should have empty link', () => {
    const result = wrapper.find(Link).at(0).prop('to')
    expect(result).toEqual("/")
  });
  test('should have empty link', () => {
    const result = wrapper.find(Link).at(1).prop('to')
    expect(result).toEqual("/profil")
  });

  test('should have empty link', () => {
    const result = wrapper.find(Link).at(2).prop('to')
    expect(result).toEqual("/planer")
  });

  test('should have empty link', () => {
    const result = wrapper.find(Link).at(3).prop('to')
    expect(result).toEqual("/rezerwacja")
  });

  test('should have link to /galeria', () => {
    const result = wrapper.find(Link).at(4).prop('to')
    expect(result).toEqual('/galeria')
  });
});


