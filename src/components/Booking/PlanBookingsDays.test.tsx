import { render, screen } from '@testing-library/react';
import PlanBookingsDays from './PlanBookingsDays';

import React, { useState } from 'react';
import { IPlanBookingsDaysProps } from './PlanBookingsDays';


interface IPlanBookingsDaysTestProps extends Omit<IPlanBookingsDaysProps, 'bookingDay' | 'setBookingDay' | 'daysInMonth'> {
  yearBooking: number,
  monthBooking: number,
  dayBooking: number
}

const ConponentToTest: React.FC<IPlanBookingsDaysTestProps> = ({
  yearBooking,
  monthBooking,
  dayBooking,
  horizontalAmimationValueDays
}) => {
  const date = new Date(yearBooking, monthBooking - 1, dayBooking);
  const daysInMonth = new Date(yearBooking, monthBooking, 0).getDate()

  const [BookingDay, setBookingDay] = useState(date);

  return (
    <PlanBookingsDays
      bookingDay={BookingDay}
      daysInMonth={daysInMonth}
      horizontalAmimationValueDays={horizontalAmimationValueDays}
      setBookingDay={setBookingDay}
    />
  )
}

describe('Planing booking Day', () => {
  it('should have body', async () => {
    render(<ConponentToTest
      yearBooking={2021}
      monthBooking={7}
      dayBooking={30}
      horizontalAmimationValueDays={1}
    />)
    const result = await screen.findByTestId('planBookingDaysBody')
    expect(result).toBeInTheDocument()
    expect(result).toBeVisible()
  });

  it('should have 30 days for date 2021 June ', async () => {
    render(<ConponentToTest
      yearBooking={2021}
      monthBooking={6}
      dayBooking={12}
      horizontalAmimationValueDays={1}
    />)
    const result = await screen.findAllByTestId(/dayInMonthBody/i)
    expect(result.length).toBe(30)
  });

  it('should have 28 days for date 2021 February ', async () => {
    render(<ConponentToTest
      yearBooking={2021}
      monthBooking={2}
      dayBooking={12}
      horizontalAmimationValueDays={1}
    />)
    const result = await screen.findAllByTestId(/dayInMonthBody/i)
    expect(result.length).toBe(28)
  });
  it('should have 29 days for date 2020 February (leap year) ', async () => {
    render(<ConponentToTest
      yearBooking={2020}
      monthBooking={2}
      dayBooking={12}
      horizontalAmimationValueDays={1}
    />)
    const result = await screen.findAllByTestId(/dayInMonthBody/i)
    expect(result.length).toBe(29)
  });

  it('should have 31 days for date 2021 July ', async () => {
    render(<ConponentToTest
      yearBooking={2021}
      monthBooking={7}
      dayBooking={12}
      horizontalAmimationValueDays={1}
    />)
    const result = await screen.findAllByTestId(/dayInMonthBody/i)
    expect(result.length).toBe(31)
  });
  it('every days should be visibled ', async () => {
    render(<ConponentToTest
      yearBooking={2021}
      monthBooking={7}
      dayBooking={12}
      horizontalAmimationValueDays={1}
    />)
    const result = await screen.findAllByTestId(/dayInMonthBody/i)
    result.forEach((element) => {
      expect(element).toBeInTheDocument()
      expect(element).toBeVisible()
    })
  });

})
