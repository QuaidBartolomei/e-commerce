import Badge from '@material-ui/core/Badge/Badge';
import Link from '@material-ui/core/Link';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import { useUserState } from 'components/User/user.context';
import React, { useMemo } from 'react';
import { useEffect } from 'react';
import routes from 'utils/routes';

const useStyles = makeStyles(theme =>
  createStyles({
    container: {
      paddingRight: theme.spacing(1),
      paddingLeft: theme.spacing(1),
    },
    countText: {
      color: 'red',
    },
  })
);

const ShoppingCartIconButton = () => {
  const classes = useStyles();
  const user = useUserState();
  const [cartSize, setCartSize] = React.useState('...');
  useEffect(() => {
    let newCartSize = user.cart
      .reduce((total, x) => total + x.quantity, 0)
      .toString();
    if (newCartSize == '0') newCartSize = '';
    setCartSize(newCartSize), [user.cart];
  });

  return (
    <Link href={routes.cart} className={classes.container} color='inherit'>
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
