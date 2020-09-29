import Box from '@material-ui/core/Box/Box';
import Link from '@material-ui/core/Link/Link';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Carousel from 'components/Carousel';
import {
  ShopItemCategory,
  ShopItemData,
} from 'interfaces/ShopItemData.interface';
import React from 'react';
import { Routes } from 'Router';

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      margin: theme.spacing(3,0),
    },
    header: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
    },
    categoryLink: {
      verticalAlign: 'baseline',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  })
);

const ShopItemCarousel = (props: {
  title: string;
  items: ShopItemData[];
  category: ShopItemCategory;
}) => {
  const classes = useStyles();
  const { title, items, category } = props;
  return (
    <Box className={classes.container}>
      <Box className={classes.header}>
        <Typography component='h2' variant='h4'>
          {title}
        </Typography>
        <Link
          href={`${Routes.Category}/${category}`}
          variant='h6'
          className={classes.categoryLink}
        >
          {'See all'}
          <NavigateNextIcon />
        </Link>
      </Box>
      <Carousel items={items} />
    </Box>
  );
};

export default ShopItemCarousel;
