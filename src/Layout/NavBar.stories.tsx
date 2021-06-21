import { Story, Meta } from '@storybook/react';
import NavBar from './NavBar';
import { combineReducers, createStore } from 'redux';
import userReducer, { IUserInitialState } from '../redux/reducers/userReducer';
import { EntityAccess, IUser } from '../models/users';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/core';

import { Router } from 'react-router-dom';
import { theme } from '../utility/materialui';



const userExample: Partial<IUser> = {
  // email: `example@goo.com`,
  // entityAccess: EntityAccess.USER,
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


export default {
  title: 'Components/NavBar',
  component: NavBar,

} as Meta;

const Primary: Story = (args) => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Router history={customHistory}>
        <NavBar
          loginModalToggle={emptyVoid}
          setSectionPage={emptyVoid}
          sideBarToggle={emptyVoid}
        />
      </Router>
    </ThemeProvider>
  </Provider >
)
export const PrimaryExample = Primary.bind({})

PrimaryExample.storyName = 'NavBar NO USER';

PrimaryExample.args = {

}

const userExample2: Partial<IUser> = {
  email: `example@goo.com`,
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

const initialUserExample2: IUserInitialState = {
  user: userExample2,
  isLoading: false,
  isError: false,
  errorMessage: null,
  idToken: `null`
}

const reducerUser2 = combineReducers({ userAction: userReducer });

const state2 = {
  userAction: initialUserExample2
}

const store2 = createStore(reducerUser2, state2)


const Secondary: Story = (args) => (
  <Provider store={store2}>
    <ThemeProvider theme={theme}>
      <Router history={customHistory}>
        <NavBar
          loginModalToggle={emptyVoid}
          setSectionPage={emptyVoid}
          sideBarToggle={emptyVoid}
        />
      </Router>
    </ThemeProvider>
  </Provider >
)
export const SecondaryExample = Secondary.bind({})

SecondaryExample.storyName = 'NavBar USER';

SecondaryExample.args = {

}



const userExample3: Partial<IUser> = {
  email: `example@goo.com`,
  entityAccess: EntityAccess.OWNER,
  providerId: `google.com`,
  uid: `123456789qazwsx`,
  id: '1111111111111',
  firstName: `john`,
  lastName: `doe`,
  phone: `123123123`,
  nick: `jd`,
  photoId: `https://pbs.twimg.com/profile_images/1257280933557710850/95taFO3E_400x400.jpg`
}

const initialUserExample3: IUserInitialState = {
  user: userExample3,
  isLoading: false,
  isError: false,
  errorMessage: null,
  idToken: `null`
}

const reducerUser3 = combineReducers({ userAction: userReducer });

const state3 = {
  userAction: initialUserExample3
}

const store3 = createStore(reducerUser3, state3)


const Third: Story = (args) => (
  <Provider store={store3}>
    <ThemeProvider theme={theme}>
      <Router history={customHistory}>
        <NavBar
          loginModalToggle={emptyVoid}
          setSectionPage={emptyVoid}
          sideBarToggle={emptyVoid}
        />
      </Router>
    </ThemeProvider>
  </Provider >
)
export const ThirdExample = Third.bind({})

ThirdExample.storyName = 'NavBar OWNER';

ThirdExample.args = {

}


const userExample4: Partial<IUser> = {
  email: `example@goo.com`,
  entityAccess: EntityAccess.COACH,
  providerId: `google.com`,
  uid: `123456789qazwsx`,
  id: '1111111111111',
  firstName: `john`,
  lastName: `doe`,
  phone: `123123123`,
  nick: `jd`,
  photoId: `https://pbs.twimg.com/profile_images/1257280933557710850/95taFO3E_400x400.jpg`
}

const initialUserExample4: IUserInitialState = {
  user: userExample4,
  isLoading: false,
  isError: false,
  errorMessage: null,
  idToken: `null`
}

const reducerUser4 = combineReducers({ userAction: userReducer });

const state4 = {
  userAction: initialUserExample4
}

const store4 = createStore(reducerUser4, state4)


const Fourth: Story = (args) => (
  <Provider store={store4}>
    <ThemeProvider theme={theme}>
      <Router history={customHistory}>
        <NavBar
          loginModalToggle={emptyVoid}
          setSectionPage={emptyVoid}
          sideBarToggle={emptyVoid}
        />
      </Router>
    </ThemeProvider>
  </Provider >
)
export const FourthExample = Fourth.bind({})

FourthExample.storyName = 'NavBar COACH';

FourthExample.args = {

}


const userExample5: Partial<IUser> = {
  email: `example@goo.com`,
  entityAccess: EntityAccess.ADMIN,
  providerId: `google.com`,
  uid: `123456789qazwsx`,
  id: '1111111111111',
  firstName: `john`,
  lastName: `doe`,
  phone: `123123123`,
  nick: `jd`,
  photoId: `https://pbs.twimg.com/profile_images/1257280933557710850/95taFO3E_400x400.jpg`
}

const initialUserExample5: IUserInitialState = {
  user: userExample5,
  isLoading: false,
  isError: false,
  errorMessage: null,
  idToken: `null`
}

const reducerUser5 = combineReducers({ userAction: userReducer });

const state5 = {
  userAction: initialUserExample5
}

const store5 = createStore(reducerUser5, state5)


const Fiveth: Story = (args) => (
  <Provider store={store5}>
    <ThemeProvider theme={theme}>
      <Router history={customHistory}>
        <NavBar
          loginModalToggle={emptyVoid}
          setSectionPage={emptyVoid}
          sideBarToggle={emptyVoid}
        />
      </Router>
    </ThemeProvider>
  </Provider >
)
export const FivethExample = Fiveth.bind({})

FivethExample.storyName = 'NavBar ADMIN';

FivethExample.args = {

}

