import { Link, Typography } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Product } from 'interfaces/shopItem.interface';
import React, { useState } from 'react';
import { Routes } from 'Router';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      padding: theme.spacing(1),
      margin: theme.spacing(1),
      width: '240px',
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

const ShopItemCard = ({ item }: { item: Product }) => {
  const classes = useStyles();
  const [isHover, setIsHover] = useState(false);
  return (
    <Link href={`${Routes.ItemDetails}/${item.id}`}>
      <Paper
        className={classes.paper}
        elevation={isHover ? 5 : 1}
        onMouseOver={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <div
          className={classes.imageContainer}
          style={{
            backgroundImage: `url(${item.imageUrls[0]})`,
          }}
        />
        <Container className={classes.label}>
          <Typography>{item.name}</Typography>
          <Typography>{`$${item.price}`}</Typography>
        </Container>
      </Paper>
    </Link>
  );
};

export default ShopItemCard;
