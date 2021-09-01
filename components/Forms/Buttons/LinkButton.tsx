import Button from '@material-ui/core/Button';
import Link, { LinkProps } from 'components/Link';
import React from 'react';

export default function LinkButton({ children, ref, ...linkProps }: LinkProps) {
  return (
    <Link {...linkProps}>
      <Button>{children}</Button>
    </Link>
  );
}
