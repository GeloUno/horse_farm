import React from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import 'firebase/auth';
import 'firebase/firestore';
import { useDispatch } from 'react-redux';
import { sendEmailToResetPasswordAction } from '../../redux/actions/userActions';

export const ResetPassword = ({ setResetPasswordModalShow }) => {
  const dispatch = useDispatch();

  const initialValues = {
    email: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Ups... coś brakuje w adresie e-mail')
      .max(50, ',maksymalna lczba znaków 50')
      .required('proszę podać adres e-mail'),
  });

  const handleSubmit = (values, { setErrors, resetForm }) => {
    dispatch(
      sendEmailToResetPasswordAction(
        values,
        setResetPasswordModalShow,
        setErrors,
        resetForm
      )
    );
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {(formik) => (
        <Form>
          <label htmlFor="email">email:</label>
          <Field name="email">
            {(props) => {
              const { field, form, meta } = props;
              return (
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="inputModalContaineFormInput"
                  // onChange={(e) => {
                  //   handleChange(e);
                  // }}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
              );
            }}
          </Field>
          <div className="errorMessenge">{formik.errors.email}</div>

          <button
            // onClick={() => {
            //   handleSubmit();
            // }}
            type="submit"
            disabled={
              // formik.values.email === '' ||
              formik.touched.email && formik.errors.email
            }
            className="btn btn-brown btn-capitalize btn-radius btn-resetPassword"
          >
            wyslij
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ResetPassword;
