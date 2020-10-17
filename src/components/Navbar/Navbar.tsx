import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import createStyles from '@material-ui/core/styles/createStyles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Toolbar from '@material-ui/core/Toolbar';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { ReactComponent as Logo } from 'assets/logo.svg';
import UserDrawer from 'components/Navbar/UserDrawer';
import React from 'react';
import { Link } from 'react-router-dom';
import { Routes } from 'Router';
import ShoppingCartIcon from '../ShoppingCartIcon';
import NavbarTitle from './NavbarTitle';
import NavigationDrawer from './NavigationDrawer';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { signout } from 'utils/user.utils';
import { useUserState } from 'user/UserContext';

const title = 'CAB Clothing';

const useStyles = makeStyles((theme) =>
  createStyles({
    logo: {
      height: 32,
      [theme.breakpoints.up('md')]: {
        height: 64,
      },
      margin: theme.spacing(1, 0),
    },
    toolbar: {},
    toolbarLink: {},
  })
);

const Navbar = () => {
  const classes = useStyles();
  const [showUserDrawer, setShowUserDrawer] = React.useState(false);
  const [showNavDrawer, setShowNavDrawer] = React.useState(false);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const userState = useUserState();

  let isAuth = userState._id !== '';

  const LogoLink = (
    <Link to={Routes.Homepage} className={classes.toolbarLink}>
      <Logo className={classes.logo} stroke='black' strokeWidth={2} />
    </Link>
  );

  const NavMenuButton = (
    <IconButton
      edge='start'
      color='inherit'
      aria-label='menu'
      onClick={() => setShowNavDrawer(true)}
    >
      <MenuIcon />
    </IconButton>
  );

  const ShoppingCartLink = () => (
    <Link to={Routes.ShoppingCart}>
      <ShoppingCartIcon />
    </Link>
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <AppBar position='fixed' className={classes.toolbar} color='primary'>
        <Toolbar>
          <UserDrawer
            isOpen={showUserDrawer}
            onClose={() => setShowUserDrawer(false)}
          />
          <NavigationDrawer
            isOpen={showNavDrawer}
            onClose={() => setShowNavDrawer(false)}
          />
          {NavMenuButton}
          <NavbarTitle title={title} />
          <IconButton>
            <SearchIcon />
          </IconButton>
          <IconButton
            aria-controls='simple-menu'
            aria-haspopup='true'
            onClick={handleClick}
          >
            <AccountCircleIcon />
          </IconButton>
          <Menu
            id='simple-menu'
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            {isAuth ? (
              <MenuItem button onClick={signout}>
                <ExitToAppIcon />
                Logout
              </MenuItem>
            ) : (
              <MenuItem component='a' href={Routes.SignIn}>
                Sign in / Register
              </MenuItem>
            )}
          </Menu>
          <ShoppingCartLink />
        </Toolbar>
      </AppBar>
      <Toolbar />
    </React.Fragment>
  );
};

export default Navbar;
