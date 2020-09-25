import { Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box/Box';
import Container from '@material-ui/core/Container';
import Fade from '@material-ui/core/Fade/Fade';
import Paper from '@material-ui/core/Paper/Paper';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { ShopItemCategory } from 'interfaces/ShopItemData.interface';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Routes } from 'Router';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      padding: theme.spacing(1),
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      alignItems: 'center',
      borderRadius: 4,
      backgroundColor: theme.palette.grey[200],
    },
    image: {
      height: 120,
      width: 140,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      borderRadius: 4,
      marginBottom: theme.spacing(1),
    },
    label: {
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'center',
    },
  })
);

const CategoryMenuItem = (props: { name: string; image: string, category: ShopItemCategory }) => {
  const { name, image, category } = props;
  const classes = useStyles();
  const [isHover, setIsHover] = useState(false);
  return (
    <Link to={`${Routes.Category}/${category}`}>
      <Paper
        className={classes.container}
        elevation={isHover ? 2 : 1}
        onMouseOver={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <Box
          className={classes.image}
          style={{
            backgroundImage: `url(${image})`,
          }}
        />
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
