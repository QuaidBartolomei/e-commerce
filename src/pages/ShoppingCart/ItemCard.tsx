import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import CartItemData from 'interfaces/ShopItemData.interface';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {},
    paper: {
      padding: theme.spacing(1),
      margin: 'auto',
      maxWidth: 500,
    },
    image: {
      width: 128,
      height: 128,
    },
    img: {
      maxWidth: '100%',
      maxHeight: '100%',
    },
  })
);

const ItemCard = (props: {
  item: CartItemData;
  onRemove: () => void;
  onChangeQuantity: (quantity: number) => void;
}) => {
  const { item } = props;
  const { name, imageUrl } = item;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt={name} src={imageUrl} />
            </ButtonBase>
          </Grid>
          <Grid item xs>
            <Typography gutterBottom variant='subtitle1'>
              {name}
            </Typography>
            <Typography variant='body2' gutterBottom>
              Size: {item.size}
            </Typography>
            <Typography variant='body2' color='textSecondary'>
              Quantity: {item.quantity}
            </Typography>
            <Typography variant='subtitle1'>
              ${item.price.toFixed(2)}
            </Typography>
            <Typography
              variant='body2'
              style={{ cursor: 'pointer', textAlign: 'right' }}
            >
              Remove
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default ItemCard;
