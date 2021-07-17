import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Form, Formik } from 'formik';
import React from 'react';
import EmailField from 'components/Forms/Fields/EmailField';
import SubmitButton, { SubmitStatus } from '../SubmitButton';
import axios from 'axios';
import routes from 'utils/routes';
import PasswordField from '../Fields/PasswordField';

import * as yup from 'yup';
import ConfirmPasswordField from '../Fields/ConfirmPasswordField';

interface FormData {
  email: string;
  password: string;
}

const initialValues: FormData = {
  email: '',
  password: '',
};

const validationSchema = yup.object({
  email: yup
    .string()
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string()
    .min(8, 'Password should be of minimum 50 characters length')
    .required('password is required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
});

const useStyles = makeStyles(theme =>
  createStyles({
    form: {
      width: '100%',
      maxWidth: 600,
      display: 'flex',
      flexDirection: 'column',
      '&>*': {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
      },
    },
  })
);

export default function RegisterForm() {
  const classes = useStyles();
  const [submitState, setSubmitState] = React.useState<SubmitStatus>('ready');

  const onSubmit = async (values: FormData) => {
    setSubmitState('submitting');
    const res = await axios.post(routes.api.login, values);
    if (res.status === 200) setSubmitState('done');
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form className={classes.form}>
        <EmailField />
        <PasswordField />
        <ConfirmPasswordField />
        <SubmitButton status={submitState} />
      </Form>
    </Formik>
  );
}
