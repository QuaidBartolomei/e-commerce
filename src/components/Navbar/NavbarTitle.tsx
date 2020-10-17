import { Typography } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { ReactComponent as Logo } from 'assets/logo.svg';
import React from 'react';
import { Link } from 'react-router-dom';
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
    <Typography
      component='h1'
      variant='h5'
      color='inherit'
      align='center'
      noWrap
      className={classes.toolbarTitle}
    >
      <CompanyLogo />
      <Link to={Routes.Homepage}>{title}</Link>
    </Typography>
  );
};

export default NavbarTitle;
