import { render, screen, waitFor } from '@testing-library/react';
import { IUserEditProfile } from '../../models/users';
import EditProfileFormik from './EditProfileFormik';
import userEvent from '@testing-library/user-event'





const userExample: IUserEditProfile = {
  email: `example@goo.com`,
  // emailVerified: true,
  // entityAccess: EntityAccess.USER,
  providerId: `google.com`,
  id: '1234567890',
  uid: `123456789qazwsx`,
  // firstName: `john`,
  // lastName: `doe`,
  // phone: `123123123`,
  // nick: `jd`,
  // photoId: `https://pbs.twimg.com/profile_images/1257280933557710850/95taFO3E_400x400.jpg`
}

const mockFn = jest.fn()

const componentToTesting =
  <EditProfileFormik
    user={userExample}
    handleSubmit={mockFn}
  />

describe('Edit profile Form no user data: first name, last name, phone and nick', () => {


  it('should have body input Nick', async () => {
    render(componentToTesting);
    const result = await screen.findByTestId('bodyInputEditProfileNick')
    expect(result).toBeInTheDocument()
    expect(result).toBeVisible()
  });

  it('should have body input first name', async () => {
    render(componentToTesting);
    const result = await screen.findByTestId('bodyInputEditProfileFirstName')
    expect(result).toBeInTheDocument()
    expect(result).toBeVisible()
  });

  it('should have body input last name', async () => {
    render(componentToTesting);
    const result = await screen.findByTestId('bodyInputEditProfileLastName')
    expect(result).toBeInTheDocument()
    expect(result).toBeVisible()
  });

  it('should have body input phone', async () => {
    render(componentToTesting);
    const result = await screen.findByTestId('bodyInputEditProfilePhone')
    expect(result).toBeInTheDocument()
    expect(result).toBeVisible()
  });

  it('should have body input email', async () => {
    render(componentToTesting);
    const result = await screen.findByTestId('bodyInputEditProfileEmail')
    expect(result).toBeInTheDocument()
    expect(result).toBeVisible()
  });

  it('should have body input opinion', async () => {
    render(componentToTesting);
    const result = await screen.findByTestId('bodyInputEditProfileOpinion')
    expect(result).toBeInTheDocument()
    expect(result).toBeVisible()
  });

  it('should have body button save edited data', async () => {
    render(componentToTesting);
    const result = await screen.findByTestId('bodyInputEditProfileButtonSave')
    expect(result).toBeInTheDocument()
    expect(result).toBeVisible()
  });


  it('should have label Nick', async () => {
    render(componentToTesting);
    const result = await screen.findByTestId('labelFormEditProfileNick')
    expect(result).toBeInTheDocument()
    expect(result).toBeVisible()
  });

  it(' label Nick should have content', async () => {
    render(componentToTesting);
    const result = await screen.findByTestId('labelFormEditProfileNick')
    expect(result).toHaveTextContent('nick:')
  });

  it('should have label first name', async () => {
    render(componentToTesting);
    const result = await screen.findByTestId('labelFormEditProfileFirstName')
    expect(result).toBeInTheDocument()
    expect(result).toBeVisible()
  });
  it(' label first name should have content', async () => {
    render(componentToTesting);
    const result = await screen.findByTestId('labelFormEditProfileFirstName')
    expect(result).toHaveTextContent('imię:')
  });

  it('should have label last name', async () => {
    render(componentToTesting);
    const result = await screen.findByTestId('labelFormEditProfileLastName')
    expect(result).toBeInTheDocument()
    expect(result).toBeVisible()
  });
  it(' label last name should have content', async () => {
    render(componentToTesting);
    const result = await screen.findByTestId('labelFormEditProfileLastName')
    expect(result).toHaveTextContent('nazwisko:')
  });

  it('should have label phone', async () => {
    render(componentToTesting);
    const result = await screen.findByTestId('labelFormEditProfilePhone')
    expect(result).toBeInTheDocument()
    expect(result).toBeVisible()
  });
  it(' label phone should have content', async () => {
    render(componentToTesting);
    const result = await screen.findByTestId('labelFormEditProfilePhone')
    expect(result).toHaveTextContent('tel:')
  });

  it('should have label email', async () => {
    render(componentToTesting);
    const result = await screen.findByTestId('labelFormEditProfileEmail')
    expect(result).toBeInTheDocument()
    expect(result).toBeVisible()
  });
  it(' label e-mail should have content', async () => {
    render(componentToTesting);
    const result = await screen.findByTestId('labelFormEditProfileEmail')
    expect(result).toHaveTextContent('e-mail:')
  });

  it('should have label opinion', async () => {
    render(componentToTesting);
    const result = await screen.findByTestId('labelFormEditProfileOpinion')
    expect(result).toBeInTheDocument()
    expect(result).toBeVisible()
  });
  it('label opinion should have content', async () => {
    render(componentToTesting);
    const result = await screen.findByTestId('labelFormEditProfileOpinion')
    expect(result).toHaveTextContent('opinia:')
  });

  it('should have input Nick', async () => {
    render(componentToTesting);
    const result = await screen.findByTestId('inputEditFormProfileNick')
    expect(result).toBeInTheDocument()
    expect(result).toBeVisible()
  });

  it('should have input first name', async () => {
    render(componentToTesting);
    const result = await screen.findByTestId('inputFormEditProfileFirstName')
    expect(result).toBeInTheDocument()
    expect(result).toBeVisible()
  });

  it('should have input last name', async () => {
    render(componentToTesting);
    const result = await screen.findByTestId('inputEditFormProfileLastName')
    expect(result).toBeInTheDocument()
    expect(result).toBeVisible()
  });

  it('should have input phone', async () => {
    render(componentToTesting);
    const result = await screen.findByTestId('inputFormEditProfilePhone')
    expect(result).toBeInTheDocument()
    expect(result).toBeVisible()
  });

  it('should have input email', async () => {
    render(componentToTesting);
    const result = await screen.findByTestId('inputFormEditProfileEmail')
    expect(result).toBeInTheDocument()
    expect(result).toBeVisible()
  });

  it('should have input opinion', async () => {
    render(componentToTesting);
    const result = await screen.findByTestId('inputFormEditProfileOpinion')
    expect(result).toBeInTheDocument()
    expect(result).toBeVisible()
  });


  it('input nick should have content', async () => {
    render(componentToTesting);
    const result = await screen.findByTestId('inputEditFormProfileNick')
    expect(result).toHaveValue(`${userExample.nick || ''}`)
  });

  it('input first name should have content', async () => {
    render(componentToTesting);
    const result = await screen.findByTestId('inputFormEditProfileFirstName')
    expect(result).toHaveValue(`${userExample.firstName || ''}`)
  });

  it('input last name should have content', async () => {
    render(componentToTesting);
    const result = await screen.findByTestId('inputEditFormProfileLastName')
    expect(result).toHaveValue(`${userExample.lastName || ''}`)
  });

  it('input phone should have content', async () => {
    render(componentToTesting);
    const result = await screen.findByTestId('inputFormEditProfilePhone')
    expect(result).toHaveValue(`${userExample.phone || ''}`)
  });

  it('input email should have content', async () => {
    render(componentToTesting);
    const result = await screen.findByTestId('inputFormEditProfileEmail')
    expect(result).toHaveValue(`${userExample.email}`)
  });

  it('input opinion should have content', async () => {
    render(componentToTesting);
    const result = await screen.findByTestId('inputFormEditProfileOpinion')
    expect(result).toHaveValue(`${userExample.opinion || ''}`)
  });
  it('should have button', async () => {
    render(componentToTesting);
    const result = await screen.findByTestId('buttonFormEditProfileSave')
    expect(result).toBeInTheDocument()
    expect(result).toBeVisible()
  });
  it('button should have content', async () => {
    render(componentToTesting);
    const result = await screen.findByTestId('buttonFormEditProfileSave')
    expect(result).toHaveTextContent(`zapisz`)
  });
  it('button should be disabled', async () => {
    render(componentToTesting);
    const result = await screen.findByTestId('buttonFormEditProfileSave')
    expect(result).toHaveAttribute(`disabled`)
  });
})


