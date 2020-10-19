import { Link, Typography } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { ReactComponent as Logo } from 'assets/logo.svg';
import React from 'react';
import { Routes } from 'Router';

const useStyles = makeStyles((theme) =>
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
      href={Routes.Homepage}
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
