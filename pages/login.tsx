import Container from '@mui/material/Container';
import LoginForm from 'components/Forms/LoginForm/LoginForm';
import { useUserState } from 'components/User/user.context';
import { useRouter } from 'next/dist/client/router';
import React from 'react';

export default function LoginPage() {
  let userState = useUserState();
  const { isAuth } = userState;
  const router = useRouter();

  React.useEffect(() => {
    if (!isAuth) return;
    router.push('/');
  }, [isAuth, router]);

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        my: 2,
        '>*': {
          my: 4,
        },
      }}
    >
      <LoginForm />
    </Container>
  );
}