describe('Edit profile check error message', () => {

  const char51 = `LoremipsumdolorsitametconsecteturadipisicingelitRep`


  it('error body nick should have empty content', async () => {
    render(componentToTesting);
    const result = await screen.findByTestId('errorEditFormProfileNick')
    expect(result).toBeInTheDocument()
    expect(result).toBeVisible()
    expect(result).toHaveTextContent('')
  });
  it('error body first name should have empty content', async () => {
    render(componentToTesting);
    const result = await screen.findByTestId('errorEditFormProfileFirstName')
    expect(result).toBeInTheDocument()
    expect(result).toBeVisible()
    expect(result).toHaveTextContent('')
  });
  it('error body last name should have empty content', async () => {
    render(componentToTesting);
    const result = await screen.findByTestId('errorEditFormProfileLastName')
    expect(result).toBeInTheDocument()
    expect(result).toBeVisible()
    expect(result).toHaveTextContent('')
  });
  it('error body phone should have empty content', async () => {
    render(componentToTesting);
    const result = await screen.findByTestId('errorEditFormProfilePhone')
    expect(result).toBeInTheDocument()
    expect(result).toBeVisible()
    expect(result).toHaveTextContent('')
  });
  it('error body e-mail should have empty content', async () => {
    render(componentToTesting);
    const result = await screen.findByTestId('errorEditFormProfileEmail')
    expect(result).toBeInTheDocument()
    expect(result).toBeVisible()
    expect(result).toHaveTextContent('')
  });
  it('error body opinion should have empty content', async () => {
    render(componentToTesting);
    const result = await screen.findByTestId('errorEditFormProfileOpinion')
    expect(result).toBeInTheDocument()
    expect(result).toBeVisible()
    expect(result).toHaveTextContent('')
  });
  it('no data nick only tab should show error after focus', async () => {
    render(componentToTesting);
    const inputForm = await screen.findByTestId('inputEditFormProfileNick')
    userEvent.click(inputForm)
    userEvent.tab()
    const result = await screen.findByTestId('errorEditFormProfileNick')
    expect(result).toBeInTheDocument()
    expect(result).toBeVisible()
    expect(result).toHaveTextContent('pole jest wymagane w celu kontaktu instruktora')
  });
  it('no data first name only tab should show error after focus', async () => {
    render(componentToTesting);
    const inputForm = await screen.findByTestId('inputFormEditProfileFirstName')
    userEvent.click(inputForm)
    userEvent.tab()
    const result = await screen.findByTestId('errorEditFormProfileFirstName')
    expect(result).toBeInTheDocument()
    expect(result).toBeVisible()
    expect(result).toHaveTextContent('pole jest wymagane w celu kontaktu instruktora')
  });
  it('no data last name only tab should show error after focus', async () => {
    render(componentToTesting);
    const inputForm = await screen.findByTestId('inputEditFormProfileLastName')
    userEvent.click(inputForm)
    userEvent.tab()
    const result = await screen.findByTestId('errorEditFormProfileLastName')
    expect(result).toBeInTheDocument()
    expect(result).toBeVisible()
    expect(result).toHaveTextContent('pole jest wymagane w celu kontaktu instruktora')
  });
  it('no data phone only tab should show error after focus', async () => {
    render(componentToTesting);
    const inputForm = await screen.findByTestId('inputFormEditProfilePhone')
    userEvent.click(inputForm)
    userEvent.tab()
    const result = await screen.findByTestId('errorEditFormProfilePhone')
    expect(result).toBeInTheDocument()
    expect(result).toBeVisible()
    expect(result).toHaveTextContent('pole jest wymagane w celu kontaktu instruktora')
  });
  it('no data email only tab should not show error after focus', async () => {
    render(componentToTesting);
    const inputForm = await screen.findByTestId('inputFormEditProfileEmail')
    userEvent.click(inputForm)
    userEvent.tab()
    const result = await screen.findByTestId('errorEditFormProfileEmail')
    expect(result).toBeInTheDocument()
    expect(result).toBeVisible()
    expect(result).toHaveTextContent('')
  });

  it('no data opinion only tab should not show error after focus', async () => {
    render(componentToTesting);
    const inputForm = await screen.findByTestId('inputFormEditProfileOpinion')
    userEvent.click(inputForm)
    userEvent.tab()
    const result = await screen.findByTestId('errorEditFormProfileOpinion')
    expect(result).toBeInTheDocument()
    expect(result).toBeVisible()
    expect(result).toHaveTextContent('')
  });


  it('no min lenght data nick only tab should show error after focus', async () => {
    render(componentToTesting);
    const inputForm = await screen.findByTestId('inputEditFormProfileNick')
    userEvent.click(inputForm)
    userEvent.type(inputForm, 'ni')
    userEvent.tab()
    const result = await screen.findByTestId('errorEditFormProfileNick')
    expect(result).toBeInTheDocument()
    expect(result).toBeVisible()
    expect(result).toHaveTextContent('minimalna liczba znaków to 3')
  });
  it('no min lenght data first name only tab should show error after focus', async () => {
    render(componentToTesting);
    const inputForm = await screen.findByTestId('inputFormEditProfileFirstName')
    userEvent.click(inputForm)
    userEvent.type(inputForm, 'fi')
    userEvent.tab()
    const result = await screen.findByTestId('errorEditFormProfileFirstName')
    expect(result).toBeInTheDocument()
    expect(result).toBeVisible()
    expect(result).toHaveTextContent('minimalna liczba znaków to 3')
  });
  it('no min lenght data last name only tab should show error after focus', async () => {
    render(componentToTesting);
    const inputForm = await screen.findByTestId('inputEditFormProfileLastName')
    userEvent.click(inputForm)
    userEvent.type(inputForm, 'la')
    userEvent.tab()
    const result = await screen.findByTestId('errorEditFormProfileLastName')
    expect(result).toBeInTheDocument()
    expect(result).toBeVisible()
    expect(result).toHaveTextContent('minimalna liczba znaków to 3')
  });
  it('no min lenght data phone only tab should show error after focus', async () => {
    render(componentToTesting);
    const inputForm = await screen.findByTestId('inputFormEditProfilePhone')
    userEvent.click(inputForm)
    userEvent.type(inputForm, '123')
    userEvent.tab()
    const result = await screen.findByTestId('errorEditFormProfilePhone')
    expect(result).toBeInTheDocument()
    expect(result).toBeVisible()
    expect(result).toHaveTextContent('nie poprawny numer kom.')
  });
  it(`no min lenght data email only tab should not show error after focus data con't be edited`, async () => {
    render(componentToTesting);
    const inputForm = await screen.findByTestId('inputFormEditProfileEmail')
    userEvent.click(inputForm)
    userEvent.type(inputForm, 'em')
    userEvent.tab()
    const result = await screen.findByTestId('errorEditFormProfileEmail')
    expect(result).toBeInTheDocument()
    expect(result).toBeVisible()
    expect(result).toHaveTextContent('')
  });
  it('no min lenght data opinion only tab should not show error after focus', async () => {
    render(componentToTesting);
    const inputForm = await screen.findByTestId('inputFormEditProfileOpinion')
    userEvent.click(inputForm)
    userEvent.type(inputForm, 'op')
    userEvent.tab()
    const result = await screen.findByTestId('errorEditFormProfileOpinion')
    expect(result).toBeInTheDocument()
    expect(result).toBeVisible()
    expect(result).toHaveTextContent('minimalna lczba znaków 20')
  });


  it('more than max lenght data nick only tab should show error after focus', async () => {
    render(componentToTesting);
    const inputForm = await screen.findByTestId('inputEditFormProfileNick')
    userEvent.click(inputForm)
    userEvent.type(inputForm, char51)
    userEvent.tab()
    const result = await screen.findByTestId('errorEditFormProfileNick')
    expect(result).toBeInTheDocument()
    expect(result).toBeVisible()
    expect(result).toHaveTextContent('maksymalna lczba znaków 50')
  });
  it('more than max lenght data first name only tab should show error after focus', async () => {
    render(componentToTesting);
    const inputForm = await screen.findByTestId('inputFormEditProfileFirstName')
    userEvent.click(inputForm)

    userEvent.type(inputForm, char51)
    userEvent.tab()
    const result = await screen.findByTestId('errorEditFormProfileFirstName')
    expect(result).toBeInTheDocument()
    expect(result).toBeVisible()
    expect(result).toHaveTextContent('maksymalna lczba znaków 50')
  });
  it('more than max lenght data last name only tab should show error after focus', async () => {
    render(componentToTesting);
    const inputForm = await screen.findByTestId('inputEditFormProfileLastName')
    userEvent.click(inputForm)
    userEvent.type(inputForm, char51)
    userEvent.tab()
    const result = await screen.findByTestId('errorEditFormProfileLastName')
    expect(result).toBeInTheDocument()
    expect(result).toBeVisible()
    expect(result).toHaveTextContent('maksymalna lczba znaków 50')
  });
  it('more than max lenght data phone only tab should show error after focus', async () => {
    render(componentToTesting);
    const inputForm = await screen.findByTestId('inputFormEditProfilePhone')
    userEvent.click(inputForm)
    userEvent.type(inputForm, '1234567890')
    userEvent.tab()
    const result = await screen.findByTestId('errorEditFormProfilePhone')
    expect(result).toBeInTheDocument()
    expect(result).toBeVisible()
    expect(result).toHaveTextContent('nie poprawny numer kom.')
  });
  it(`more than max lenght data email only tab should not show error after focus data con't be edited`, async () => {
    render(componentToTesting);
    const inputForm = await screen.findByTestId('inputFormEditProfileEmail')
    userEvent.click(inputForm)
    userEvent.type(inputForm, char51)
    userEvent.tab()
    const result = await screen.findByTestId('errorEditFormProfileEmail')
    expect(result).toBeInTheDocument()
    expect(result).toBeVisible()
    expect(result).toHaveTextContent('')
  });

  // it('more than max lenght data opinion only tab should not show error after focus', async () => {
  //   render(componentToTesting);
  //   const inputForm = await screen.findByTestId('inputFormEditProfileOpinion')
  //   userEvent.click(inputForm)
  //   userEvent.type(inputForm, char501)
  //   userEvent.tab()
  //   const result = await screen.findByTestId('errorEditFormProfileOpinion')
  //   expect(result).toBeInTheDocument()
  //   expect(result).toBeVisible()
  //   expect(result).toHaveTextContent('minimalna lczba znaków 20')
  // });

})

