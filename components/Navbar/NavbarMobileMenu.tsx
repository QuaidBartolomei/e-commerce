import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import React from 'react';
import { useNavbarDispatch, useNavbarState } from './useNavbar';

export type NavbarMobileMenuProps = {
  // props
};

export default function NavbarMobileMenu({}: NavbarMobileMenuProps) {
  const { mobileMenuId, mobileMoreAnchorElement } = useNavbarState();
  const dispatch = useNavbarDispatch();
  const isMobileMenuOpen = Boolean(mobileMoreAnchorElement);

  const handleMobileMenuClose = () => {
    dispatch({ type: 'set_mobileMoreAnchorElement', payload: null });
  };

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    dispatch({ type: 'set_anchorElement', payload: event.currentTarget });
  };

  return (
    <Menu
      anchorEl={mobileMoreAnchorElement}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size='large' aria-label='show 4 new mails' color='inherit'>
          <Badge badgeContent={4} color='error'>
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size='large'
          aria-label='show 17 new notifications'
          color='inherit'
        >
          <Badge badgeContent={17} color='error'>
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size='large'
          aria-label='account of current user'
          aria-controls='primary-search-account-menu'
          aria-haspopup='true'
          color='inherit'
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );
}
