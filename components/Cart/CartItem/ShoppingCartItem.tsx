import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { useUserDispatch } from 'components/User/user.context';
import { CartItemData } from 'interfaces/shopItem.interface';
import React from 'react';
import routes from 'utils/routes';
import { formatItemPrice } from 'utils/shopItem.util';
import RemoveButton from '../../Forms/Buttons/RemoveButton';
import QuantitySelect from '../../Forms/Fields/QuantitySelect';
import ThumbnailImage from './ThumbnailImage';

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

  const Name = () => (
    <Link href={itemLink}>
      <Typography sx={{ mt: 1 }} variant='subtitle1'>
        {name}
      </Typography>
    </Link>
  );

  const Details = () => (
    <Typography sx={{ mt: 1 }} variant='subtitle2'>
      Size: {size} Color: {color}
    </Typography>
  );

  const Price = () => (
    <Typography sx={{ mt: 1 }} variant='subtitle1'>
      {formatItemPrice(item)}
    </Typography>
  );

  return (
    <Box
      sx={{
        p: 1,
        display: 'flex',
        flexDirection: 'row',
        width: 500,
      }}
    >
      <ThumbnailImage href={itemLink} imageUrls={imageUrls} />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Name />
            <Details />
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
            }}
          >
            <QuantitySelect quantity={quantity} onChange={onChangeQuantity} />
            <Price />
          </Box>
        </Box>
        <RemoveButton itemId={id} />
      </Box>
    </Box>
  );
}
