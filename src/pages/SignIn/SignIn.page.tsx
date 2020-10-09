import Grid from '@material-ui/core/Grid/Grid';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { Routes } from 'Router';
import { useUserState } from 'UserContext';
import RegisterForm from './RegisterForm';
import SignInForm from './SignInForm';

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      padding: theme.spacing(8),
    },
    grid: {
      padding: theme.spacing(4, 1),
      width: '100%',
    },
    gridItem: {},
  })
);
const SignInPage = () => {
  const classes = useStyles();
  let state = useUserState();
  let history = useHistory();

  React.useEffect(() => {
    if (!state._id) return;
    history.push(Routes.Homepage);
  }, [state._id, history]);

  return (
    <Grid container spacing={4} className={classes.grid}>
      <Grid item xs={12} md={6}>
        <SignInForm />
      </Grid>
      <Grid item xs={12} md={6}>
        <RegisterForm />
      </Grid>
    </Grid>
  );
};

export default SignInPage;
