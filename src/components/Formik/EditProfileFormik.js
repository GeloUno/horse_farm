import React from 'react';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

const phoneRegex = RegExp(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})$/);

const EditProfileFormik = ({ user }) => {
  const initialValues = {
    nick: user.nick,
    firstName: user.firstName,
    lastName: user.firstName,
    phone: user.phone,
    opinion: user.opinion,
    email: user.email,
  };

  const validationSchema = Yup.object({
    nick: Yup.string()
      .min(3, 'minimalna liczba znaków to 3')
      .max(50, ',maksymalna lczba znaków 50')
      .required('pole jest wymagane w celu kontaktu instruktora'),

    firstName: Yup.string()
      .min(3, 'minimalna liczba znaków to 3')
      .max(50, ',maksymalna lczba znaków 50')
      .required('pole jest wymagane w celu kontaktu instruktora'),

    lastName: Yup.string()
      .min(3, 'minimalna liczba znaków to 3')
      .max(50, ',maksymalna lczba znaków 50')
      .required('pole jest wymagane w celu kontaktu instruktora'),

    phone: Yup.string()
      .matches(phoneRegex, 'nie poprawny numer kom.')
      .required('pole jest wymagane w celu kontaktu instruktora'),

    email: Yup.string()
      .email('niepoprawny adres e-mial')
      .max(50, ',maksymalna lczba znaków 50')
      .required('proszę podaj adres e-mail'),

    opinion: Yup.string()
      .min(25, ',minimalna lczba znaków 20')
      .max(500, ',maksymalna lczba znaków 500'),
  });
  const handleSubmit = (values) => {
    console.log('handle :>> ', values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {(formik) => (
        <Form className="editUserProfile">
          {/* <Form className="userProfile editUserProfile"> */}
          <div className="bodyInputEditProfile">
            <label className="labelInputEditProfile" htmlFor="nick">
              nick:
            </label>
            <Field name="nick">
              {(props) => {
                const { field, form, meta } = props;
                return (
                  <div>
                    <input
                      className="inputModalContaineFormInput"
                      id="nick"
                      type="text"
                      {...field}
                    />

                    <div className="errorMessenge">
                      {meta.touched && meta.error}
                    </div>
                  </div>
                );
              }}
            </Field>
          </div>
          <div className="bodyInputEditProfile">
            <label className="labelInputEditProfile" htmlFor="firstName">
              imię:
            </label>
            <Field name="firstName">
              {(props) => {
                const { field, form, meta } = props;
                return (
                  <div>
                    <input
                      className="inputModalContaineFormInput"
                      id="firstName"
                      type="text"
                      {...field}
                    />
                    <div className="errorMessenge">
                      {meta.touched && meta.error}
                    </div>
                  </div>
                );
              }}
            </Field>
          </div>
          <div className="bodyInputEditProfile">
            <label className="labelInputEditProfile" htmlFor="lastName">
              nazwisko:
            </label>
            <Field name="lastName">
              {(props) => {
                const { field, form, meta } = props;
                return (
                  <div>
                    <input
                      className="inputModalContaineFormInput"
                      id="lastName"
                      type="text"
                      {...field}
                    />
                    <div className="errorMessenge">
                      {meta.touched && meta.error}
                    </div>
                  </div>
                );
              }}
            </Field>
          </div>
          <div className="bodyInputEditProfile">
            <label className="labelInputEditProfile" htmlFor="phone">
              tel:
            </label>
            <Field name="phone">
              {(props) => {
                const { field, form, meta } = props;
                return (
                  <div>
                    <input
                      className="inputModalContaineFormInput"
                      id="phone"
                      type="phone"
                      {...field}
                    />
                    <div className="errorMessenge">
                      {meta.touched && meta.error}
                    </div>
                  </div>
                );
              }}
            </Field>
          </div>
          <div className="bodyInputEditProfile">
            <label className="labelInputEditProfile" htmlFor="email">
              e-mail:
            </label>
            <Field name="email">
              {(props) => {
                const { field, form, meta } = props;
                return (
                  <div>
                    <input
                      className="inputModalContaineFormInput"
                      id="email"
                      type="email"
                      {...field}
                    />
                    <div className="errorMessenge">
                      {meta.touched && meta.error}
                    </div>
                  </div>
                );
              }}
            </Field>
          </div>
          <div className="bodyInputEditProfile">
            <label className="labelInputEditProfile" htmlFor="opinion">
              opinia:
            </label>
            <Field name="opinion">
              {(props) => {
                const { field, form, meta } = props;

                return (
                  <div>
                    <textarea
                      className="inputModalContaineFormInput textareaEditProfile"
                      id="opinion"
                      placeholder="Tu możesz wystawić opinię o stadninie. Wystawiając opinię WYRAŻSZ ZGODĘ na upublicznienie swojego opini wraz z zdjeciem profilu. Zawsze możesz edytować lub wykasować opinię. Usunięcie opini skutkuje usunięciem jej z miejsca publicznego strony. Jeśli nie jesteś pełnoletni o zgodę zapytaj osoby dorosłe ..."
                      type="text"
                      rows="10"
                      cols="38"
                      {...field}
                    />

                    <div className="errorMessenge">
                      {meta.touched && meta.error}
                    </div>
                  </div>
                );
              }}
            </Field>
          </div>

          <div className="btnBodyEditProfileSave">
            <button
              // disabled={!formik.dirty || formik.errors}
              disabled={
                !formik.dirty ||
                formik.errors.nick ||
                formik.errors.firstName ||
                formik.errors.lastName ||
                formik.errors.phone ||
                formik.errors.opinion ||
                formik.errors.email
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
  );
};

export default EditProfileFormik;
