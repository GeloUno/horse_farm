import React from 'react';
import {
  Formik,
  Field,
  Form,
  FormikProps,
  FieldProps
} from 'formik';
import * as Yup from 'yup';
// import 'firebase/auth';
// import 'firebase/firestore';
import { useDispatch } from 'react-redux';
import { sendEmailToResetPasswordAction } from '../../redux/actions/userActions';
import { useStyles } from '../../utility/materialui';
import { TextField, Button } from '@material-ui/core/';

interface IResetPasswordProps {
  setResetPasswordModalShow(): void
}

interface IFormikResetPassword {
  email: string
}

export const ResetPassword: React.FC<IResetPasswordProps> = ({ setResetPasswordModalShow }) => {
  const classes = useStyles();
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

  const handleSubmit = (values: IFormikResetPassword, { setErrors, resetForm }: { setErrors: Function, resetForm: Function }) => {
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
    <div
      data-testid='resetPasswordFormik'
    >
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {(formik: FormikProps<IFormikResetPassword>) => (
          <Form className={classes.root}>
            <Field name="email">
              {(props: FieldProps<IFormikResetPassword>) => {
                const { field, form, meta } = props;
                return (

                  <TextField
                    error={!!formik.errors.email}
                    helperText={formik.errors.email}
                    label='email'
                    variant='outlined'
                    color='primary'
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                  />
                );
              }}
            </Field>
            <Button
              size='large'
              variant='contained'
              color='secondary'
              type="submit"
              disabled={
                !!formik.touched.email && !!formik.errors.email
              }
            >
              wyslij
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ResetPassword;
