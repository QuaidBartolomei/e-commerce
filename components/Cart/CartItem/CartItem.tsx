import Stack from '@material-ui/core/Stack';
import Typography from '@material-ui/core/Typography';
import { FlexCol, FlexRow } from 'components/Flexbox';
import Link from 'components/Link';
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

export default function CartItem({ item }: Props) {
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
      <Typography variant='h5'>{name}</Typography>
    </Link>
  );

  const Details = () => (
    <>
      <Typography variant='subtitle2'>Size: {size}</Typography>
      <Typography variant='subtitle2'>Color: {color}</Typography>
    </>
  );

  const Price = () => (
    <Typography sx={{ mt: 1, mr: 2 }} variant='subtitle1'>
      {formatItemPrice(item)}
    </Typography>
  );

  return (
    <FlexRow
      sx={{
        p: 1,
      }}
    >
      <ThumbnailImage href={itemLink} imageUrls={imageUrls} />
      <FlexCol grow sx={{ height: '100%', justifyContent: 'space-between' }}>
        <FlexRow grow wrap>
          <Stack
            direction='column'
            spacing={1}
            sx={{
              mr: 2,
              mb: 1,
            }}
          >
            <Name />
            <Details />
          </Stack>
          <FlexRow sx={{}}>
            <QuantitySelect quantity={quantity} onChange={onChangeQuantity} />
            <Price />
          </FlexRow>
        </FlexRow>
        <RemoveButton itemId={id} />
      </FlexCol>
    </FlexRow>
  );
}
