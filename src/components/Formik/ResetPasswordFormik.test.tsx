import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import ResetPassword from './ResetPasswordFormik';


const mockFn = jest.fn()

const testingComponent = (<ResetPassword handleSubmit={mockFn} />)

describe('Reset password form component visible', () => {
  it('should have body component', async () => {
    render(testingComponent)
    const reust = await screen.getByTestId('resetPasswordFormik')
    expect(reust).toBeInTheDocument()
    expect(reust).toBeVisible()
  })
  it('should have email input', async () => {
    render(testingComponent)
    const reust = await screen.getByTestId('inputResetPasswordFormik')
    expect(reust).toBeInTheDocument()
    expect(reust).toBeVisible()
  })
  it('should have button submit', async () => {
    render(testingComponent)
    const reust = await screen.getByTestId('buttonResetPasswordFormik')
    expect(reust).toBeInTheDocument()
    expect(reust).toBeVisible()
  })
});
describe('Reset password form validation', () => {

  it('no email should return error and not call handle submit function', async () => {
    const { container } = render(testingComponent)

    const buttonSubmit = await screen.findByTestId('buttonResetPasswordFormik')

    userEvent.click(buttonSubmit)

    await waitFor(() => {
      expect(buttonSubmit).toHaveAttribute('disabled')
      expect(mockFn).toHaveBeenCalledTimes(0)
    })
    expect(container.querySelector('[id="email-helper-text"]')).toHaveTextContent('proszę podaj adres e-mail')
  })

  it('short email should return error and not call handle submit function', async () => {
    const { container } = render(testingComponent)

    const buttonSubmit = await screen.findByTestId('buttonResetPasswordFormik')

    userEvent.type(screen.getByLabelText(/email/i), 'ex')

    userEvent.click(buttonSubmit)

    await waitFor(() => {
      expect(buttonSubmit).toHaveAttribute('disabled')
      expect(mockFn).toHaveBeenCalledTimes(0)
      expect(container.querySelector('[id="email-helper-text"]')).toHaveTextContent('Ups... czegoś brakuje w adresie e-mial')
    })
  })

  it('incorrect email no @ should return error and not call handle submit function', async () => {
    const { container } = render(testingComponent)

    const buttonSubmit = await screen.findByTestId('buttonResetPasswordFormik')

    userEvent.type(screen.getByLabelText(/email/i), 'examplegoo.uk')

    userEvent.click(buttonSubmit)

    await waitFor(() => {
      expect(buttonSubmit).toHaveAttribute('disabled')
      expect(mockFn).toHaveBeenCalledTimes(0)
      expect(container.querySelector('[id="email-helper-text"]')).toHaveTextContent('Ups... czegoś brakuje w adresie e-mial')

    })
  })
  it('incorrect email no .uk should return error and not call handle submit function', async () => {
    const { container } = render(testingComponent)

    const buttonSubmit = await screen.findByTestId('buttonResetPasswordFormik')

    userEvent.type(screen.getByLabelText(/email/i), 'example@goo')

    userEvent.click(buttonSubmit)
    await waitFor(() => {
      expect(buttonSubmit).toHaveAttribute('disabled')
      expect(mockFn).toHaveBeenCalledTimes(0)
      expect(container.querySelector('[id="email-helper-text"]')).toHaveTextContent('Ups... czegoś brakuje w adresie e-mial')

    })
  })

  it('correct password and correct email should call handle submit function and no show error', async () => {
    const { container } = render(testingComponent)

    const buttonSubmit = await screen.findByTestId('buttonResetPasswordFormik')

    userEvent.type(screen.getByLabelText(/email/i), 'example@goo.uk')

    expect(container.querySelector('[id="email-helper-text"]')).toBeNull()
    expect(buttonSubmit).not.toHaveAttribute('disabled')
    await waitFor(() => {
      userEvent.click(buttonSubmit)
      expect(mockFn).not.toHaveBeenCalledTimes(0)
      expect(mockFn).toHaveBeenCalled()
      expect(mockFn).toHaveBeenCalledWith({
        email: "example@goo.uk",
      },
        { ...mockFn.mock.calls[1][1] }
      )
    })
  })

});