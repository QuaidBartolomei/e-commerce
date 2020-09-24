import { Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box/Box';
import Container from '@material-ui/core/Container';
import Fade from '@material-ui/core/Fade/Fade';
import Paper from '@material-ui/core/Paper/Paper';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Routes } from 'Router';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      padding: theme.spacing(1),
      height: 180,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      alignItems: 'center',
      backgroundColor: 'transparent',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      borderRadius: 4,
    },
    label: {
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'center',
      padding: theme.spacing(1, 0),
      backgroundColor: theme.palette.background.default,
      width: '60%',
      border: '1px black solid',
      borderRadius: 4,
    },
  })
);

const CategoryMenuItem = (props: { name: string; image: string }) => {
  const { name, image } = props;
  const classes = useStyles();
  const [isHover, setIsHover] = useState(false);
  return (
    <Link to={`${Routes.Product}/1`}>
      <Paper
        className={classes.container}
        elevation={isHover ? 2 : 1}
        onMouseOver={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <Container
          className={classes.label}
          style={{
            opacity: isHover ? 0.9 : 0.7,
          }}
        >
          <Typography component='h3' variant='h5'>
            {name}
          </Typography>
        </Container>
      </Paper>
    </Link>
  );
};

export default CategoryMenuItem;
