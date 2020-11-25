import React from 'react';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

const LogInFormik = () => {
  const initialValues = { email: '', password: '' };

  const validationSchema = Yup.object({
    password: Yup.string()
      .min(10, 'minimalna liczba znaków to 10')
      .required('proszę podaj hasło'),
    //   .oneOf(['{', '}'], 'nie dozwolony symbol'),
    //   .notOneOf(['{', '}'], 'nie dozwolony symbol')
    email: Yup.string()
      .email('Ups... czegoś beakuje w adresie e-mial')
      .required('proszę podaj adres e-mail'),
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
                    type="text"
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
              //   console.log('Field props :>> ', formik);
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
