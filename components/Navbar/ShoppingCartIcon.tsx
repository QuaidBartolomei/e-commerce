import Link from '@material-ui/core/Link';
import createStyles from '@material-ui/styles/createStyles';
import makeStyles from '@material-ui/styles/makeStyles';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import { useUserState } from 'components/User/user.context';
import React, { useEffect } from 'react';
import routes from 'utils/routes';
import { Theme } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';

const useStyles = makeStyles((theme: Theme) =>
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
  }, [setCartSize, user.cart]);

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
