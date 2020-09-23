import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container/Container';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { ShopItemData } from 'interfaces/ShopItemData.interface';
import ShopItem from 'pages/Shop/ShopItem';
import React from 'react';
import { hatData } from 'data/ShopItems';

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexDirection: 'column',
    },
    shopItemsContainer: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap'
    },
  })
);

const ShopCategory = ({ items }: { items: ShopItemData[] }) => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Typography component='h2' variant='h3'>
        Hats
      </Typography>
      <Box className={classes.shopItemsContainer}>
        {hatData.map((item, key) => (
          <ShopItem key={key} {...item} />
        ))}
      </Box>
    </Container>
  );
};

export default ShopCategory;
