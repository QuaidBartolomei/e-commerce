import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from 'components/Link';
import axios from 'axios';
import { GoogleSignInButton } from 'components/Forms/Buttons/GoogleSignInButton';
import { useUserState } from 'components/User/user.context';
import { Form, Formik } from 'formik';
import React from 'react';
import routes from 'utils/routes';
import { signout } from 'utils/user.util';
import * as yup from 'yup';
import SubmitButton, { SubmitStatus } from '../Buttons/SubmitButton';
import EmailField from '../Fields/EmailField';
import PasswordField from '../Fields/PasswordField';

interface LoginFormData {
  email: string;
  password: string;
}

const initialValues: LoginFormData = {
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
});

export default function LoginForm() {
  const [submitState, setSubmitState] = React.useState<SubmitStatus>('ready');
  const { isAuth } = useUserState();
  if (isAuth) return <Button onClick={signout}>Sign Out</Button>;

  const onSubmit = async (values: LoginFormData) => {
    setSubmitState('submitting');
    const res = await axios.post(routes.api.login, values);
    if (res.status === 200) setSubmitState('done');
  };

  const ForgotPasswordLink = () => (
    <Link
      href={routes.register}
      sx={{
        width: '100%',
        textAlign: 'center',
      }}
    >
      Forgot Password
    </Link>
  );

  const CreateNewAccountButton = () => (
    <Link
      href={routes.register}
      sx={{
        width: '100%',
        textAlign: 'center',
      }}
    >
      <Button variant='contained' color='secondary'>
        Create New Account
      </Button>
    </Link>
  );

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
        <Typography variant='h5'>Sign In</Typography>
        <EmailField />
        <PasswordField />
        <SubmitButton status={submitState} />
        <GoogleSignInButton />
        <ForgotPasswordLink />
        <CreateNewAccountButton />
      </Box>
    </Formik>
  );
}
