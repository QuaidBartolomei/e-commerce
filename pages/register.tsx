import Container from '@mui/material/Container';
import RegisterForm from 'components/Forms/RegisterForm/RegisterForm';
import React from 'react';

const Registration = () => {
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
      <RegisterForm />
    </Container>
  );
};

export default Registration;
