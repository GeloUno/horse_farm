import {
  Field,
  Form,
  Formik,
  FormikProps,
  FieldProps
} from 'formik';
import * as Yup from 'yup';
import { useStyles } from '../../utility/materialui';
import { Button } from '@material-ui/core';
import { TextField } from '@material-ui/core';


export interface IFormikSingUp {
  email: string,
  password: string,
  confirmPassword: string,
}

interface ISignUpFormikProps {
  handleSubmit(values: IFormikSingUp, { setErrors, resetForm }: { setErrors: Function, resetForm: Function }): void
}

const SignUpFormik: React.FC<ISignUpFormikProps> = ({ handleSubmit }) => {
  const initialValues = { email: '', password: '', confirmPassword: '' };

  const classes = useStyles();

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Ups... coś z adresem e-mail jest nie tak')
      .max(50, ',maksymalna lczba znaków 50')
      .required('proszę podaj adres e-mail'),
    password: Yup.string()
      .min(8, 'minimalna liczba znaków to 8')
      .max(50, ',maksymalna lczba znaków 50')
      .required('proszę podaj hasło'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password')], 'hasła nie są identyczne')
      .required('proszę wprowadź ponownie hasło'),
  });

  return (
    <div className='inputModalForm'
      data-testid='signupInputForm'
    >
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {(formik: FormikProps<IFormikSingUp>) => (
          <Form className={classes.root} noValidate autoComplete="off">
            <Field name="email">
              {(props: FieldProps<IFormikSingUp>) => {
                const { field, form, meta } = props;

                return (
                  <>
                    <TextField
                      error={!!meta.touched && !!meta.error}
                      helperText={meta.touched && meta.error}
                      data-testid='inputEmailSignupForm'
                      color='primary'
                      label='email'
                      variant='outlined'
                      id="email"
                      type="email"
                      {...field}
                    />
                  </>
                );
              }}
            </Field>
            <Field name="password">
              {(props: FieldProps<IFormikSingUp>) => {
                const { field, form, meta } = props;

                return (
                  <>
                    <TextField
                      error={!!meta.touched && !!meta.error}
                      helperText={meta.touched && meta.error}
                      data-testid='inputPasswordSignupForm'
                      color='primary'
                      label='hasło'
                      variant='outlined'
                      id="password"
                      type="password"
                      {...field}
                    />
                  </>
                );
              }}
            </Field>
            <Field name="confirmPassword">
              {(props: FieldProps<IFormikSingUp>) => {
                const { field, form, meta } = props;

                return (
                  <>
                    <TextField
                      error={!!meta.touched && !!meta.error}
                      helperText={meta.touched && meta.error}
                      data-testid='inputConfirmPasswordSignupForm'
                      color='primary'
                      label='powtórz hasło'
                      variant='outlined'
                      id="confirmPassword"
                      type="password"
                      {...field}
                    />
                  </>
                );
              }}
            </Field>
            <Button
              data-testid='buttonSignupForm'
              variant='contained'
              color='secondary'
              size='large'
              disabled={
                (!!formik.touched.email && !!formik.errors.email) ||
                (!!formik.touched.password && !!formik.errors.password) ||
                (!!formik.touched.confirmPassword && !!formik.errors.confirmPassword)
              }
              type="submit"
            >
              rejestracja
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignUpFormik;
