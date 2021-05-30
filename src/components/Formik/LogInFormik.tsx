import React from 'react';
import { Field, Form, Formik, FormikProps, FieldProps } from 'formik';
import * as Yup from 'yup';
import 'firebase/auth';
import 'firebase/firestore';
import { useDispatch } from 'react-redux';
import { userSignInByEmailAction } from '../../redux/actions/userActions';
import { TextField, Button } from '@material-ui/core/';
import { useStyles } from '../../utility/materialui';
// import { Button } from '@material-ui/core/';

interface LogInFormikProps {
  setIsTryLoginBySocialMedia(fn: Function): void
}

interface IFormikLogin {
  email: string,
  password: string,
}

const LogInFormik: React.FC<LogInFormikProps> = ({ setIsTryLoginBySocialMedia }) => {
  const classes = useStyles();
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

  const handleSubmit = (values: IFormikLogin, { setErrors, resetForm }: { setErrors: Function, resetForm: Function }) => {
    setIsTryLoginBySocialMedia(() => { return false })
    dispatch(userSignInByEmailAction(values, setErrors, resetForm));
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {(formik: FormikProps<IFormikLogin>) => (
        <Form className={classes.root} noValidate autoComplete="off">
          <Field name="email">
            {(props: FieldProps<IFormikLogin>) => {
              const { field, form, meta } = props;
              return (
                <>
                  <TextField
                    error={!!meta.touched && !!meta.error}
                    helperText={meta.touched && meta.error}
                    color='primary'
                    label='email'
                    variant='outlined'
                    data-testid='inputLoginFormEmail'
                    type="email"
                    id="email"
                    {...field}
                  />
                </>
              );
            }}
          </Field>
          <Field name="password">
            {(props: FieldProps<IFormikLogin>) => {
              const { field, form, meta } = props;
              return (
                <>

                  <TextField
                    error={!!meta.touched && !!meta.error}
                    helperText={meta.touched && meta.error}
                    // size="medium"
                    color='primary'
                    label="hasło"
                    variant='outlined'
                    data-testid='inputLoginFormPassword'

                    type="password"
                    id="password"
                    {...field}
                  />

                </>
              );
            }}
          </Field>
          <Button
            variant='contained'
            color='primary'
            size='large'
            data-testid='inputLoginFormButton'
            disabled={
              (!!formik.touched.email && !!formik.errors.email) ||
              (!!formik.touched.password && !!formik.errors.password)
            }
            type="submit"
          >
            zaloguj
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default LogInFormik;
