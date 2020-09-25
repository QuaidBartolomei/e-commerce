import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container/Container';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { shopItems } from 'data/ShopItems';
import ShopItem from 'pages/Shop/ShopItem';
import React from 'react';
import { useParams } from 'react-router-dom';

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexDirection: 'column',
    },
    shopItemsContainer: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
  })
);

const ShopCategory = () => {
  let { id } = useParams<{ id: string }>();
  const classes = useStyles();
  let items = shopItems.filter((x) => x.category.toString() === id);
  return (
    <Container className={classes.container}>
      <Typography component='h2' variant='h3'>
        {id}
      </Typography>
      <Box className={classes.shopItemsContainer}>
        {items.map((item, key) => (
          <ShopItem key={key} {...item} />
        ))}
      </Box>
    </Container>
  );
};

export default ShopCategory;
