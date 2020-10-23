import Box from '@material-ui/core/Box/Box';
import Link from '@material-ui/core/Link/Link';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import {
  ShopItemCategory,
  ShopItemData
} from 'interfaces/shop-item.interface';
import React from 'react';
import { Routes } from 'Router';
import ShopItem from './ShopItem';

// Horizontal scrolling list of shop items

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      margin: theme.spacing(1, 0),
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
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    title: {
      marginLeft: theme.spacing(1),
    },
    carousel: {
      overflowX: 'scroll',
      display: 'flex',
      flexDirection: 'row',
      marginRight: theme.spacing(1),
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
  if (items.length === 0) return <div></div>;
  return (
    <Box className={classes.container}>
      <Box className={classes.header}>
        <Typography component='h2' variant='h4' className={classes.title}>
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
      <Box className={classes.carousel}>
        {items.map((item, key) => (
          <ShopItem key={key} {...{ item }} />
        ))}
      </Box>
    </Box>
  );
};

export default ShopItemCarousel;
