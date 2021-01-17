import { Link } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import ButtonBase from '@material-ui/core/ButtonBase';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { routeToItemPage } from 'Router';
import { CartItem, useUserDispatch } from 'UserContext';
import QuantitySelect from './QuantitySelect';

const useStyles = makeStyles((theme) =>
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
    removeButton: {
      cursor: 'pointer',
      textAlign: 'right',
      float: 'right',
    },
  })
);

type Props = {
  itemData: CartItem;
};

const ShoppingCartItem = (props: Props) => {
  const classes = useStyles();
  const { itemData } = props;
  const { id, imageUrls, sizes, price, name, quantity } = itemData;
  const userDispatch = useUserDispatch();

  function onChangeQuantity() {
    userDispatch({ type: 'change_item_quantity', payload: { id, quantity } });
  }
  function onRemove() {
    userDispatch({
      type: 'remove_item',
      payload: id,
    });
  }

  const RemoveButton = () => (
    <Button
      className={classes.removeButton}
      color='secondary'
      onClick={onRemove}
    >
      Remove
    </Button>
  );

  const ThumbnailImage = () => (
    <ButtonBase className={classes.image} href={routeToItemPage(id)}>
      <img className={classes.img} alt={name} src={imageUrls[0]} />
    </ButtonBase>
  );
  const TitleLink = () => (
    <Link href={routeToItemPage(id)}>
      <Typography gutterBottom variant='subtitle1'>
        {name}
      </Typography>
    </Link>
  );

  return (
    <div>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ThumbnailImage />
          </Grid>
          <Grid item xs>
            <TitleLink />
            <Typography variant='body2' gutterBottom>
              Size: {sizes[0]}
            </Typography>
            <QuantitySelect quantity={quantity} onChange={onChangeQuantity} />
            <Typography variant='subtitle1'>${price.toFixed(2)}</Typography>
          </Grid>
        </Grid>
      </Paper>
      <RemoveButton />
    </div>
  );
};

export default ShoppingCartItem;
