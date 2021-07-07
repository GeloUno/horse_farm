import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import LogInFormik from './LogInFormik';


const mockFn = jest.fn()


const loginForm = (<LogInFormik handleSubmit={mockFn} />)

describe('Login form component visible', () => {
  it('should have body component', async () => {
    render(loginForm)
    const reust = await screen.getByTestId('loginByPasswordFormikComponent')
    expect(reust).toBeInTheDocument()
    expect(reust).toBeVisible()
  })
  it('should have email input', async () => {
    render(loginForm)
    const reust = await screen.getByTestId('inputLoginFormEmail')
    expect(reust).toBeInTheDocument()
    expect(reust).toBeVisible()
  })
  it('should have password input', async () => {
    render(loginForm)
    const reust = await screen.getByTestId('inputLoginFormPassword')
    expect(reust).toBeInTheDocument()
    expect(reust).toBeVisible()
  })
  it('should have button submit', async () => {
    render(loginForm)
    const reust = await screen.getByTestId('inputLoginFormButton')
    expect(reust).toBeInTheDocument()
    expect(reust).toBeVisible()
  })
});
describe('Login form validation', () => {

  it('no email no password should return error and not call handle submit function', async () => {
    const { container } = render(loginForm)

    const buttonSubmit = screen.getByRole('button', { name: /zaloguj/i })

    await waitFor(() => {
      userEvent.click(buttonSubmit)
      expect(buttonSubmit).toHaveAttribute('disabled')
      expect(mockFn).toHaveBeenCalledTimes(0)
    })
    expect(container.querySelector('[id="email-helper-text"]')).toHaveTextContent('proszę podaj adres e-mail')
    expect(container.querySelector('[ id="password-helper-text"]')).toHaveTextContent('proszę podaj hasło')

  })

  it('short password and short email should return errors and not call handle submit function', async () => {
    const { container } = render(loginForm)

    userEvent.type(screen.getByLabelText(/email/i), 'ex')
    userEvent.type(screen.getByLabelText(/hasło/i), '12')

    const buttonSubmit = screen.getByRole('button', { name: /zaloguj/i })

    await waitFor(() => {
      userEvent.click(buttonSubmit)
      expect(buttonSubmit).toHaveAttribute('disabled')
      expect(mockFn).toHaveBeenCalledTimes(0)
      expect(container.querySelector('[id="email-helper-text"]')).toHaveTextContent('Ups... czegoś brakuje w adresie e-mial')
      expect(container.querySelector('[ id="password-helper-text"]')).toHaveTextContent('minimalna liczba znaków to 8')
    })
  })

  it('correct password and incorrect short email should return error and not call handle submit function', async () => {
    const { container } = render(loginForm)

    userEvent.type(screen.getByLabelText(/email/i), 'ex')
    userEvent.type(screen.getByLabelText(/hasło/i), '12345678')

    const buttonSubmit = screen.getByRole('button', { name: /zaloguj/i })

    await waitFor(() => {
      userEvent.click(buttonSubmit)
      expect(buttonSubmit).toHaveAttribute('disabled')
      expect(mockFn).toHaveBeenCalledTimes(0)
      expect(container.querySelector('[id="email-helper-text"]')).toHaveTextContent('Ups... czegoś brakuje w adresie e-mial')
      expect(container.querySelector('[id="password-helper-text"]')).toBeNull()
    })
  })
  it('correct password and incorrect email no @ should return error and not call handle submit function', async () => {
    const { container } = render(loginForm)

    userEvent.type(screen.getByLabelText(/email/i), 'examplegoo.uk')
    userEvent.type(screen.getByLabelText(/hasło/i), '12345678')
    userEvent.tab()
    const buttonSubmit = screen.getByRole('button', { name: /zaloguj/i })

    await waitFor(() => {
      userEvent.click(buttonSubmit)
      expect(buttonSubmit).toHaveAttribute('disabled')
      expect(mockFn).toHaveBeenCalledTimes(0)
      expect(container.querySelector('[id="email-helper-text"]')).toHaveTextContent('Ups... czegoś brakuje w adresie e-mial')
      expect(container.querySelector('[id="password-helper-text"]')).toBeNull()
    })
  })
  it('correct password and incorrect email no .uk should return error and not call handle submit function', async () => {
    const { container } = render(loginForm)

    userEvent.type(screen.getByLabelText(/email/i), 'example@goo')
    userEvent.type(screen.getByLabelText(/hasło/i), '12345678')

    const buttonSubmit = screen.getByRole('button', { name: /zaloguj/i })

    await waitFor(() => {
      userEvent.click(buttonSubmit)
      expect(buttonSubmit).toHaveAttribute('disabled')
      expect(mockFn).toHaveBeenCalledTimes(0)
      expect(container.querySelector('[id="email-helper-text"]')).toHaveTextContent('Ups... czegoś brakuje w adresie e-mial')
      expect(container.querySelector('[id="password-helper-text"]')).toBeNull()
    })
  })

  it('correct password and correct email should call handle submit function and no show error', async () => {

    const { container } = render(loginForm)
    const buttonSubmit = screen.getByRole('button', { name: /zaloguj/i })
    userEvent.type(screen.getByLabelText(/email/i), 'example@goo.uk')
    userEvent.type(screen.getByLabelText(/hasło/i), '12345678')

    expect(container.querySelector('[id="email-helper-text"]')).toBeNull()
    expect(container.querySelector('[id="password-helper-text"]')).toBeNull()
    expect(buttonSubmit).not.toHaveAttribute('disabled')
    await waitFor(() => {
      userEvent.click(buttonSubmit)
      expect(mockFn).not.toHaveBeenCalledTimes(0)
      expect(mockFn).toHaveBeenCalled()
      expect(mockFn).toHaveBeenCalledWith({
        email: "example@goo.uk",
        password: "12345678",
      },
        { ...mockFn.mock.calls[1][1] }
      )
    })
  })

});