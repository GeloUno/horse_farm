import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import SignUpFormik from './SignUpFormik';


const mockFn = jest.fn()


const loginForm = (<SignUpFormik handleSubmit={mockFn} />)

describe('SignUp form component visible', () => {
  it('should have body component', async () => {
    render(loginForm)
    const reust = await screen.getByTestId('signupInputForm')
    expect(reust).toBeInTheDocument()
    expect(reust).toBeVisible()
  })
  it('should have email input', async () => {
    render(loginForm)
    const reust = await screen.getByTestId('inputEmailSignupForm')
    expect(reust).toBeInTheDocument()
    expect(reust).toBeVisible()
  })
  it('should have password input', async () => {
    render(loginForm)
    const reust = await screen.getByTestId('inputPasswordSignupForm')
    expect(reust).toBeInTheDocument()
    expect(reust).toBeVisible()
  })
  it('should have password input', async () => {
    render(loginForm)
    const reust = await screen.getByTestId('inputConfirmPasswordSignupForm')
    expect(reust).toBeInTheDocument()
    expect(reust).toBeVisible()
  })
  it('should have button submit', async () => {
    render(loginForm)
    const reust = await screen.getByTestId('buttonSignupForm')
    expect(reust).toBeInTheDocument()
    expect(reust).toBeVisible()
  })
});
describe('SignUp form validation', () => {

  it('no email no password no confirm password should return error and not call handle submit function', async () => {
    const { container } = render(loginForm)

    const buttonSubmit = screen.getByRole('button', { name: /rejestracja/i })
    await waitFor(() => {
      userEvent.click(buttonSubmit)
      expect(buttonSubmit).toHaveAttribute('disabled')
      expect(mockFn).toHaveBeenCalledTimes(0)
    })
    expect(container.querySelector('[id="email-helper-text"]')).toHaveTextContent('proszę podaj adres e-mail')
    expect(container.querySelector('[ id="password-helper-text"]')).toHaveTextContent('proszę podaj hasło')
    expect(container.querySelector('[ id="confirmPassword-helper-text"]')).toHaveTextContent('proszę wprowadź ponownie hasło')
  })

  it('short password and short email should return error and not call handle submit function', async () => {
    const { container } = render(loginForm)

    userEvent.type(screen.getByLabelText(/email/i), 'ex')
    userEvent.type(screen.getByLabelText('hasło'), '12')

    const buttonSubmit = screen.getByRole('button', { name: /rejestracja/i })

    await waitFor(() => {
      userEvent.click(buttonSubmit)
      expect(buttonSubmit).toHaveAttribute('disabled')
      expect(mockFn).toHaveBeenCalledTimes(0)
      expect(container.querySelector('[id="email-helper-text"]')).toHaveTextContent('Ups... coś z adresem e-mail jest nie tak')
      expect(container.querySelector('[ id="password-helper-text"]')).toHaveTextContent('minimalna liczba znaków to 8')
      expect(container.querySelector('[ id="confirmPassword-helper-text"]')).toHaveTextContent('proszę wprowadź ponownie hasło')
    })
  })

  it('correct password and incorrect short email no confirm passord should return error and not call handle submit function', async () => {
    const { container } = render(loginForm)

    userEvent.type(screen.getByLabelText(/email/i), 'ex')
    userEvent.type(screen.getByLabelText('hasło'), '12345678')

    const buttonSubmit = screen.getByRole('button', { name: /rejestracja/i })

    await waitFor(() => {
      userEvent.click(buttonSubmit)
      expect(buttonSubmit).toHaveAttribute('disabled')
      expect(mockFn).toHaveBeenCalledTimes(0)
      expect(container.querySelector('[id="email-helper-text"]')).toHaveTextContent('Ups... coś z adresem e-mail jest nie tak')
      expect(container.querySelector('[id="password-helper-text"]')).toBeNull()
      expect(container.querySelector('[ id="confirmPassword-helper-text"]')).toHaveTextContent('proszę wprowadź ponownie hasło')
    })
  })
  it('correct password and incorrect email no @ no confirm passord should return error and not call handle submit function', async () => {
    const { container } = render(loginForm)

    userEvent.type(screen.getByLabelText(/email/i), 'examplegoo.uk')
    userEvent.type(screen.getByLabelText('hasło'), '12345678')
    userEvent.tab()
    const buttonSubmit = screen.getByRole('button', { name: /rejestracja/i })

    await waitFor(() => {
      userEvent.click(buttonSubmit)
      expect(buttonSubmit).toHaveAttribute('disabled')
      expect(mockFn).toHaveBeenCalledTimes(0)
      expect(container.querySelector('[id="email-helper-text"]')).toHaveTextContent('Ups... coś z adresem e-mail jest nie tak')
      expect(container.querySelector('[id="password-helper-text"]')).toBeNull()
      expect(container.querySelector('[ id="confirmPassword-helper-text"]')).toHaveTextContent('proszę wprowadź ponownie hasło')
    })
  })
  it('correct password and incorrect email no .uk should return error and not call handle submit function', async () => {
    const { container } = render(loginForm)

    userEvent.type(screen.getByLabelText(/email/i), 'example@goo')
    userEvent.type(screen.getByLabelText('hasło'), '12345678')

    const buttonSubmit = screen.getByRole('button', { name: /rejestracja/i })

    await waitFor(() => {
      userEvent.click(buttonSubmit)
      expect(buttonSubmit).toHaveAttribute('disabled')
      expect(mockFn).toHaveBeenCalledTimes(0)
      expect(container.querySelector('[id="email-helper-text"]')).toHaveTextContent('Ups... coś z adresem e-mail jest nie tak')
      expect(container.querySelector('[id="password-helper-text"]')).toBeNull()
      expect(container.querySelector('[ id="confirmPassword-helper-text"]')).toHaveTextContent('proszę wprowadź ponownie hasło')
    })
  })

  it('correct password and correct email no confirm paswword should return error and not call handle submit function', async () => {

    const { container } = render(loginForm)
    const buttonSubmit = screen.getByRole('button', { name: /rejestracja/i })
    userEvent.type(screen.getByLabelText(/email/i), 'example@goo.uk')
    userEvent.type(screen.getByLabelText('hasło'), '12345678')

    expect(container.querySelector('[id="email-helper-text"]')).toBeNull()
    expect(container.querySelector('[id="password-helper-text"]')).toBeNull()
    expect(buttonSubmit).not.toHaveAttribute('disabled')
    await waitFor(() => {
      userEvent.click(buttonSubmit)
      expect(buttonSubmit).toHaveAttribute('disabled')
      expect(mockFn).toHaveBeenCalledTimes(0)
      expect(container.querySelector('[id="email-helper-text"]')).toBeNull()
      expect(container.querySelector('[id="password-helper-text"]')).toBeNull()
      expect(container.querySelector('[ id="confirmPassword-helper-text"]')).toHaveTextContent('proszę wprowadź ponownie hasło')
    })
  })
  it('correct password and correct email incorrect confirm paswword should return error and not call handle submit function', async () => {
    const { container } = render(loginForm)
    const buttonSubmit = screen.getByRole('button', { name: /rejestracja/i })
    userEvent.type(screen.getByLabelText(/email/i), 'example@goo.uk')
    userEvent.type(screen.getByLabelText('hasło'), '12345678')
    userEvent.type(screen.getByLabelText('powtórz hasło'), '87654321')

    expect(container.querySelector('[id="email-helper-text"]')).toBeNull()
    expect(container.querySelector('[id="password-helper-text"]')).toBeNull()
    expect(buttonSubmit).not.toHaveAttribute('disabled')
    await waitFor(() => {
      userEvent.click(buttonSubmit)
      expect(buttonSubmit).toHaveAttribute('disabled')
      expect(mockFn).toHaveBeenCalledTimes(0)
      expect(container.querySelector('[id="email-helper-text"]')).toBeNull()
      expect(container.querySelector('[id="password-helper-text"]')).toBeNull()
      expect(container.querySelector('[ id="confirmPassword-helper-text"]')).toHaveTextContent('hasła nie są identyczne')
    })
  })
  it('no password and correct email incorrect confirm paswword should return error and not call handle submit function', async () => {
    const { container } = render(loginForm)
    const buttonSubmit = screen.getByRole('button', { name: /rejestracja/i })
    userEvent.type(screen.getByLabelText(/email/i), 'example@goo.uk')

    userEvent.type(screen.getByLabelText('powtórz hasło'), '87654321')

    expect(container.querySelector('[id="email-helper-text"]')).toBeNull()
    expect(container.querySelector('[id="password-helper-text"]')).toBeNull()
    expect(buttonSubmit).not.toHaveAttribute('disabled')
    await waitFor(() => {
      userEvent.click(buttonSubmit)
      expect(buttonSubmit).toHaveAttribute('disabled')
      expect(mockFn).toHaveBeenCalledTimes(0)
      expect(container.querySelector('[id="email-helper-text"]')).toBeNull()
      expect(container.querySelector('[id="password-helper-text"]')).toHaveTextContent('proszę podaj hasło')
      expect(container.querySelector('[ id="confirmPassword-helper-text"]')).toHaveTextContent('hasła nie są identyczne')
    })
  })
  it('correct password and correct email correct confirm paswword should call handle submit function and no show error', async () => {

    const { container } = render(loginForm)
    const buttonSubmit = screen.getByRole('button', { name: /rejestracja/i })
    userEvent.type(screen.getByLabelText(/email/i), 'example@goo.uk')
    userEvent.type(screen.getByLabelText('hasło'), '12345678')
    userEvent.type(screen.getByLabelText('powtórz hasło'), '12345678')
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
        confirmPassword: "12345678"
      },
        { ...mockFn.mock.calls[1][1] }
      )
    })
  })

});