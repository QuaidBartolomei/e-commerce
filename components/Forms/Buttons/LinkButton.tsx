import React from 'react';
import makeStyles from '@material-ui/styles/makeStyles';
import createStyles from '@material-ui/styles/createStyles';
import Link, { LinkProps } from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme =>
  createStyles({
    LinkButtonContainer: {
      // styles here
    },
  })
);

export default function LinkButton({ children, ...linkProps }: LinkProps) {
  const classes = useStyles();

  return (
    <Link {...linkProps}>
      <Button>{children}</Button>
    </Link>
  );
}
