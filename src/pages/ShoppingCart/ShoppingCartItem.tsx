import { Link } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import ButtonBase from '@material-ui/core/ButtonBase';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { ShopItemData } from 'interfaces/shop-item.interface';
import React from 'react';
import { routeToItemPage } from 'Router';
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

const ShoppingCartItem = (props: {
  itemData: ShopItemData;
  quantity: number;
  onRemove: () => void;
  onChangeQuantity: (quantity: number) => void;
}) => {
  const classes = useStyles();
  const { onRemove } = props;
  const [quantity, setQuantity] = React.useState(props.quantity);
  const { id, imageUrls, sizes, price, name } = props.itemData;

  const RemoveButton = () => (
    <Button
      className={classes.removeButton}
      color='secondary'
      onClick={onRemove}
    >
      Remove
    </Button>
  );

  return (
    <div>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image} href={routeToItemPage(id)}>
              <img className={classes.img} alt={name} src={imageUrls[0]} />
            </ButtonBase>
          </Grid>
          <Grid item xs>
            <Link href={routeToItemPage(id)}>
              <Typography gutterBottom variant='subtitle1'>
                {name}
              </Typography>
            </Link>
            <Typography variant='body2' gutterBottom>
              Size: {sizes[0]}
            </Typography>
            <QuantitySelect quantity={quantity} onChange={setQuantity} />
            <Typography variant='subtitle1'>${price.toFixed(2)}</Typography>
          </Grid>
        </Grid>
      </Paper>
      <RemoveButton />
    </div>
  );
};

export default ShoppingCartItem;
