import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import LoginForm from './Forms/LoginForm/LoginForm';

const useStyles = makeStyles(theme =>
  createStyles({
    UserDrawerContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {},
  })
);

export default function UserDrawer() {
  const classes = useStyles();
  return (
    <div className={classes.UserDrawerContainer}>
      <div className={classes.title}>
        <Typography variant='h4'>Sign In</Typography>
      </div>
      <LoginForm />
    </div>
  );
}
