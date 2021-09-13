import Badge from '@mui/material/Badge';
import Link from 'components/Link';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import { useUserState } from 'components/User/user.context';
import React, { useEffect } from 'react';
import routes from 'utils/routes';

const ShoppingCartIconButton = () => {
  const user = useUserState();
  const [cartSize, setCartSize] = React.useState(0);

  useEffect(() => {
    const newCartSize = user.cart.reduce((total, x) => total + x.quantity, 0);
    setCartSize(newCartSize), [user.cart];
  }, [setCartSize, user.cart]);

  return (
    <Link
      sx={{
        pr: 1,
      }}
      href={routes.cart}
      color='inherit'
    >
      <Badge badgeContent={cartSize} color='error' showZero={false}>
        <ShoppingCart />
      </Badge>
    </Link>
  );
};

export default ShoppingCartIconButton;