describe('Check typing in Edit profile form', () => {

  it('nick should have empty value before typing and after typing should have content', async () => {
    render(componentToTesting);
    const inputForm = await screen.findByTestId('inputEditFormProfileNick') as HTMLInputElement
    expect(inputForm.value).toBe('')
    userEvent.type(inputForm, `NickExample`)
    const errorMessage = await screen.findByTestId('errorEditFormProfileNick')

    await waitFor(() => {
      expect(inputForm.value).toBe('NickExample')
      expect(errorMessage).toHaveTextContent('')
    })
  });
  it('first name should have empty value before typing and after typing should have content', async () => {
    render(componentToTesting);
    const inputForm = await screen.findByTestId('inputFormEditProfileFirstName') as HTMLInputElement
    expect(inputForm.value).toBe('')

    userEvent.type(inputForm, 'John')
    const errorMessage = await screen.findByTestId('errorEditFormProfileFirstName')

    await waitFor(() => {
      expect(inputForm.value).toBe('John')
      expect(errorMessage).toHaveTextContent('')
    })
  });
  it('last name should have empty value before typing and after typing should have content', async () => {
    render(componentToTesting);
    const inputForm = await screen.findByTestId('inputEditFormProfileLastName') as HTMLInputElement
    expect(inputForm.value).toBe('')

    userEvent.type(inputForm, 'Doe')
    const errorMessage = await screen.findByTestId('errorEditFormProfileLastName')

    await waitFor(() => {
      expect(inputForm.value).toBe('Doe')
      expect(errorMessage).toHaveTextContent('')
    })
  });
  it('phone should have empty value before typing and after typing should have content', async () => {
    render(componentToTesting);
    const inputForm = await screen.findByTestId('inputFormEditProfilePhone') as HTMLInputElement
    expect(inputForm.value).toBe('')

    userEvent.type(inputForm, '111444777')
    const errorMessage = await screen.findByTestId('errorEditFormProfilePhone')

    await waitFor(() => {
      expect(inputForm.value).toBe('111444777')
      expect(errorMessage).toHaveTextContent('')
    })
  });

  it(`email should have user value before typing and can't be change`, async () => {
    render(componentToTesting);
    const inputForm = await screen.findByTestId('inputFormEditProfileEmail') as HTMLInputElement
    expect(inputForm.value).toBe('example@goo.com')

    userEvent.type(inputForm, 'doe@com.uk')
    const errorMessage = await screen.findByTestId('errorEditFormProfileEmail')

    await waitFor(() => {
      expect(inputForm.value).not.toBe('doe@com.uk')
      expect(inputForm.value).toBe('example@goo.com')
      expect(errorMessage).toHaveTextContent('')
    })
  });
  it('opinion should have empty value before typing and after typing should have content', async () => {
    render(componentToTesting);
    const inputForm = await screen.findByTestId('inputFormEditProfileOpinion') as HTMLInputElement
    expect(inputForm.value).toBe('')
    userEvent.type(inputForm, `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias sunt doloribus architecto`)
    const errorMessage = await screen.findByTestId('errorEditFormProfileOpinion')

    await waitFor(() => {
      expect(inputForm.value).toBe('Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias sunt doloribus architecto')
      expect(errorMessage).toHaveTextContent('')
    })
  });

});

