import React, { cloneElement } from 'react'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import Header from './Header';
import { MemoryRouter, Router, useHistory } from 'react-router-dom';
import { createBrowserHistory } from 'history';


const customHistory = createBrowserHistory();
describe('Header component render', () => {

  test('should text header be Nauka jazdy konnej ', () => {
    const { getByText } = render(<Header />)
    expect(getByText('Nauka jazdy konnej')).toBeInTheDocument()
  });

  test('should have one button with text', () => {
    const { getByText } = render(<Header />)
    expect(getByText('Rezerwacja')).toBeInTheDocument()
  });
  test('should on button click push router history', async () => {

    const { getByText, getByRole, debug } = render(
      <Router history={customHistory}>
        <Header />
      </Router>
    )

    const spy = jest.spyOn(customHistory, `push`);

    fireEvent.click(getByRole('button'))
    expect(spy).toHaveBeenCalledTimes(1)
  });

})
