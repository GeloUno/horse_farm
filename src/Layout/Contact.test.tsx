import { render } from '@testing-library/react';
import Contact from './Contact';


describe('contact component', () => {
  it('should have full name contact instructor', () => {
    const { getByTestId } = render(<Contact />)
    expect(getByTestId('contactFullName')).toBeInTheDocument()
    expect(getByTestId('contactFullName')).toBeVisible()
    expect(getByTestId('contactFullName')).toHaveTextContent('Aleksandra Rosińska')
  });
  it('should have contact phone', () => {
    const { getByTestId } = render(<Contact />)
    expect(getByTestId('contactPhone')).toBeInTheDocument()
    expect(getByTestId('contactPhone')).toBeVisible()
    expect(getByTestId('contactPhone')).toHaveTextContent('507 171 027')
    expect(getByTestId('contactPhone')).toHaveAttribute('href', 'tel:507171027')
  })
  it('should have adress', () => {
    const { getByTestId } = render(<Contact />)
    expect(getByTestId('contactAddress')).toBeInTheDocument()
    expect(getByTestId('contactAddress')).toBeVisible()
    expect(getByTestId('contactAddress')).toHaveTextContent('24-200 Bełżyce')
  })
  it('should have address text as link to google map', () => {
    const { getByTestId } = render(<Contact />)
    expect(getByTestId('contactGoogleMapLocation')).toBeInTheDocument()
    expect(getByTestId('contactGoogleMapLocation')).toBeVisible()
    expect(getByTestId('contactGoogleMapLocation')).toHaveTextContent('24-200 Bełżyce')
    expect(getByTestId('contactGoogleMapLocation')).toHaveAttribute('href', 'https://maps.google.com/maps?q=polska+belzyce+mikolaja+kopernika+165a')
    expect(getByTestId('contactGoogleMapLocation')).toHaveAttribute('target', '_blank')
    expect(getByTestId('contactGoogleMapLocation')).toHaveAttribute('rel', 'noopener noreferrer')
  })
  it('should have contact social media', () => {
    const { getByTestId } = render(<Contact />)
    expect(getByTestId('contactSocialmedia')).toBeInTheDocument()
    expect(getByTestId('contactSocialmedia')).toBeVisible()
  })


});