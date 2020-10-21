import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import CartItemData from 'interfaces/ShopItemData.interface';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import { Container, Link } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { Routes } from 'Router';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {},
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

const ItemCard = (props: {
  item: CartItemData;
  onRemove: () => void;
  onChangeQuantity: (quantity: number) => void;
}) => {
  const classes = useStyles();
  const { item, onRemove } = props;
  const { name, imageUrl } = item;
  const [quantity, setQuantity] = React.useState(item.quantity);

  const history = useHistory();

  const QuantitySelect = (
    <FormControl className={classes.formControl}>
      <InputLabel id='size_label'>Quantity</InputLabel>
      <Select
        labelId='size_label'
        id='size'
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
          <MenuItem value={n} key={n}>
            {n}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );

  const RemoveButton = ()=> (
    <Button className={classes.removeButton} color='secondary' onClick={onRemove}>
      Remove
    </Button>
  );

  function goToItemPage() {
    history.push(Routes.Product + '/' + item.id);
  }

  return (
    <div>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image} onClick={goToItemPage}>
              <img className={classes.img} alt={name} src={imageUrl} />
            </ButtonBase>
          </Grid>
          <Grid item xs>
            <Link href={Routes.Product + '/' + item.id}>
              <Typography gutterBottom variant='subtitle1'>
                {name}
              </Typography>
            </Link>
            <Typography variant='body2' gutterBottom>
              Size: {item.size}
            </Typography>
            {QuantitySelect}
            <Typography variant='subtitle1'>
              ${item.price.toFixed(2)}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
      <RemoveButton />
    </div>
  );
};

export default ItemCard;
