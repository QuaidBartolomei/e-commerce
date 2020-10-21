import { Link } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import ButtonBase from '@material-ui/core/ButtonBase';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import Select from '@material-ui/core/Select';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { CartItemData, ShopItemData } from 'interfaces/ShopItemData.interface';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { Routes } from 'Router';
import { getItemData } from 'utils/db.utils';

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
  id: string;
  quantity: number;
  onRemove: () => void;
  onChangeQuantity: (quantity: number) => void;
}) => {
  const classes = useStyles();
  const { id, onRemove } = props;
  const [itemData, setItemData] = React.useState<ShopItemData | undefined>(
    undefined
  );
  const [quantity, setQuantity] = React.useState(props.quantity);

  const history = useHistory();

  React.useEffect(() => {
    getItemData(id).then(setItemData);
  }, [id]);

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

  const RemoveButton = () => (
    <Button
      className={classes.removeButton}
      color='secondary'
      onClick={onRemove}
    >
      Remove
    </Button>
  );

  function goToItemPage() {
    history.push(Routes.Product + '/' + id);
  }

  const ItemCard = ({
    name,
    id,
    imageUrl,
    size,
    price,
    quantity,
  }: ShopItemData & { quantity: number }) => (
    <div>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image} onClick={goToItemPage}>
              <img className={classes.img} alt={name} src={imageUrl} />
            </ButtonBase>
          </Grid>
          <Grid item xs>
            <Link href={Routes.Product + '/' + id}>
              <Typography gutterBottom variant='subtitle1'>
                {name}
              </Typography>
            </Link>
            <Typography variant='body2' gutterBottom>
              Size: {size}
            </Typography>
            {QuantitySelect}
            <Typography variant='subtitle1'>${price.toFixed(2)}</Typography>
          </Grid>
        </Grid>
      </Paper>
      <RemoveButton />
    </div>
  );

  if (!itemData) return <div></div>;
  return <ItemCard {...itemData} quantity={quantity} />;
};

export default ItemCard;
