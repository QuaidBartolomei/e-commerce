import ButtonBase from '@material-ui/core/ButtonBase';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { useUserDispatch } from 'components/User/user.context';
import React from 'react';
import QuantitySelect from '../QuantitySelect';
import { CartItem } from './CartItem.interface';
import RemoveButton from './RemoveButton';

const useStyles = makeStyles(theme =>
  createStyles({
    paper: {
      padding: theme.spacing(1),
      margin: 'auto',
    },
    image: {
      width: 128,
      height: 128,
    },
    img: {
      maxWidth: '100%',
      maxHeight: '100%',
    },
    formControl: {
      width: 'fit-content',
      minWidth: 120,
    },
  })
);

interface Props {
  item: CartItem;
}

export default function ShoppingCartItem({ item }: Props) {
  const classes = useStyles();
  const userDispatch = useUserDispatch();

  const { name, price, imageUrls, size, color, quantity, id } = item;

  function onChangeQuantity() {
    userDispatch({ type: 'change_item_quantity', payload: { id, quantity } });
  }

  const itemLink = `items/${id}`;

  const ThumbnailImage = () => (
    <ButtonBase className={classes.image} href={itemLink}>
      <img className={classes.img} alt={name} src={imageUrls[0]} />
    </ButtonBase>
  );
  const TitleLink = () => (
    <Link href={itemLink}>
      <Typography gutterBottom variant='subtitle1'>
        {name} ({size}, {color})
      </Typography>
    </Link>
  );

  return (
    <>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ThumbnailImage />
          </Grid>
          <Grid item xs>
            <TitleLink />
            <Typography variant='subtitle1'>${price.toFixed(2)}</Typography>
            <QuantitySelect quantity={quantity} onChange={onChangeQuantity} />
          </Grid>
        </Grid>
      </Paper>
      <RemoveButton />
    </>
  );
}

