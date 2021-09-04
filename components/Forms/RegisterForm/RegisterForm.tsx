import Box from '@material-ui/core/Box';
import axios from 'axios';
import EmailField from 'components/Forms/Fields/EmailField';
import { Form, Formik } from 'formik';
import React from 'react';
import routes from 'utils/routes';
import * as yup from 'yup';
import SubmitButton, { SubmitStatus } from '../Buttons/SubmitButton';
import ConfirmPasswordField from '../Fields/ConfirmPasswordField';
import PasswordField from '../Fields/PasswordField';

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
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
});

export default function RegisterForm() {
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
      <Box
        component={Form}
        sx={{
          width: '100%',
          maxWidth: 600,
          display: 'flex',
          flexDirection: 'column',
          '>*': {
            my: 1,
          },
        }}
      >
        <EmailField />
        <PasswordField />
        <ConfirmPasswordField />
        <SubmitButton status={submitState} />
      </Box>
    </Formik>
  );
}
