import Button from '@material-ui/core/Button/Button';
import createStyles from '@material-ui/core/styles/createStyles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import React from 'react';
import { signOut } from 'utils/firebase.utils';

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {},
  })
);

const SignOutButton = () => {
  return <Button onClick={signOut}>Sign Out</Button>;
};

export default SignOutButton;
