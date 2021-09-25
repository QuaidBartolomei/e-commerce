import Container from '@mui/material/Container';
import LoginForm from 'components/User/LoginForm';
import { selectIsAuth } from 'features/user/userSlice';
import { useRouter } from 'next/dist/client/router';
import React from 'react';
import { useAppSelector } from 'redux/hooks';

export default function LoginPage() {
  const isAuth = useAppSelector(selectIsAuth);
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
