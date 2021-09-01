import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import React from 'react';
import NavigationDrawer from './NavigationDrawer';

const NavigationDrawerMenu = () => {
  const [showNavDrawer, setShowNavDrawer] = React.useState(false);

  return (
    <React.Fragment>
      <IconButton
        edge='start'
        color='inherit'
        aria-label='menu'
        onClick={() => setShowNavDrawer(true)}
        size="large">
        <MenuIcon />
      </IconButton>

      <NavigationDrawer
        isOpen={showNavDrawer}
        onClose={() => setShowNavDrawer(false)}
      />
    </React.Fragment>
  );
};

export default NavigationDrawerMenu;
