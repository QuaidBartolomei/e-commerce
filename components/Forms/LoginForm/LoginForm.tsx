import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Form, Formik } from 'formik';
import React from 'react';
import EmailField from '../Fields/EmailField';
import SubmitButton, { SubmitStatus } from '../SubmitButton';
import axios from 'axios';
import routes from 'utils/routes';
import PasswordField from '../Fields/PasswordField';
import * as yup from 'yup';
import LinkButton from 'components/LinkButton';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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
    registerButton: {
      width: '100%',
      '&>*': {
        width: '100%',
      },
    },
    forgotPasswordLink: {
      width: '100%',
      textAlign: 'center',
    },
  })
);

export default function LoginForm() {
  const classes = useStyles();
  const [submitState, setSubmitState] = React.useState<SubmitStatus>('ready');

  const onSubmit = async (values: FormData) => {
    setSubmitState('submitting');
    const res = await axios.post(routes.api.login, values);
    if (res.status === 200) setSubmitState('done');
  };

 const GoogleLoginButton = ()=>(
<Button
onClick={()=>{
  firebase
}}
>
Google Sign In
</Button>
 ) 

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form className={classes.form}>
        <Typography variant='h5' className={classes.forgotPasswordLink}>
          Sign In
        </Typography>
        <GoogleLoginButton />
        <EmailField />
        <PasswordField />
        <SubmitButton status={submitState} />
        <Link href={routes.register} className={classes.forgotPasswordLink}>
          Forgot Password
        </Link>
        <Link href={routes.register} className={classes.registerButton}>
          <Button variant='contained' color='secondary'>
            Create New Account
          </Button>
        </Link>
      </Form>
    </Formik>
  );
}
