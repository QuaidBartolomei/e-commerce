import { createStyles, makeStyles } from '@material-ui/core/styles';
import Logo from './Logo';
import React from 'react';
import routes from 'utils/routes';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(theme =>
  createStyles({
    toolbarTitle: {
      flex: 1,
      textAlign: 'left',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      '&>*': {
        paddingLeft: theme.spacing(1),
      },
    },
    logo: {
      height: 32,
      width: 32,
    },
  })
);

const NavbarTitle = ({ title }: { title?: string }) => {
  const classes = useStyles();
  title = title || 'Clothing';
  const CompanyLogo = () => (
    <Logo className={classes.logo} stroke='white' strokeWidth={2} />
  );

  return (
    <Link
      href={routes.index}
      color='inherit'
      className={classes.toolbarTitle}
      underline='none'
    >
      <CompanyLogo />
      <Typography component='h1' variant='h5' align='center' noWrap>
        {title}
      </Typography>
    </Link>
  );
};

export default NavbarTitle;
