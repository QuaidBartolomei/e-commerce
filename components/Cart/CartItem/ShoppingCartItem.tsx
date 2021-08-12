import ButtonBase from '@material-ui/core/ButtonBase';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { useUserDispatch } from 'components/User/user.context';
import { CartItemData } from 'interfaces/shopItem.interface';
import React from 'react';
import { useQuery } from 'react-query';
import routes from 'utils/routes';
import { formatItemPrice, getShopItemById } from 'utils/shopItem.util';
import QuantitySelect from '../../Forms/Fields/QuantitySelect';
import RemoveButton from '../../Forms/Buttons/RemoveButton';

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
  item: CartItemData;
}

export default function ShoppingCartItem({ item }: Props) {
  const { size, color, quantity, id } = item;
  const itemLink = routes.item(id);
  const classes = useStyles();
  const userDispatch = useUserDispatch();

  const { isLoading, isError, data } = useQuery('cartItemData', () =>
    getShopItemById(id)
  );

  function onChangeQuantity(newQuantity: number) {
    userDispatch({
      type: 'change_item_quantity',
      payload: { id, quantity: newQuantity },
    });
  }

  if (isLoading || !data) return <div>'Loading...'</div>;
  if (isError) return <div>'An error has occurred: '</div>;

  const { name, imageUrls, price } = data;

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
            <Typography variant='subtitle1'>{formatItemPrice(data)}</Typography>
            <QuantitySelect quantity={quantity} onChange={onChangeQuantity} />
          </Grid>
        </Grid>
      </Paper>
      <RemoveButton itemId={id} />
    </>
  );
}
