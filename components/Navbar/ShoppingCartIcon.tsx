import Badge from '@material-ui/core/Badge';
import Link from 'components/Link';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import { useUserState } from 'components/User/user.context';
import React, { useEffect } from 'react';
import routes from 'utils/routes';

const ShoppingCartIconButton = () => {
  const user = useUserState();
  const [cartSize, setCartSize] = React.useState('...');

  useEffect(() => {
    let newCartSize = user.cart
      .reduce((total, x) => total + x.quantity, 0)
      .toString();
    if (newCartSize == '0') newCartSize = '';
    setCartSize(newCartSize), [user.cart];
  }, [setCartSize, user.cart]);

  return (
    <Link
      sx={{
        px: 1,
      }}
      href={routes.cart}
      color='inherit'
    >
      {cartSize ? (
        <Badge badgeContent={cartSize} color='error'>
          <ShoppingCart fontSize='large' />
        </Badge>
      ) : (
        <ShoppingCart fontSize='large' />
      )}
    </Link>
  );
};

export default ShoppingCartIconButton;
