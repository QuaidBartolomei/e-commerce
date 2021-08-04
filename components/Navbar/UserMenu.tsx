import Container from '@material-ui/core/Container';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LoginForm from 'components/Forms/LoginForm/LoginForm';
import React from 'react';

const useStyles = makeStyles(theme =>
  createStyles({
    UserDrawerContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: theme.spacing(2),
    },
    title: {},
  })
);

export default function UserMenu() {
  const classes = useStyles();
  const [showNavDrawer, setShowNavDrawer] = React.useState(false);

  return (
    <React.Fragment>
      <IconButton
        edge='start'
        color='inherit'
        aria-label='user-menu'
        onClick={() => setShowNavDrawer(true)}
      >
        <AccountCircleIcon />
      </IconButton>
      <Drawer
        anchor='right'
        open={showNavDrawer}
        onClose={() => setShowNavDrawer(false)}
      >
        <Container className={classes.UserDrawerContainer}>
          <LoginForm />
        </Container>
      </Drawer>
    </React.Fragment>
  );
}
