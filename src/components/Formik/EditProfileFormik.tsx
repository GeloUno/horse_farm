import React from 'react';
import { Field, Form, Formik, FormikProps, FieldProps } from 'formik';
import * as Yup from 'yup';
import { IUserEditProfile } from '../../models/users';


interface EditProfileFormikProps {
  user: IUserEditProfile,
  handleSubmit(values: IUserEditProfile): void
}

const phoneRegex = RegExp(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})$/);

const EditProfileFormik: React.FC<EditProfileFormikProps> = ({ user, handleSubmit }) => {

  const initialValues: IUserEditProfile = {
    nick: user.nick,
    firstName: user.firstName,
    lastName: user.lastName,
    phone: user.phone,
    opinion: user.opinion,
    email: user.email,
    providerId: user?.providerId,
    uid: user.uid,
    id: user.id
  };

  const validationSchema = Yup.object({
    nick: Yup.string()
      .min(3, 'minimalna liczba znaków to 3')
      .max(50, 'maksymalna lczba znaków 50')
      .required('pole jest wymagane w celu kontaktu instruktora'),

    firstName: Yup.string()
      .min(3, 'minimalna liczba znaków to 3')
      .max(50, ',maksymalna lczba znaków 50')
      .required('pole jest wymagane w celu kontaktu instruktora'),

    lastName: Yup.string()
      .min(3, 'minimalna liczba znaków to 3')
      .max(50, 'maksymalna lczba znaków 50')
      .required('pole jest wymagane w celu kontaktu instruktora'),

    phone: Yup.string()
      .matches(phoneRegex, 'nie poprawny numer kom.')
      .required('pole jest wymagane w celu kontaktu instruktora'),

    email: Yup.string()
      .email('niepoprawny adres e-mial')
      .max(50, 'maksymalna lczba znaków 50')
      .required('proszę podaj adres e-mail'),

    opinion: Yup.string()
      .min(25, 'minimalna lczba znaków 20')
      .max(250, 'maksymalna lczba znaków 500'),
  });


  return (
    <div
      data-testid='editProfileFormikComponent'
      style={{
        display: 'flex',
        justifyContent: 'center'
      }}
    >
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {(formik: FormikProps<IUserEditProfile>) => (
          <Form className="editUserProfile">
            <div
              data-testid='bodyInputEditProfileNick'
              className="bodyInputEditProfile"
            >
              <label
                data-testid='labelFormEditProfileNick'
                className="labelInputEditProfile"
                htmlFor="nick"
              >
                nick:
              </label>
              <Field name="nick">
                {(props: FieldProps) => {
                  const { field, form, meta } = props;
                  return (
                    <div>
                      <input
                        data-testid='inputEditFormProfileNick'
                        className="inputModalContaineFormInput"
                        id="name"
                        type="text"
                        {...field}
                        value={field.value || ''}
                      />

                      <div
                        data-testid='errorEditFormProfileNick'
                        className="errorMessenge">
                        {meta.touched && meta.error}
                      </div>
                    </div>
                  );
                }}
              </Field>
            </div>
            <div
              data-testid='bodyInputEditProfileFirstName'
              className="bodyInputEditProfile">
              <label
                data-testid='labelFormEditProfileFirstName'
                className="labelInputEditProfile"
                htmlFor="firstName"

              >
                imię:
              </label>
              <Field name="firstName">
                {(props: FieldProps) => {
                  const { field, form, meta } = props;
                  return (
                    <div>
                      <input
                        data-testid='inputFormEditProfileFirstName'
                        className="inputModalContaineFormInput"
                        id="firstName"
                        type="text"
                        {...field}
                        value={field.value || ''}
                      />
                      <div
                        data-testid='errorEditFormProfileFirstName'
                        className="errorMessenge">
                        {meta.touched && meta.error}
                      </div>
                    </div>
                  );
                }}
              </Field>
            </div>
            <div
              data-testid='bodyInputEditProfileLastName'
              className="bodyInputEditProfile">
              <label
                data-testid='labelFormEditProfileLastName'
                className="labelInputEditProfile"
                htmlFor="lastName">
                nazwisko:
              </label>
              <Field name="lastName">
                {(props: FieldProps) => {
                  const { field, form, meta } = props;
                  return (
                    <div>
                      <input
                        data-testid='inputEditFormProfileLastName'
                        className="inputModalContaineFormInput"
                        id="lastName"
                        type="text"
                        {...field}
                        value={field.value || ''}
                      />
                      <div
                        data-testid='errorEditFormProfileLastName'
                        className="errorMessenge">
                        {meta.touched && meta.error}
                      </div>
                    </div>
                  );
                }}
              </Field>
            </div>
            <div
              data-testid='bodyInputEditProfilePhone'
              className="bodyInputEditProfile">
              <label
                data-testid='labelFormEditProfilePhone'
                className="labelInputEditProfile"
                htmlFor="phone">
                tel:
              </label>
              <Field name="phone">
                {(props: FieldProps) => {
                  const { field, form, meta } = props;
                  return (
                    <div>
                      <input
                        data-testid='inputFormEditProfilePhone'
                        className="inputModalContaineFormInput"
                        id="phone"
                        type="phone"
                        {...field}
                        value={field.value || ''}
                      />
                      <div
                        data-testid='errorEditFormProfilePhone'
                        className="errorMessenge">
                        {meta.touched && meta.error}
                      </div>
                    </div>
                  );
                }}
              </Field>
            </div>
            <div
              data-testid='bodyInputEditProfileEmail'
              className="bodyInputEditProfile">
              <label
                data-testid='labelFormEditProfileEmail'
                className="labelInputEditProfile"
                htmlFor="email">
                e-mail:
              </label>
              <Field name="email">
                {(props: FieldProps) => {
                  const { field, form, meta } = props;
                  return (
                    <div>
                      <input
                        data-testid='inputFormEditProfileEmail'
                        className="inputModalContaineFormInput"
                        id="email"
                        type="email"
                        disabled={
                          user.providerId === 'google.com' ||
                          user.providerId === 'facebook.com'
                        }
                        {...field}
                        value={field.value || ''}
                      />
                      <div
                        data-testid='errorEditFormProfileEmail'
                        className="errorMessenge">
                        {meta.touched && meta.error}
                      </div>
                    </div>
                  );
                }}
              </Field>
            </div>
            <div
              data-testid='bodyInputEditProfileOpinion'
              className="bodyInputEditProfile">
              <label
                data-testid='labelFormEditProfileOpinion'
                className="labelInputEditProfile"
                htmlFor="opinion">
                opinia:
              </label>
              <Field name="opinion">
                {(props: FieldProps) => {
                  const { field, form, meta } = props;

                  return (
                    <div>
                      <textarea
                        data-testid='inputFormEditProfileOpinion'
                        className="inputModalContaineFormInput textareaEditProfile"
                        id="opinion"
                        placeholder="Tu możesz wystawić opinię o stadninie. Wystawiając opinię WYRAŻSZ ZGODĘ na upublicznienie swojego opini wraz z zdjeciem profilu. Zawsze możesz edytować lub wykasować opinię. Usunięcie opini skutkuje usunięciem jej z miejsca publicznego strony. Jeśli nie jesteś pełnoletni o zgodę zapytaj osoby dorosłe ..."
                        // type='text'
                        rows={10}
                        cols={38}
                        {...field}
                        value={field.value || ''}
                      />

                      <div
                        data-testid='errorEditFormProfileOpinion'
                        className="errorMessenge">
                        {meta.touched && meta.error}
                      </div>
                    </div>
                  );
                }}
              </Field>
            </div>

            <div
              data-testid='bodyInputEditProfileButtonSave'
              className="btnBodyEditProfileSave">
              <button
                data-testid='buttonFormEditProfileSave'
                disabled={
                  !formik.dirty ||
                  !!formik.errors.nick ||
                  !!formik.errors.firstName ||
                  !!formik.errors.lastName ||
                  !!formik.errors.phone ||
                  !!formik.errors.opinion ||
                  !!formik.errors.email
                }
                type="submit"
                className="btn btn-green btn-capitalize"
              >
                zapisz
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default EditProfileFormik;
