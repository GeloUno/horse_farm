import React from 'react';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import firebase from 'firebase';

import 'firebase/auth';
import 'firebase/firestore';
import { signUpEmailPassword } from '../../firebase';

const handleSubmit = (values, { setErrors, resetForm }) => {
  signUpEmailPassword(values)
    .then((user) => {
      // console.log('sign UP user :>> ', user);
    })
    .catch((error) => {
      setErrors({ [error.input]: [error.message] });
    });
};
const SignUpFormik = () => {
  const initialValues = { email: '', password: '', confirmPassword: '' };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Ups... coś z adresem e-mail jest nie tak')
      .max(50, ',maksymalna lczba znaków 50')
      .required('proszę podaj adres e-mail'),
    password: Yup.string()
      .min(8, 'minimalna liczba znaków to 8')
      .max(50, ',maksymalna lczba znaków 50')
      .required('proszę podaj hasło'),
    //   .oneOf(['{', '}'], 'nie dozwolony symbol'),
    //   .notOneOf(['{', '}'], 'nie dozwolony symbol')
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password', '')], 'hasła nie są identyczne')
      .required('proszę wprowadź ponownie hasło'),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {(formik) => (
        <Form>
          <label htmlFor="email">e-mail:</label>
          <Field name="email">
            {(props) => {
              const { field, form, meta } = props;

              return (
                <>
                  <input
                    className="inputModalContaineFormInput"
                    id="email"
                    type="email"
                    {...field}
                  />

                  <div className="errorMessenge">
                    {meta.touched && meta.error}
                  </div>
                </>
              );
            }}
          </Field>
          <label htmlFor="password">hasło:</label>
          <Field name="password">
            {(props) => {
              const { field, form, meta } = props;

              return (
                <>
                  <input
                    className="inputModalContaineFormInput"
                    id="password"
                    type="password"
                    {...field}
                  />

                  <div className="errorMessenge">
                    {meta.touched && meta.error}
                  </div>
                </>
              );
            }}
          </Field>
          <label htmlFor="confirmPassword">powtórz hasło:</label>
          <Field name="confirmPassword">
            {(props) => {
              const { field, form, meta } = props;

              return (
                <>
                  <input
                    className="inputModalContaineFormInput"
                    id="confirmPassword"
                    type="password"
                    {...field}
                  />

                  <div className="errorMessenge">
                    {meta.touched && meta.error}
                  </div>
                </>
              );
            }}
          </Field>
          <button
            disabled={
              (formik.touched.email && formik.errors.email) ||
              (formik.touched.password && formik.errors.password) ||
              (formik.touched.confirmPassword && formik.errors.confirmPassword)
            }
            type="submit"
            className="btn btn-brown btn-capitalize btn-radius btn-signup"
          >
            rejestracja
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default SignUpFormik;
