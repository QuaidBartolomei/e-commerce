import Stack from '@mui/material/Stack'
import * as React from 'react'
import ShoppingCartIconButton from '../../features/cart/ShoppingCartIconButton'
import UserDrawerButton from '../../features/user/UserDrawerButton'

export default function NavbarMenuButtons() {
  return (
    <Stack direction="row" alignItems="center">
      <UserDrawerButton />
      <ShoppingCartIconButton />
    </Stack>
  )
}
