import { render, screen } from '@testing-library/react';
import React from 'react';
import { IDevBookingData } from '../../DevUtility/booking';
import faker from 'faker';
import PlanBookingHoures, { PlanBookingHouresProps } from './PlanBookingHours';



const ConponentToTest: React.FC<PlanBookingHouresProps> = ({
  BookingData,
  bookingDay
}) => {
  return (
    <PlanBookingHoures
      BookingData={BookingData}
      bookingDay={bookingDay}
      firstHourBooking={8}
      lastHourBooking={21}
    />
  )
}

describe('Plan booking hours with filter only day in month, month should be filter in server', () => {
  const dataTestBooking: Array<IDevBookingData> = [
    {
      id: faker.datatype.uuid(),
      name: 'Jhon',
      hourBooking: new Date(2021, 6, 22, 9)
    },
    {
      id: faker.datatype.uuid(),
      name: "Mark",
      hourBooking: new Date(2021, 11, 11, 11)
    },
    {
      id: faker.datatype.uuid(),
      name: "Lee",
      hourBooking: new Date(2021, 3, 13, 13)
    },
    {
      id: faker.datatype.uuid(),
      name: "Tom",
      hourBooking: new Date(2021, 6, 22, 13)
    },
    {
      id: faker.datatype.uuid(),
      name: 'Leon',
      hourBooking: new Date(2021, 6, 21, 17)
    },
    {
      id: faker.datatype.uuid(),
      name: 'Zizi',
      hourBooking: new Date(2021, 4, 22, 17)
    },
  ]

  it('should have hours booking content', async () => {
    const dayBooking = new Date(2021, 6, 22)
    render(<ConponentToTest
      BookingData={dataTestBooking}
      bookingDay={dayBooking}
    />)
    const result = await screen.findByTestId('hourBookingContent');
    expect(result).toBeInTheDocument()
    expect(result).toBeVisible()
  });
  it('in 2021 6 22 should not have data user name from dataTesting[0]', async () => {
    const dayBooking = new Date(2021, 6, 22)
    render(<ConponentToTest
      BookingData={dataTestBooking}
      bookingDay={dayBooking}
    />)
    const result = await screen.queryAllByText(/Jhon/i);
    expect(result.length).toBe(1)
  });

  it('in 2021 6 22 should not have data user name from dataTesting[1]', async () => {
    const dayBooking = new Date(2021, 6, 22)
    render(<ConponentToTest
      BookingData={dataTestBooking}
      bookingDay={dayBooking}
    />)
    const result = screen.queryAllByText(/Mark/i);
    expect(result.length).toBe(0)
  });

  it('in 2021 6 22 should not have data user name from dataTesting[2]', async () => {
    const dayBooking = new Date(2021, 6, 22)
    render(<ConponentToTest
      BookingData={dataTestBooking}
      bookingDay={dayBooking}
    />)
    const result = screen.queryAllByText(/Lee/i);
    expect(result.length).toBe(0)
  });
  it('in 2021 6 22 should have data user name from dataTesting[3]', async () => {
    const dayBooking = new Date(2021, 6, 22)
    render(<ConponentToTest
      BookingData={dataTestBooking}
      bookingDay={dayBooking}
    />)
    const result = screen.queryAllByText(/Tom/i);
    expect(result.length).toBe(1)
  });

  it('in 2021 6 22 should not have data user name from dataTesting[4]', async () => {
    const dayBooking = new Date(2021, 6, 22)
    render(<ConponentToTest
      BookingData={dataTestBooking}
      bookingDay={dayBooking}
    />)
    const result = screen.queryAllByText(/Leon/i);
    expect(result.length).toBe(0)
  });

  it('in 2021 6 22 should have data user name from dataTesting[5]', async () => {
    const dayBooking = new Date(2021, 6, 22)
    render(<ConponentToTest
      BookingData={dataTestBooking}
      bookingDay={dayBooking}
    />)
    const result = screen.queryAllByText(/Zizi/i);
    expect(result.length).toBe(1)
  });
  it('should have 3 object after filter only day', async () => {
    const dayBooking = new Date(2021, 6, 22)
    render(<ConponentToTest
      BookingData={dataTestBooking}
      bookingDay={dayBooking}
    />)
    const result = await screen.findAllByTestId(/userBookingListInHour/i);
    expect(result.length).toBe(3)
  });
});


