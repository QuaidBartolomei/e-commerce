import Button, { ButtonProps } from '@mui/material/Button';
import React from 'react';
import { signInWithGoogle } from 'utils/firebase.utils';

export type GoogleSignInButtonProps = {
  // props
} & ButtonProps;

export default function GoogleSignInButton({
  children = 'Sign In With Google',
  ...buttonProps
}: GoogleSignInButtonProps) {
  return (
    <Button
      variant='contained'
      onClick={() => {
        signInWithGoogle().catch(error => {});
      }}
      {...buttonProps}
    >
      {children}
    </Button>
  );
}
