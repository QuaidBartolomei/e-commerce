import { Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box/Box';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper/Paper';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { ShopItemData } from 'interfaces/ShopItemData.interface';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Routes } from 'Router';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      padding: theme.spacing(1),
      width: '240px'
    },
    imageContainer: {
      width: '100%',
      height: '240px',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
    },
    label: {
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'center',
      padding: theme.spacing(1, 0),
    },
  })
);

const ShopItem = (item: ShopItemData) => {
  const classes = useStyles();
  const [isHover, setIsHover] = useState(false);
  return (
    <Link to={`${Routes.Product}/1`}>
      <Paper
        className={classes.container}
        elevation={isHover ? 1 : 0}
        onMouseOver={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <Box
          className={classes.imageContainer}
          style={{
            backgroundImage: `url(${item.imageUrl})`,
          }}
        ></Box>
        <Container className={classes.label}>
          <Typography>{item.name}</Typography>
          <Typography>{`$${item.price}`}</Typography>
        </Container>
      </Paper>
    </Link>
  );
};

export default ShopItem;
