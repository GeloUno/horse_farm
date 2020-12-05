import React from 'react';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';
import { signInEmailPassword } from '../../firebase';
const LogInFormik = () => {
  const initialValues = { email: '', password: '' };

  const validationSchema = Yup.object({
    password: Yup.string()
      .min(8, 'minimalna liczba znaków to 8')
      .max(256, ',maksymalna lczba znaków 256')
      .required('proszę podaj hasło'),
    //   .oneOf(['{', '}'], 'nie dozwolony symbol'),
    //   .notOneOf(['{', '}'], 'nie dozwolony symbol')
    email: Yup.string()
      .email('Ups... czegoś beakuje w adresie e-mial')
      .max(50, ',maksymalna lczba znaków 50')
      .required('proszę podaj adres e-mail'),
  });

  const handleSubmit = (values, { setErrors, resetForm }) => {
    signInEmailPassword(values)
      .then((data) => {
        //   console.log('data user :>> ', data);
        resetForm();
      })
      .catch((error) => {
        //   console.warn('data error  :>> ', error);
        setErrors({ [error.input]: [error.message] });
      });
  };

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
              //   console.log('Field props :>> ', props);
              return (
                <>
                  <input
                    className="inputModalContaineFormInput"
                    type="email"
                    id="email"
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
              // console.log('Field props :>> ', formik, form, meta);
              return (
                <>
                  <input
                    className="inputModalContaineFormInput"
                    type="password"
                    id="password"
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
              // formik.values.email === '' ||
              (formik.touched.email && formik.errors.email) ||
              (formik.touched.password && formik.errors.password)
            }
            type="submit"
            className="btn btn-green btn-capitalize btn-radius btn-login"
          >
            zaloguj
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default LogInFormik;
