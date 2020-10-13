import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { Routes } from 'Router';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) =>
  createStyles({
    toolbarTitle: {
      flex: 1,
    },
  })
);

const NavbarTitle = ({ title }: { title: string }) => {
  const classes = useStyles();
  return (
    <Typography
      component='h1'
      variant='h5'
      color='inherit'
      align='center'
      noWrap
      className={classes.toolbarTitle}
    >
      <Link to={Routes.Homepage}>{title}</Link>
    </Typography>
  );
};

export default NavbarTitle;
