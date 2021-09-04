import Button from '@mui/material/Button';
import Link, { LinkProps } from 'components/Link';
import React from 'react';

export default function LinkButton({ children, ref, ...linkProps }: LinkProps) {
  return (
    <Link {...linkProps}>
      <Button>{children}</Button>
    </Link>
  );
}
