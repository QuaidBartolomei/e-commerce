import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import React from 'react';
import { Routes } from 'Router';
import { useUserState } from 'user/UserContext';
import { signout } from 'utils/auth.utils';


const UserMenu = () => {
  const userState = useUserState();
  const { isAuth } = userState;

  const [
    userMenuAnchor,
    setUserMenuAnchor,
  ] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setUserMenuAnchor(event.currentTarget);
  };

  const handleClose = () => {
    setUserMenuAnchor(null);
  };


  return (
    <React.Fragment>
      <IconButton
        aria-controls='simple-menu'
        aria-haspopup='true'
        onClick={handleClick}
      >
        <AccountCircleIcon />
      </IconButton>
      <Menu
        id='simple-menu'
        anchorEl={userMenuAnchor}
        keepMounted
        open={Boolean(userMenuAnchor)}
        onClose={handleClose}
        getContentAnchorEl={null}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        transformOrigin={{ vertical: 'top', horizontal: 'center' }}
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
    </React.Fragment>
  );
};

export default UserMenu;