import { render, screen } from '@testing-library/react';
import React from 'react';
import { PlanBookingHoursUsersList } from './PlanBookingHoursUsersList';
import { IDevBookingData } from '../../DevUtility/booking';
import faker from 'faker';

interface IConponentToTestProps {
  firstHouer: number,
  lastHouer: number,
  dataBooking: Array<IDevBookingData>
}

const ConponentToTest: React.FC<IConponentToTestProps> = ({
  firstHouer,
  lastHouer,
  dataBooking
}) => {
  return (
    <div>
      {PlanBookingHoursUsersList(firstHouer, lastHouer, dataBooking)}
    </div>
  )
}

describe('Plan booking hours list no filter only one day', () => {
  const dataTestBooking: Array<IDevBookingData> = [
    {
      id: faker.datatype.uuid(),
      name: faker.name.firstName(),
      hourBooking: new Date(2021, 6, 22, 9)
    },
    {
      id: faker.datatype.uuid(),
      name: faker.name.firstName(),
      hourBooking: new Date(2021, 6, 22, 11)
    },
    {
      id: faker.datatype.uuid(),
      name: faker.name.firstName(),
      hourBooking: new Date(2021, 6, 22, 13)
    },
    {
      id: faker.datatype.uuid(),
      name: faker.name.firstName(),
      hourBooking: new Date(2021, 6, 22, 13)
    },
    {
      id: faker.datatype.uuid(),
      name: faker.name.firstName(),
      hourBooking: new Date(2021, 6, 22, 17)
    },
  ]

  it('should have hours booking', async () => {
    render(<ConponentToTest
      firstHouer={8}
      lastHouer={21}
      dataBooking={dataTestBooking}
    />)
    // console.log(`object`, dataTestBooking)
    // debug()
    const result = await screen.findAllByTestId(/hourBooking/i);
    result.forEach((element) => {
      expect(element).toBeInTheDocument()
      expect(element).toBeVisible()
    })
  });
  it('hours booking should have length 13', async () => {
    render(<ConponentToTest
      firstHouer={8}
      lastHouer={21}
      dataBooking={dataTestBooking}
    />)
    const result = await screen.findAllByTestId(/hourBooking/i);
    expect(result.length).toBe(21 - 8)
  });

  it('hours booking should have length 7', async () => {
    render(<ConponentToTest
      firstHouer={10}
      lastHouer={17}
      dataBooking={dataTestBooking}
    />)
    const result = await screen.findAllByTestId(/hourBooking/i);
    expect(result.length).toBe(17 - 10)
  });
  it('hours booking should have hour 10:00', async () => {
    render(<ConponentToTest
      firstHouer={10}
      lastHouer={17}
      dataBooking={dataTestBooking}
    />)
    const result = await screen.queryByText('10:00');
    expect(result).toBeInTheDocument()
    expect(result).toBeVisible()
  })
  it('hours booking should have hour 11:00', async () => {
    render(<ConponentToTest
      firstHouer={10}
      lastHouer={17}
      dataBooking={dataTestBooking}
    />)
    const result = await screen.queryByText('11:00');
    expect(result).toBeInTheDocument()
    expect(result).toBeVisible()
  })
  it('hours booking should have hour 12:00', async () => {
    render(<ConponentToTest
      firstHouer={10}
      lastHouer={17}
      dataBooking={dataTestBooking}
    />)
    const result = await screen.queryByText('12:00');
    expect(result).toBeInTheDocument()
    expect(result).toBeVisible()
  })
  it('hours booking should have hour 13:00', async () => {
    render(<ConponentToTest
      firstHouer={10}
      lastHouer={17}
      dataBooking={dataTestBooking}
    />)
    const result = await screen.queryByText('13:00');
    expect(result).toBeInTheDocument()
    expect(result).toBeVisible()
  })
  it('hours booking should have hour 14:00', async () => {
    render(<ConponentToTest
      firstHouer={10}
      lastHouer={17}
      dataBooking={dataTestBooking}
    />)
    const result = await screen.queryByText('14:00');
    expect(result).toBeInTheDocument()
    expect(result).toBeVisible()
  })
  it('hours booking should have hour 15:00', async () => {
    render(<ConponentToTest
      firstHouer={10}
      lastHouer={17}
      dataBooking={dataTestBooking}
    />)
    const result = await screen.queryByText('15:00');
    expect(result).toBeInTheDocument()
    expect(result).toBeVisible()
  })
  it('hours booking should have hour 16:00', async () => {
    render(<ConponentToTest
      firstHouer={10}
      lastHouer={17}
      dataBooking={dataTestBooking}
    />)
    const result = await screen.queryByText('16:00');
    expect(result).toBeInTheDocument()
    expect(result).toBeVisible()
  })
  it('hours booking should not have hour 17:00', async () => {
    render(<ConponentToTest
      firstHouer={10}
      lastHouer={17}
      dataBooking={dataTestBooking}
    />)
    const result = await screen.queryByText('17:00');
    expect(result).not.toBeInTheDocument()
  })
  it('hours booking should not have hour 9:00', async () => {
    render(<ConponentToTest
      firstHouer={10}
      lastHouer={17}
      dataBooking={dataTestBooking}
    />)
    const result = await screen.queryByText('9:00');
    expect(result).not.toBeInTheDocument()
  })
  it('hours booking should not have hour 18:00', async () => {
    render(<ConponentToTest
      firstHouer={10}
      lastHouer={17}
      dataBooking={dataTestBooking}
    />)
    const result = await screen.queryByText('18:00');
    expect(result).not.toBeInTheDocument()
  })
  it('hours booking should content on 11:00', async () => {
    render(<ConponentToTest
      firstHouer={10}
      lastHouer={17}
      dataBooking={dataTestBooking}
    />)

    const result = await screen.findByTestId(/userBookingAt-11/i);
    expect(result).toHaveTextContent(`${dataTestBooking[1].name}`)
  })
  it('hours booking should content on 17:00', async () => {
    render(<ConponentToTest
      firstHouer={8}
      lastHouer={19}
      dataBooking={dataTestBooking}
    />)

    const result = await screen.findByTestId(/userBookingAt-17/i);
    expect(result).toHaveTextContent(`${dataTestBooking[4].name}`)
  })
  it('hours booking should content on 9:00', async () => {
    render(<ConponentToTest
      firstHouer={8}
      lastHouer={19}
      dataBooking={dataTestBooking}
    />)

    const result = await screen.findByTestId(/userBookingAt-9/i);
    expect(result).toHaveTextContent(`${dataTestBooking[0].name}`)
  })
});


