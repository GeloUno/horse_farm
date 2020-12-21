import React from 'react';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import 'firebase/auth';
import 'firebase/firestore';
import { useDispatch } from 'react-redux';
import { userSignInByEmailAction } from '../../redux/actions/userActions';

const LogInFormik = () => {
  const dispatch = useDispatch();
  const initialValues = { email: '', password: '' };

  const validationSchema = Yup.object({
    password: Yup.string()
      .min(8, 'minimalna liczba znaków to 8')
      .max(256, ',maksymalna lczba znaków 256')
      .required('proszę podaj hasło'),
    email: Yup.string()
      .email('Ups... czegoś beakuje w adresie e-mial')
      .max(50, ',maksymalna lczba znaków 50')
      .required('proszę podaj adres e-mail'),
  });

  const handleSubmit = (values, { setErrors, resetForm }) => {
    dispatch(userSignInByEmailAction(values, setErrors, resetForm));
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
