import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const useStyles = makeStyles(theme =>
  createStyles({
    container: {},
  })
);

export default function SignInButton() {
  const classes = useStyles();

  function signIn() {}

  return (
    <Button variant='contained' className={classes.container} onClick={signIn}>
      Sign In
    </Button>
  );
}
