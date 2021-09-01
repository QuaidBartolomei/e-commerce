import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import createStyles from '@material-ui/styles/createStyles';
import makeStyles from '@material-ui/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { Product, ShopItemCategory } from 'interfaces/shopItem.interface';
import React from 'react';
import ShopItemCard from 'components/ShopItem/ShopItemCard';
import routes from 'utils/routes';

// Horizontal scrolling list of shop items

import { Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
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

interface Props {
  title: string;
  items: Product[];
  category: ShopItemCategory;
}

export default function ShopItemCarousel(props: Props) {
  const { title, items, category } = props;

  const classes = useStyles();

  if (items.length === 0) return <div></div>;

  return (
    <Box className={classes.container}>
      <Box className={classes.header}>
        <Typography component='h2' variant='h4' className={classes.title}>
          {title}
        </Typography>
        <Link
          href={routes.category(category)}
          variant='h6'
          className={classes.categoryLink}
        >
          {'See all'}
          <NavigateNextIcon />
        </Link>
      </Box>
      <Box className={classes.carousel}>
        {items.map((item, key) => (
          <ShopItemCard key={key} {...{ item }} />
        ))}
      </Box>
    </Box>
  );
}
