import { render, screen } from '@testing-library/react';
import React from 'react';
import PlanBookings from './PlanBookings';



const ConponentToTest: React.FC = () => {
  return (
    <PlanBookings />
  )
}

describe('Plan booking component', () => {
  it('should have container', async () => {
    render(<ConponentToTest />)

    const result = await screen.findByTestId('containerPlanBooking')
    expect(result).toBeInTheDocument()
    expect(result).toBeVisible()
  });
  it('should have data header', async () => {
    render(<ConponentToTest />)

    const result = await screen.findByTestId('dateHeader')
    expect(result).toBeInTheDocument()
    expect(result).toBeVisible()
  });
  it('should have date header', async () => {
    render(<ConponentToTest />)

    const result = await screen.findByTestId('dateHeader')
    expect(result).toBeInTheDocument()
    expect(result).toBeVisible()
  });
  it('should have date month', async () => {
    render(<ConponentToTest />)

    const result = await screen.findByTestId('monthContent')
    expect(result).toBeInTheDocument()
    expect(result).toBeVisible()
  });
  it('should have date month', async () => {
    render(<ConponentToTest />)

    const result = await screen.findByTestId('monthContent')
    expect(result).toBeInTheDocument()
    expect(result).toBeVisible()
  });
  it('should have date year', async () => {
    render(<ConponentToTest />)

    const result = await screen.findByTestId('yearContent')
    expect(result).toBeInTheDocument()
    expect(result).toBeVisible()
  });
  it('should have body of change month', async () => {
    render(<ConponentToTest />)

    const result = await screen.findByTestId('changeMonth')
    expect(result).toBeInTheDocument()
    expect(result).toBeVisible()
  });
  it('should have body of prev month', async () => {
    render(<ConponentToTest />)

    const result = await screen.findByTestId('prevMonth')
    expect(result).toBeInTheDocument()
    expect(result).toBeVisible()
  });
  it('should have body of next month', async () => {
    render(<ConponentToTest />)

    const result = await screen.findByTestId('nextMonth')
    expect(result).toBeInTheDocument()
    expect(result).toBeVisible()
  });
  it('should have day header', async () => {
    render(<ConponentToTest />)

    const result = await screen.findByTestId('dayHeader')
    expect(result).toBeInTheDocument()
    expect(result).toBeVisible()
  });
  it('should have day by number', async () => {
    render(<ConponentToTest />)

    const result = await screen.findByTestId('dayNumber')
    expect(result).toBeInTheDocument()
    expect(result).toBeVisible()
  });
  it('should have day by string', async () => {
    render(<ConponentToTest />)

    const result = await screen.findByTestId('daysOfWeek')
    expect(result).toBeInTheDocument()
    expect(result).toBeVisible()
  });
  it('should have body to change day', async () => {
    render(<ConponentToTest />)

    const result = await screen.findByTestId('changeDay')
    expect(result).toBeInTheDocument()
    expect(result).toBeVisible()
  });
  it('should have button to chenge on prev day', async () => {
    render(<ConponentToTest />)

    const result = await screen.findByTestId('prevDay')
    expect(result).toBeInTheDocument()
    expect(result).toBeVisible()
  });
  it('should have button to chenge on  nextday', async () => {
    render(<ConponentToTest />)

    const result = await screen.findByTestId('nextDay')
    expect(result).toBeInTheDocument()
    expect(result).toBeVisible()
  });
});


