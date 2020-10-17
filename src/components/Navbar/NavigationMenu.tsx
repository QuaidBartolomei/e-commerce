import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import NavigationDrawer from './NavigationDrawer';
import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {},
  })
);

const NavigationMenu = () => {
  const classes = useStyles();
  const [showNavDrawer, setShowNavDrawer] = React.useState(false);

  return (
    <React.Fragment>
      <IconButton
        edge='start'
        color='inherit'
        aria-label='menu'
        onClick={() => setShowNavDrawer(true)}
      >
        <MenuIcon />
      </IconButton>

      <NavigationDrawer
        isOpen={showNavDrawer}
        onClose={() => setShowNavDrawer(false)}
      />
    </React.Fragment>
  );
};

export default NavigationMenu;
