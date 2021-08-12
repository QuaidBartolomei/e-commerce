import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import routes from 'utils/routes';
import LinkButton from 'components/Forms/Buttons/LinkButton';

const useStyles = makeStyles(theme =>
  createStyles({
    container: {},
  })
);

export default function SignInButton() {
  const classes = useStyles();

  return (
    <div>
      <LinkButton href={routes.login}>Sign In</LinkButton>
      or
      <LinkButton href={routes.register}>Register</LinkButton>
    </div>
  );
}
