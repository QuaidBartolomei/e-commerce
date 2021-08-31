import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme =>
  createStyles({
    container: {
      height: 100,
      width: '100%',
      backgroundColor: theme.palette.primary.dark,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
    },
  })
);

export type FooterProps = {
  copyright?: string;
} & React.HTMLProps<HTMLDivElement>;

export function Footer(props: FooterProps) {
  const { copyright, className = '', children, ...otherProps } = props;
  const classes = useStyles();
  const currentYear = React.useMemo(() => new Date().getFullYear(), []);

  return (
    <footer className={`${classes.container} ${className}`} {...otherProps}>
      {children}
      {copyright && (
        <Typography>
          &copy; Copyright {currentYear}, {copyright}
        </Typography>
      )}
    </footer>
  );
}
