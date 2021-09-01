import Container from '@material-ui/core/Container';
import { Theme } from '@material-ui/core/styles';
import createStyles from '@material-ui/styles/createStyles';
import makeStyles from '@material-ui/styles/makeStyles';
import LoginForm from 'components/Forms/LoginForm/LoginForm';
import { useUserState } from 'components/User/user.context';
import { useRouter } from 'next/dist/client/router';
import React from 'react';

const useStyles = makeStyles((theme: Theme) =>
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

export default function LoginPage() {
  const classes = useStyles();
  let userState = useUserState();
  const { isAuth } = userState;
  const router = useRouter();

  React.useEffect(() => {
    if (!isAuth) return;
    router.push('/');
  }, [isAuth, router]);

  return (
    <Container className={classes.container}>
      <LoginForm />
    </Container>
  );
}
