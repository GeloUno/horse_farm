
import { Story, Meta } from '@storybook/react';
import ConfirmBooking from './ConfirmBooking';
import { IUser } from '../../models/users';
import userReducer from '../../redux/reducers/userReducer';
import { combineReducers, createStore } from 'redux';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/core';
import { theme } from '../../utility/materialui';
import { Router } from 'react-router-dom';
import { IUserInitialState } from '../../redux/reducers/userReducer';

export default {
  title: 'Booking/ConfirmBooking',
  component: ConfirmBooking
} as Meta;


const PrimaryProfile: Story = (args, parameters) => {

  let dateStart: Date = new Date()
  dateStart.setHours(args.firstHourBooking)
  dateStart.setMinutes(0)
  let dateEnd: Date = new Date()
  dateEnd.setHours(args.lastHourBooking)
  dateEnd.setMinutes(0)

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
          <ConfirmBooking
            startDateAndTimeBooking={dateStart}
            endDateAndTimeBooking={dateEnd}
          />
        </Router>
      </ThemeProvider>
    </Provider>
  )
}
export const Primary = PrimaryProfile.bind({})
Primary.args = {
  firstHourBooking: 8,
  lastHourBooking: 9,
  firstName: 'John',
  lastName: ' Doe',
}
Primary.parameters = {
}

Primary.storyName = 'Confirm Booking';
