import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import MakeBooking from './MakeBooking';
import { IMakeBookingProps } from './MakeBooking';
import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { IUser } from '../../models/users';
import { combineReducers, createStore } from 'redux';
import userReducer, { IUserInitialState } from '../../redux/reducers/userReducer';
import userEvent from '@testing-library/user-event';

interface IMakeBookingTestProps extends Omit<IMakeBookingProps, 'setStartDateAndTimeBooking' |
  "setEndDateAndTimeBooking"> { }

interface IMakeBookingTestProps {
  user: Partial<IUser>
}
const userExample: Partial<IUser> = {
  email: `example@goo.com`,
  emailVerified: false,
  providerId: `google.com`,
  uid: `123456789qazwsx`,
  id: '1111111111111',
  firstName: 'John',
  lastName: 'Doe',
  // phone: `123123123`,
  nick: `jd`,
  photoId: `https://pbs.twimg.com/profile_images/1257280933557710850/95taFO3E_400x400.jpg`
}

const customHistory = createBrowserHistory();

const MockMakeBooking: React.FC<IMakeBookingTestProps> = ({
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

  const [StartDateAndTimeBooking, setStartDateAndTimeBooking] = useState(new Date)
  const [EndDateAndTimeBooking, setEndDateAndTimeBooking] = useState(new Date)

  return (
    <Provider store={store} >
      <Router history={customHistory}>
        <MakeBooking
          setStartDateAndTimeBooking={setStartDateAndTimeBooking}
          setEndDateAndTimeBooking={setEndDateAndTimeBooking}
          firstHourBooking={firstHourBooking}
          lastHourBooking={lastHourBooking}
        />
      </Router>
    </Provider  >

  )
}


describe('Make Booking', () => {

  describe(' - visible elements', () => {

    it('should have body', async () => {
      render(<MockMakeBooking
        firstHourBooking={8}
        lastHourBooking={21}
        user={userExample}
      />)
      const result = screen.getByTestId('makeBookingBody')
      expect(result).toBeInTheDocument()
      expect(result).toBeVisible()
    });

    it('should have user image body', async () => {
      render(<MockMakeBooking
        firstHourBooking={8}
        lastHourBooking={21}
        user={userExample}
      />)
      const result = screen.getByTestId('userMakeBookingImage')
      expect(result).toBeInTheDocument()
      expect(result).toBeVisible()
    });
    it('user image should have src if user add that data', async () => {
      render(<MockMakeBooking
        firstHourBooking={8}
        lastHourBooking={21}
        user={userExample}
      />)
      const result = screen.getByTestId('userMakeBookingImageSrc')
      expect(result).toBeInTheDocument()
      expect(result).toBeVisible()
      expect(result).toHaveAttribute('src', `${userExample.photoId}`)

    });
    it('should have user name body', async () => {
      render(<MockMakeBooking
        firstHourBooking={8}
        lastHourBooking={21}
        user={userExample}
      />)
      const result = screen.getByTestId('makeBookingUserName')
      expect(result).toBeInTheDocument()
      expect(result).toBeVisible()
      expect(result).toHaveTextContent(`${userExample.firstName} ${userExample.lastName}`)

    });
    // it('should have date picker component', async () => {
    //   render(<MockMakeBooking
    //     firstHourBooking={8}
    //     lastHourBooking={21}
    //     user={userExample}
    //   />)
    //   const result = await screen.findByTestId('dataPicker')
    //   expect(result).toBeInTheDocument()
    //   expect(result).toBeVisible()
    // })
    it('should have desciption booking', async () => {
      render(<MockMakeBooking
        firstHourBooking={8}
        lastHourBooking={21}
        user={userExample}
      />)
      const result = screen.getByTestId('descriptionMakeBooking')
      expect(result).toBeInTheDocument()
      expect(result).toBeVisible()
    });
    it('should have desciption booking', async () => {
      render(<MockMakeBooking
        firstHourBooking={8}
        lastHourBooking={21}
        user={userExample}
      />)
      const result = screen.getByTestId('descriptionMakeBooking')
      expect(result).toBeInTheDocument()
      expect(result).toBeVisible()
    });
    it('should have body to select start hour booking', async () => {
      render(<MockMakeBooking
        firstHourBooking={8}
        lastHourBooking={21}
        user={userExample}
      />)
      const result = screen.getByTestId('makeBookingHourStart')
      expect(result).toBeInTheDocument()
      expect(result).toBeVisible()
    });
    it('should have body to select end hour booking', async () => {
      render(<MockMakeBooking
        firstHourBooking={8}
        lastHourBooking={21}
        user={userExample}
      />)
      const result = screen.getByTestId('makeBookingHourEnd')

      expect(result).toBeInTheDocument()
      expect(result).toBeVisible()
    });
    it('should have button to send booking', async () => {
      render(<MockMakeBooking
        firstHourBooking={8}
        lastHourBooking={21}
        user={userExample}
      />)
      const result = screen.getByTestId('makeBookingHourButtonSubmit')
      expect(result).toBeInTheDocument()
      expect(result).toBeVisible()
    });
  });

  describe(' - select hour booking', () => {
    it('should have all hours optionanl from 8 to 21', async () => {
      render(<MockMakeBooking
        firstHourBooking={8}
        lastHourBooking={21}
        user={userExample}
      />)
      const result = await screen.findAllByTestId(/selectHour/i)

      expect(result.length).toBe((21 - 8) * 2)
    });
    it('should have one hour 8', async () => {
      render(<MockMakeBooking
        firstHourBooking={8}
        lastHourBooking={21}
        user={userExample}
      />)
      const result = await screen.findAllByTestId(/selectHour-8/i)

      expect(result.length).toBe(1)
    });
    it('should have one hour 21', async () => {
      render(<MockMakeBooking
        firstHourBooking={8}
        lastHourBooking={21}
        user={userExample}
      />)
      const result = await screen.findAllByTestId(/selectHour-21/i)

      expect(result.length).toBe(1)
    });
    it('should have two hour 12', async () => {
      render(<MockMakeBooking
        firstHourBooking={8}
        lastHourBooking={21}
        user={userExample}
      />)
      const result = await screen.findAllByTestId(/selectHour-12/i)

      expect(result.length).toBe(2)
    });
    it('on start page should start hour be selected to 8', async () => {
      render(<MockMakeBooking
        firstHourBooking={8}
        lastHourBooking={21}
        user={userExample}
      />)

      const result = screen.getByTestId('StartSelectHour-8') as HTMLOptionElement

      expect(result.selected).toBe(true)
    });
    it('on start page should end hour be selected to 9', async () => {
      render(<MockMakeBooking
        firstHourBooking={8}
        lastHourBooking={21}
        user={userExample}
      />)

      const result = screen.getByTestId('EndSelectHour-9') as HTMLOptionElement

      expect(result.selected).toBe(true)
    });
  })

  describe(' - events', () => {
    it('should change start hour booking', async () => {
      render(<MockMakeBooking
        firstHourBooking={8}
        lastHourBooking={21}
        user={userExample}
      />)
      const select = screen.getByTestId('makeBookingHourSelectStart') as HTMLSelectElement;
      const result = await screen.findByTestId('StartSelectHour-12') as HTMLOptionElement

      userEvent.selectOptions(select, result)

      expect(result.selected).toBe(true)
      expect(select.value).toBe('12')

    });
    it('should change end hour booking', async () => {
      render(<MockMakeBooking
        firstHourBooking={8}
        lastHourBooking={21}
        user={userExample}
      />)
      const select = screen.getByTestId('makeBookingHourSelectEnd') as HTMLSelectElement;
      const result = screen.getByTestId('EndSelectHour-16') as HTMLOptionElement

      userEvent.selectOptions(select, result)

      expect(result.selected).toBe(true)
      expect(select.value).toBe('16')
    })
    it('press submit should change path to confirm booking', async () => {
      render(<MockMakeBooking
        firstHourBooking={8}
        lastHourBooking={21}
        user={userExample}
      />)
      const result = screen.getByTestId('makeBookingHourButtonSubmit')
      userEvent.click(result)

      expect(customHistory.location.pathname).toBe('/potwierdzenie_rezerwacji')

    })
  });
})

