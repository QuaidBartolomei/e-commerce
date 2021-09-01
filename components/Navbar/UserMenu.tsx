import Container from '@material-ui/core/Container';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import createStyles from '@material-ui/styles/createStyles';
import makeStyles from '@material-ui/styles/makeStyles';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LoginForm from 'components/Forms/LoginForm/LoginForm';
import React from 'react';

import { Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    UserDrawerContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: theme.spacing(2),
    },
  })
);

export default function UserMenu() {
  const classes = useStyles();
  const [showNavDrawer, setShowNavDrawer] = React.useState(false);

  function UserButton() {
    return (
      <IconButton
        edge='start'
        color='inherit'
        aria-label='user-menu'
        onClick={() => setShowNavDrawer(true)}
        size="large">
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
        <Container className={classes.UserDrawerContainer}>
          <LoginForm />
        </Container>
      </Drawer>
    </React.Fragment>
  );
}
