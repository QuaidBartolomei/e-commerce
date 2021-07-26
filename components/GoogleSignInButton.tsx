import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import routes from 'utils/routes';

const useStyles = makeStyles(theme =>
  createStyles({
    GoogleSignInButtonContainer: {
      // styles here
    },
  })
);

export default function GoogleSignInButton() {
  const classes = useStyles();

  function onClick() {
    // show google sign in
  }

  return (
    <Button variant='contained' onClick={onClick} color='secondary'>
      Create New Account
    </Button>
  );
}
