import LinkButton from 'components/Forms/Buttons/LinkButton';
import React from 'react';
import routes from 'utils/routes';

export default function SignInButton() {
  return (
    <div>
      <LinkButton href={routes.login}>Sign In</LinkButton>
      or
      <LinkButton href={routes.register}>Register</LinkButton>
    </div>
  );
}
