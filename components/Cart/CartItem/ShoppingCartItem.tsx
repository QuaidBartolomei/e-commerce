import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ThumbnailImage from './ThumbnailImage';
import Link from 'components/Link';
import { useUserDispatch } from 'components/User/user.context';
import { CartItemData } from 'interfaces/shopItem.interface';
import React from 'react';
import routes from 'utils/routes';
import { formatItemPrice } from 'utils/shopItem.util';
import RemoveButton from '../../Forms/Buttons/RemoveButton';
import QuantitySelect from '../../Forms/Fields/QuantitySelect';

interface Props {
  item: CartItemData;
}

export default function ShoppingCartItem({ item }: Props) {
  const { size, color, quantity, id, name, imageUrls } = item;
  const itemLink = routes.item(id);
  const userDispatch = useUserDispatch();

  function onChangeQuantity(newQuantity: number) {
    userDispatch({
      type: 'change_item_quantity',
      payload: { id, quantity: newQuantity },
    });
  }

  const TitleLink = () => (
    <Link href={itemLink}>
      <Typography sx={{mt:1}} variant='subtitle1'>
        {name} ({size}, {color})
      </Typography>
    </Link>
  );

  return (
    <Paper
      sx={{
        p: 1,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        width: 500,
      }}
    >
      <ThumbnailImage href={itemLink} imageUrls={imageUrls} />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <TitleLink />
        <Typography sx={{mt:1}} variant='subtitle1'>{formatItemPrice(item)}</Typography>
        <QuantitySelect quantity={quantity} onChange={onChangeQuantity} />
        <RemoveButton itemId={id} />
      </Box>
    </Paper>
  );
}
