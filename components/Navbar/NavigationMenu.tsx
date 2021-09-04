import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
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
