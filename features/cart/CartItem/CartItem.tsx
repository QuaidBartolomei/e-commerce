import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { FlexCol, FlexRow } from 'components/Flexbox'
import Link from 'components/Link'
import { changeItemQuantity } from 'features/user/userSlice'
import { CartItemData } from 'features/shop-item/shopItem.interface'
import React from 'react'
import routes from 'utils/routes'
import { formatItemPrice } from 'utils/shopItem.util'
import { RemoveButton } from 'components/Forms/Buttons'
import QuantitySelect from 'components/Forms/Fields/QuantitySelect'
import ThumbnailImage from './ThumbnailImage'

interface Props {
  item: CartItemData
}

export default function CartItem({ item }: Props) {
  const { size, color, quantity, id, name, imageUrls } = item
  const itemLink = routes.item(id)

  function onChangeQuantity(newQuantity: number) {
    changeItemQuantity({ ...item, quantity: newQuantity })
  }

  const Name = () => (
    <Link href={itemLink}>
      <Typography variant="h5">{name}</Typography>
    </Link>
  )

  const Details = () => (
    <>
      <Typography variant="subtitle2">Size: {size}</Typography>
      <Typography variant="subtitle2">Color: {color}</Typography>
    </>
  )

  const Price = () => (
    <Typography sx={{ mt: 1, mr: 2 }} variant="subtitle1">
      {formatItemPrice(item)}
    </Typography>
  )

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
            direction="column"
            spacing={1}
            sx={{
              mr: 2,
              mb: 1,
            }}
          >
            <Name />
            <Details />
          </Stack>
          <FlexRow>
            <QuantitySelect quantity={quantity} onChange={onChangeQuantity} />
            <Price />
          </FlexRow>
        </FlexRow>
        <RemoveButton itemId={id} />
      </FlexCol>
    </FlexRow>
  )
}
