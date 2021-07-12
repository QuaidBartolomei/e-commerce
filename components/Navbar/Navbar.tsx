import AppBar from '@material-ui/core/AppBar';
import createStyles from '@material-ui/core/styles/createStyles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import SignInButton from 'components/SignInButton';
import React from 'react';
import { useScrollDirection } from 'react-use-scroll-direction';
import NavbarTitle from './NavbarTitle';
import NavigationDrawerMenu from './NavigationMenu';
import ShoppingCartIconButton from './ShoppingCartIcon';

const useStyles = makeStyles(theme =>
  createStyles({
    toolbar: {
      color: 'white',
    },
  })
);

const Navbar = () => {
  const [state, setState] = React.useState<'transparent' | 'hidden' | 'solid'>(
    'transparent'
  );
  const scrollTrigger = useScrollTrigger({
    disableHysteresis: false,
  });
  const classes = useStyles({ scrollTrigger });

  const { isScrollingUp, isScrollingDown, scrollDirection } =
    useScrollDirection();

  React.useEffect(() => {
    if (scrollDirection === 'DOWN') setState('hidden');
    if (scrollDirection === 'UP') {
      setState('solid');
    } else if (document.scrollingElement?.scrollTop === 0)
      setState('transparent');
  }, [scrollDirection]);

  if (state === 'hidden') return null;

  return (
    <React.Fragment>
      <AppBar
        position='fixed'
        elevation={scrollTrigger ? 1 : 0}
        color={state === 'solid' ? 'primary' : 'transparent'}
      >
        <Toolbar className={classes.toolbar}>
          <NavigationDrawerMenu />
          <NavbarTitle />
          <SignInButton />
          <ShoppingCartIconButton />
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Navbar;
