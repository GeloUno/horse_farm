import Footer from "./Footer";
import { render, screen } from '@testing-library/react';

describe('Footer logo', () => {
  it('logo should be visibilty', () => {
    render(<Footer />)
    const logoDev = screen.getByTestId('logo_developer')
    expect(logoDev).toBeInTheDocument()

  });
  it('logo should have text Hello Gello™', () => {
    const { getByTestId } = render(<Footer />)
    expect(getByTestId('logo_developer')).toHaveTextContent('HelloGello™')
  });
});
