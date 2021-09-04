import Container from '@mui/material/Container';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LoginForm from 'components/Forms/LoginForm/LoginForm';
import React from 'react';

export default function UserMenu() {
  const [showNavDrawer, setShowNavDrawer] = React.useState(false);

  function UserButton() {
    return (
      <IconButton
        edge='start'
        color='inherit'
        aria-label='user-menu'
        onClick={() => setShowNavDrawer(true)}
        size='large'
      >
        <AccountCircleIcon />
      </IconButton>
    );
  }

  return (
    <React.Fragment>
      <UserButton />
      <Drawer
        anchor='right'
        open={showNavDrawer}
        onClose={() => setShowNavDrawer(false)}
        transitionDuration={{ appear: 500, enter: 500, exit: 500 }}
      >
        <Container
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            pt: 2,
          }}
        >
          <LoginForm />
        </Container>
      </Drawer>
    </React.Fragment>
  );
}
