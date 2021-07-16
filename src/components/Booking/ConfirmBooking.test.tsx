import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import MakeBooking from './MakeBooking';
import { IMakeBookingProps } from './MakeBooking';
import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { IUser, EntityAccess } from '../../models/users';
import { combineReducers, createStore } from 'redux';
import userReducer, { IUserInitialState } from '../../redux/reducers/userReducer';
import userEvent from '@testing-library/user-event';
import ConfirmBooking from './ConfirmBooking';



interface IConfirmBookingTestProps extends Required<Omit<IMakeBookingProps, 'setStartDateAndTimeBooking' |
  "setEndDateAndTimeBooking">> { }

interface IConfirmBookingTestProps {
  user: Partial<IUser>
}
const userExample: IUser = {
  email: `example@goo.com`,
  emailVerified: false,
  entityAccess: EntityAccess.USER,
  providerId: `google.com`,
  uid: `123456789qazwsx`,
  id: '1111111111111',
  firstName: 'John',
  lastName: 'Doe',
  // phone: `123123123`,
  nick: `jd`,
  photoId: `https://pbs.twimg.com/profile_images/1257280933557710850/95taFO3E_400x400.jpg`
}
const emptyUserExample: Partial<IUser> = {
}

const customHistory = createBrowserHistory();

const MockConfirmBooking: React.FC<IConfirmBookingTestProps> = ({
  firstHourBooking,
  lastHourBooking,
  user
}) => {

  const initialUserExample: IUserInitialState = {
    user,
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

  const [StartDateAndTimeBooking, setStartDateAndTimeBooking] = useState<Date>(new Date(new Date().setHours(firstHourBooking)))

  const [EndDateAndTimeBooking, setEndDateAndTimeBooking] = useState(new Date(new Date().setHours(lastHourBooking)))

  return (
    <Provider store={store} >
      <Router history={customHistory}>
        <ConfirmBooking
          startDateAndTimeBooking={StartDateAndTimeBooking}
          endDateAndTimeBooking={EndDateAndTimeBooking}
        />
      </Router>
    </Provider  >

  )
}


describe('Make Booking', () => {

  describe(' - visible elements', () => {
    it('should have container', async () => {
      render(<MockConfirmBooking
        firstHourBooking={8}
        lastHourBooking={17}
        user={userExample}
      />)
      const result = screen.getByTestId('confrimBookingContainer')
      expect(result).toBeInTheDocument()
      expect(result).toBeVisible()
    });

    it('should have confirm body', async () => {
      render(<MockConfirmBooking
        firstHourBooking={8}
        lastHourBooking={21}
        user={userExample}
      />)
      const result = screen.getByTestId('confrimBookingBody')
      expect(result).toBeInTheDocument()
      expect(result).toBeVisible()
    });
    it('should have first description', async () => {
      render(<MockConfirmBooking
        firstHourBooking={8}
        lastHourBooking={21}
        user={userExample}
      />)
      const result = screen.getByTestId('confirmBookingDescriptionFirst')
      expect(result).toBeInTheDocument()
      expect(result).toBeVisible()

    });
    it('should have start hour booking', async () => {
      render(<MockConfirmBooking
        firstHourBooking={8}
        lastHourBooking={21}
        user={userExample}
      />)
      const result = screen.getByTestId('confrimBookingStartHour')
      expect(result).toBeInTheDocument()
      expect(result).toBeVisible()

    });
    it('should have confirm description start hour', async () => {
      render(<MockConfirmBooking
        firstHourBooking={8}
        lastHourBooking={21}
        user={userExample}
      />)
      const result = screen.getByTestId('confrimBookingStarDescription')
      expect(result).toBeInTheDocument()
      expect(result).toBeVisible()
    });
    it('should have desciption end of hour booking', async () => {
      render(<MockConfirmBooking
        firstHourBooking={8}
        lastHourBooking={21}
        user={userExample}
      />)
      const result = screen.getByTestId('confrimBookingEndDescription')
      expect(result).toBeInTheDocument()
      expect(result).toBeVisible()
    });
    it('should have button to cancel', async () => {
      render(<MockConfirmBooking
        firstHourBooking={8}
        lastHourBooking={21}
        user={userExample}
      />)
      const result = screen.getByTestId('confrimBookingButtonCancel')
      expect(result).toBeInTheDocument()
      expect(result).toBeVisible()
    });
    it('should have button to confirm booking', async () => {
      render(<MockConfirmBooking
        firstHourBooking={8}
        lastHourBooking={21}
        user={userExample}
      />)
      const result = screen.getByTestId('confirmBookingButtonConfirm')

      expect(result).toBeInTheDocument()
      expect(result).toBeVisible()
    });
  });

  describe(' - no user', () => {

    it('should have container', () => {
      render(<MockConfirmBooking
        firstHourBooking={8}
        lastHourBooking={21}
        user={emptyUserExample}
      />)
      const result = screen.getByTestId('confrimBookingContainer')
      screen.debug()
      expect(result).toBeInTheDocument()
      expect(result).toBeVisible()
    });
    it('should have error message title', () => {
      render(<MockConfirmBooking
        firstHourBooking={8}
        lastHourBooking={21}
        user={emptyUserExample}
      />)
      const result = screen.getByText(/Brak danych użytkownika/i)

      expect(result).toBeInTheDocument()
      expect(result).toBeVisible()
    });

    it('should have error message body', () => {
      render(<MockConfirmBooking
        firstHourBooking={8}
        lastHourBooking={21}
        user={emptyUserExample}
      />)
      const result = screen.getByText(/Ups coś poszło nie tak zapraszamy później.../i)

      expect(result).toBeInTheDocument()
      expect(result).toBeVisible()
    });

    describe(' - events', () => {

      it('when press cancel button should back to home page ', async () => {
        render(<MockConfirmBooking
          firstHourBooking={8}
          lastHourBooking={21}
          user={userExample}
        />)

        const buttonCancel = await screen.findByTestId('confrimBookingButtonCancel') as HTMLButtonElement
        userEvent.click(buttonCancel)

        expect(customHistory.location.pathname).toEqual('/')
      });
      it('when press confirm button should render message success with body ', async () => {
        render(<MockConfirmBooking
          firstHourBooking={8}
          lastHourBooking={21}
          user={userExample}
        />)

        const buttonCancel = await screen.findByTestId('confirmBookingButtonConfirm') as HTMLButtonElement
        userEvent.click(buttonCancel)
        const result = screen.getByText(/Termin rezerwacji został wysłany/i)

        expect(result).toBeInTheDocument()
        expect(result).toBeVisible()

      });
      it('when press confirm button should render message success with title ', async () => {
        render(<MockConfirmBooking
          firstHourBooking={8}
          lastHourBooking={21}
          user={userExample}
        />)

        const buttonCancel = await screen.findByTestId('confirmBookingButtonConfirm') as HTMLButtonElement
        userEvent.click(buttonCancel)
        const result = screen.getByText(/Rezerwacja dla:/i)

        expect(result).toBeInTheDocument()
        expect(result).toBeVisible()

      });
    })
  })
})

