import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export const RemenberPasswordFormik = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    onSubmit: (values) => {
      console.log('onSubmit :>> ', values);
      formik.resetForm();
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Ups... coś brakuje w adresie e-mail')
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
        className="btn btn-brown btn-capitalize btn-radius btn-rememberPassword"
      >
        wyslij
      </button>
    </form>
  );
};

export default RemenberPasswordFormik;