describe('Edit profile form check button disabled', () => {
  it('button should be disabled if no data typing ', async () => {
    render(componentToTesting);
    const buttonSave = await screen.findByTestId('buttonFormEditProfileSave')
    expect(buttonSave).toBeInTheDocument()
    expect(buttonSave).toBeVisible()
    expect(buttonSave).toHaveAttribute('disabled')
    userEvent.click(buttonSave)
    expect(mockFn).not.toBeCalled()
    expect(mockFn).toHaveBeenCalledTimes(0)
  })
  it('button should be disabled if typing no valid nick ', async () => {
    render(componentToTesting);
    const buttonSave = await screen.findByTestId('buttonFormEditProfileSave')
    const inputNick = await screen.findByTestId('inputEditFormProfileNick') as HTMLInputElement
    userEvent.type(inputNick, `Ni`)
    userEvent.tab();
    await waitFor(() => {
      expect(buttonSave).toBeInTheDocument()
      expect(buttonSave).toBeVisible()
      expect(buttonSave).toHaveAttribute('disabled')
      userEvent.click(buttonSave)
      expect(mockFn).not.toBeCalled()
      expect(mockFn).toHaveBeenCalledTimes(0)
    })
  })
  it('button should be disabled if typing no valid first name ', async () => {
    render(componentToTesting);
    const buttonSave = await screen.findByTestId('buttonFormEditProfileSave')
    const inputFirstName = await screen.findByTestId('inputFormEditProfileFirstName') as HTMLInputElement
    userEvent.type(inputFirstName, `fi`)
    userEvent.tab();
    await waitFor(() => {
      expect(buttonSave).toBeInTheDocument()
      expect(buttonSave).toBeVisible()
      expect(buttonSave).toHaveAttribute('disabled')
      userEvent.click(buttonSave)
      expect(mockFn).not.toBeCalled()
      expect(mockFn).toHaveBeenCalledTimes(0)
    })
  })
  it('button should be disabled if typing no valid last name ', async () => {
    render(componentToTesting);
    const buttonSave = await screen.findByTestId('buttonFormEditProfileSave')
    const inputLastName = await screen.findByTestId('inputEditFormProfileLastName') as HTMLInputElement
    userEvent.type(inputLastName, `li`)
    userEvent.tab();
    await waitFor(() => {
      expect(buttonSave).toBeInTheDocument()
      expect(buttonSave).toBeVisible()
      expect(buttonSave).toHaveAttribute('disabled')
      userEvent.click(buttonSave)
      expect(mockFn).not.toBeCalled()
      expect(mockFn).toHaveBeenCalledTimes(0)
    })
  })
  it('button should be disabled if typing no valid phone ', async () => {
    render(componentToTesting);
    const buttonSave = await screen.findByTestId('buttonFormEditProfileSave')
    const inputPhone = await screen.findByTestId('inputFormEditProfilePhone') as HTMLInputElement
    userEvent.type(inputPhone, `12`)
    userEvent.tab();
    await waitFor(() => {
      expect(buttonSave).toBeInTheDocument()
      expect(buttonSave).toBeVisible()
      expect(buttonSave).toHaveAttribute('disabled')
      userEvent.click(buttonSave)
      expect(mockFn).not.toBeCalled()
      expect(mockFn).toHaveBeenCalledTimes(0)
    })
  })
  it('button should be disabled if typing no valid opinion', async () => {
    render(componentToTesting);
    const buttonSave = await screen.findByTestId('buttonFormEditProfileSave')
    const inputOpinion = await screen.findByTestId('inputFormEditProfileOpinion') as HTMLInputElement
    userEvent.type(inputOpinion, `Lorem ipsum dolor sit amet.`)
    userEvent.tab();
    await waitFor(() => {
      expect(buttonSave).toBeInTheDocument()
      expect(buttonSave).toBeVisible()
      expect(buttonSave).toHaveAttribute('disabled')
      userEvent.click(buttonSave)
      expect(mockFn).not.toBeCalled()
      expect(mockFn).toHaveBeenCalledTimes(0)
    })
  })
  it('button should not be disabled if typing valid all data ', async () => {
    render(componentToTesting);
    const buttonSave = await screen.findByTestId('buttonFormEditProfileSave') as HTMLButtonElement

    const inputNick = await screen.findByTestId('inputEditFormProfileNick') as HTMLInputElement
    userEvent.type(inputNick, `Nice`)

    const inputFirstName = await screen.findByTestId('inputFormEditProfileFirstName') as HTMLInputElement
    userEvent.type(inputFirstName, `Tom`)

    const inputLastName = await screen.findByTestId('inputEditFormProfileLastName') as HTMLInputElement
    userEvent.type(inputLastName, `Lee`)

    const inputPhone = await screen.findByTestId('inputFormEditProfilePhone') as HTMLInputElement

    userEvent.type(inputPhone, `123456789`)

    userEvent.tab();

    await waitFor(() => {
      expect(buttonSave).toBeInTheDocument()
      expect(buttonSave).toBeVisible()
      expect(buttonSave).not.toHaveAttribute(`disabled`)
      userEvent.click(buttonSave)
      expect(mockFn).toBeCalled()
      expect(mockFn).toHaveBeenCalledWith({
        email: "example@goo.com",
        firstName: "Tom",
        id: "1234567890",
        lastName: "Lee",
        nick: "Nice",
        opinion: undefined,
        phone: "123456789",
        providerId: "google.com",
        uid: "123456789qazwsx",
      },
        { ...mockFn.mock.calls[1][1] }
      )
    })
  })
})


