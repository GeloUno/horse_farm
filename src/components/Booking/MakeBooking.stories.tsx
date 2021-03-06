
import { Story, Meta } from '@storybook/react';
import MakeBooking from './MakeBooking';
import { combineReducers, createStore } from 'redux';
import userReducer, { IUserInitialState } from '../../redux/reducers/userReducer';
import { createBrowserHistory } from 'history';
import { IUser } from '../../models/users';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/core';
import { theme } from '../../utility/materialui';
import { Router } from 'react-router-dom';

export default {
  title: 'Booking/MakeBooking',
  component: MakeBooking
} as Meta;





const emptyVoid = () => { }

const PrimaryProfile: Story = (args) => {
  const userExample: Partial<IUser> = {
    email: `example@goo.com`,
    // emailVerified: true,
    // providerId: `google.com`,
    // uid: `123456789qazwsx`,
    // id: '1111111111111',   
    firstName: args.firstName,
    lastName: args.lastName,
    // phone: `123123123`,
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
  return (
    <Provider store={store} >
      <ThemeProvider theme={theme}>
        <Router history={customHistory}>
          <MakeBooking
            setEndDateAndTimeBooking={emptyVoid}
            setStartDateAndTimeBooking={emptyVoid}
            firstHourBooking={args.firstHourBooking}
            lastHourBooking={args.lastHourBooking}
          />
        </Router>
      </ThemeProvider>
    </Provider>
  )
}
export const Primary = PrimaryProfile.bind({})
Primary.args = {
  firstHourBooking: 8,
  lastHourBooking: 21,
  firstName: 'John',
  lastName: 'Doe'
}
Primary.parameters = {
}

Primary.storyName = 'Make Booking';
