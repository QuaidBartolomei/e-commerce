import Badge from '@mui/material/Badge'
import Link from 'components/Link'
import ShoppingCart from '@mui/icons-material/ShoppingCart'
import React, { useEffect } from 'react'
import routes from 'utils/routes'
import { useAppSelector } from 'redux/hooks'
import { selectCart } from 'features/user/userSlice'

const ShoppingCartIconButton = () => {
  const cart = useAppSelector(selectCart)
  const [cartSize, setCartSize] = React.useState(0)

  useEffect(() => {
    const newCartSize = cart.reduce((total, x) => total + x.quantity, 0)
    setCartSize(newCartSize), [cart]
  }, [setCartSize, cart])

  return (
    <Link
      sx={{
        pr: 1,
      }}
      href={routes.cart}
      color="inherit"
    >
      <Badge badgeContent={cartSize} color="error" showZero={false}>
        <ShoppingCart />
      </Badge>
    </Link>
  )
}

export default ShoppingCartIconButton
