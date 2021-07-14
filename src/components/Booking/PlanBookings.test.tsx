import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import PlanBookings from './PlanBookings';
import userEvent from '@testing-library/user-event';
import { date } from 'yup/lib/locale';



const ConponentToTest: React.FC = () => {
  return (
    <PlanBookings />
  )
}

describe('Plan booking component', () => {
  describe('- visible elelments:', () => {

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

  describe('- date elelments:', () => {
    const date = new Date()

    it('should have date year now', async () => {
      render(<ConponentToTest />)
      const elementDate = date.toLocaleString('pl-PL', {
        year: "numeric",
      })
      const result = await screen.findByTestId('yearContent')
      expect(result).toBeInTheDocument()
      expect(result).toBeVisible()
      expect(result).toHaveTextContent(elementDate)
    });
    it('should have date month now', async () => {
      render(<ConponentToTest />)
      const elementDate = date.toLocaleString('pl-PL', {
        month: "long",
      })
      const result = await screen.findByTestId('monthContent')
      expect(result).toBeInTheDocument()
      expect(result).toBeVisible()
      expect(result).toHaveTextContent(elementDate)
    });
    it('should have date day number now', async () => {
      render(<ConponentToTest />)
      const elementDate = date.toLocaleString('pl-PL', {
        day: "numeric",
      })
      const result = await screen.findByTestId('dayNumber')
      expect(result).toBeInTheDocument()
      expect(result).toBeVisible()
      expect(result).toHaveTextContent(elementDate)
    });
    it('should have date day string now', async () => {
      render(<ConponentToTest />)
      const elementDate = date.toLocaleString('pl-PL', {
        weekday: 'long'
      })
      const result = await screen.findByTestId('daysOfWeek')
      expect(result).toBeInTheDocument()
      expect(result).toBeVisible()
      expect(result).toHaveTextContent(elementDate)
    });
  });

  describe('- event elelments:', () => {
    const date = new Date()
    it('should change month to prev month after click prev month button', async () => {
      render(<ConponentToTest />)
      const elementDate = new Date(date.getFullYear(), date.getMonth() - 1, date.getDay())

      const element = await screen.findByTestId('prevMonth')
      userEvent.click(element);

      const result = await screen.findByTestId('monthContent')
      waitFor(() => {
        expect(result).toBeInTheDocument()
        expect(result).toBeVisible()
        expect(result).toHaveTextContent(elementDate.toString())
      })
    });
    it('should change month to next month after click next month button', async () => {
      render(<ConponentToTest />)
      const elementDate = new Date(date.getFullYear(), date.getMonth() + 1, date.getDay())

      const element = await screen.findByTestId('nextMonth')
      userEvent.click(element);

      const result = await screen.findByTestId('monthContent')
      waitFor(() => {
        expect(result).toBeInTheDocument()
        expect(result).toBeVisible()
        expect(result).toHaveTextContent(elementDate.toString())
      })
    });
    it('should change day numeric to prev day after click prev day button', async () => {
      render(<ConponentToTest />)
      const elementDate = new Date(date.getFullYear(), date.getMonth(), date.getDay() - 1)

      const element = await screen.findByTestId('prevDay')
      userEvent.click(element);

      const result = await screen.findByTestId('dayNumber')
      waitFor(() => {
        expect(result).toBeInTheDocument()
        expect(result).toBeVisible()
        expect(result).toHaveTextContent(elementDate.toString())
      })
    });
    it('should change day numeric to next day after click day month button', async () => {
      render(<ConponentToTest />)
      const elementDate = new Date(date.getFullYear(), date.getMonth(), date.getDay() + 1)

      const element = await screen.findByTestId('nextDay')
      userEvent.click(element);

      const result = await screen.findByTestId('dayNumber')
      waitFor(() => {
        expect(result).toBeInTheDocument()
        expect(result).toBeVisible()
        expect(result).toHaveTextContent(elementDate.toString())
      })
    });
    it('should change day string(day of week) to prev day after click prev day button', async () => {
      render(<ConponentToTest />)
      const elementDate = new Date(date.getFullYear(), date.getMonth(), date.getDay() - 1)

      const element = await screen.findByTestId('prevDay')
      userEvent.click(element);

      const result = await screen.findByTestId('daysOfWeek')
      waitFor(() => {
        expect(result).toBeInTheDocument()
        expect(result).toBeVisible()
        expect(result).toHaveTextContent(elementDate.toString())
      })
    });
    it('should change day string(day of week) to next day after click day month button', async () => {
      render(<ConponentToTest />)
      const elementDate = new Date(date.getFullYear(), date.getMonth(), date.getDay() + 1)

      const element = await screen.findByTestId('nextDay')
      userEvent.click(element);

      const result = await screen.findByTestId('daysOfWeek')
      waitFor(() => {
        expect(result).toBeInTheDocument()
        expect(result).toBeVisible()
        expect(result).toHaveTextContent(elementDate.toString())
      })
    });
  });
})


