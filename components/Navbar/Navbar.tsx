import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { useRouter } from 'next/dist/client/router';
import React from 'react';
import routes from 'utils/routes';
import NavbarTitle from './NavbarTitle';
import NavigationDrawerMenu from './NavigationMenu';
import ShoppingCartIconButton from './ShoppingCartIcon';
import UserMenu from './UserMenu';

const Navbar = () => {
  const scrollTrigger = useScrollTrigger({
    disableHysteresis: true,
  });
  const router = useRouter();
  const isHomepage = router.pathname == routes.index;

  return (
    <React.Fragment>
      <AppBar
        position='fixed'
        elevation={isHomepage && !scrollTrigger ? 0 : 1}
        color={isHomepage && !scrollTrigger ? 'transparent' : 'primary'}
      >
        <Toolbar
          sx={{
            color: 'white',
          }}
        >
          <NavigationDrawerMenu />
          <NavbarTitle />
          <UserMenu />
          <ShoppingCartIconButton />
        </Toolbar>
      </AppBar>
      {!isHomepage && <Toolbar />}
    </React.Fragment>
  );
};

export default Navbar;
