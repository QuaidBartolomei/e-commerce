import Link from '@material-ui/core/Link';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import SignInForm from 'components/SignInForm';
import { useUserState } from 'components/User/user.context';
import { useRouter } from 'next/dist/client/router';
import React from 'react';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(theme =>
  createStyles({
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      margin: theme.spacing(2, 0),
      '&>*': {
        margin: theme.spacing(4, 0),
      },
    },
  })
);
const SignInPage = () => {
  const classes = useStyles();
  let userState = useUserState();
  let history = useHistory();
  const { isAuth } = userState;
  const router = useRouter();

  React.useEffect(() => {
    if (!isAuth) return;
    router.push('/');
  }, [isAuth, history]);

  return (
    <div className={classes.container}>
      <SignInForm />
      <Link href='/register'>New user? Register Here</Link>
    </div>
  );
};

export default SignInPage;
