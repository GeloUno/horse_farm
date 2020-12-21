import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import 'firebase/auth';
import 'firebase/firestore';
import { sendEmailToResetPassword } from '../../firebase';

export const ResetPassword = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    onSubmit: (values, { setErrors, resetForm }) => {
      //  console.log('values', values);
      sendEmailToResetPassword(values.email)
        .then((data) => {
          //    console.log('sendEmailToResetPassword data :>> ', data);
        })
        .catch((error) => {
          //  console.log('sendEmailToResetPassword error :>> ', error);
          setErrors({ [error.input]: [error.message] });
        });
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Ups... coś brakuje w adresie e-mail')
        .max(50, ',maksymalna lczba znaków 50')
        .required('proszę podać adres e-mail'),
    }),
  });
  // const handleSubmit = () => {
  //   console.log('formik :>> ', formik);
  // };
  // const handleChange = (e) => {
  //   formik.setValues({ email: e.target.value });
  //   console.log('formik :>> ', formik);
  // };

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="email">email:</label>
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

      <div className="errorMessenge">
        {formik.errors.email}
        {''}
      </div>

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
    </form>
  );
};

export default ResetPassword;
