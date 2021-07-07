import React from 'react';
import {
  Formik,
  Field,
  Form,
  FormikProps,
  FieldProps
} from 'formik';
import * as Yup from 'yup';
import { useStyles } from '../../utility/materialui';
import { TextField, Button } from '@material-ui/core/';

interface IResetPasswordProps {
  handleSubmit(values: IFormikResetPassword, { setErrors, resetForm }: { setErrors: Function; resetForm: Function }): void
}

export interface IFormikResetPassword {
  email: string
}

export const ResetPassword: React.FC<IResetPasswordProps> = ({ handleSubmit }) => {
  const classes = useStyles();

  const initialValues = {
    email: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Ups... czegoś brakuje w adresie e-mial')
      .max(50, ',maksymalna lczba znaków 50')
      .required('proszę podaj adres e-mail'),
  });

  return (
    <div
      className='inputModalForm'
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
                    data-testid='inputResetPasswordFormik'
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
              data-testid='buttonResetPasswordFormik'
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
