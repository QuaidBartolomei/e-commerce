import ButtonBase from '@material-ui/core/ButtonBase';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { useUserDispatch } from 'components/User/user.context';
import { CartItemData } from 'interfaces/shopItem.interface';
import React from 'react';
import routes from 'utils/routes';
import { formatItemPrice } from 'utils/shopItem.util';
import RemoveButton from '../../Forms/Buttons/RemoveButton';
import QuantitySelect from '../../Forms/Fields/QuantitySelect';

const useStyles = makeStyles(theme =>
  createStyles({
    cartItem: {
      padding: theme.spacing(1),
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      flexWrap: 'wrap',
      '&>*': {
        marginRight: theme.spacing(2),
      },
    },
    image: {
      width: 128,
      height: 128,
    },
    imageSrc: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundSize: 'cover',
      backgroundPosition: 'center 40%',
    },
    cartItemDetailsContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      '&>*': {
        marginBottom: theme.spacing(1),
      },
    },
  })
);

interface Props {
  item: CartItemData;
}

export default function ShoppingCartItem({ item }: Props) {
  const { size, color, quantity, id, name, imageUrls } = item;
  const itemLink = routes.item(id);
  const classes = useStyles();
  const userDispatch = useUserDispatch();

  function onChangeQuantity(newQuantity: number) {
    userDispatch({
      type: 'change_item_quantity',
      payload: { id, quantity: newQuantity },
    });
  }

  const ThumbnailImage = () => (
    <ButtonBase className={classes.image} href={itemLink}>
      <span
        className={classes.imageSrc}
        style={{
          backgroundImage: `url(${imageUrls[0]})`,
        }}
      />
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
    <Paper className={classes.cartItem}>
      <ThumbnailImage />
      <div className={classes.cartItemDetailsContainer}>
        <TitleLink />
        <Typography variant='subtitle1'>{formatItemPrice(item)}</Typography>
        <QuantitySelect quantity={quantity} onChange={onChangeQuantity} />
        <RemoveButton itemId={id} />
      </div>
    </Paper>
  );
}
