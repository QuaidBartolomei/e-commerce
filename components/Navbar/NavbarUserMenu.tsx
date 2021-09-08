import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import React from 'react';
import { useNavbarDispatch, useNavbarState } from './useNavbar';

export type NavbarUserMenuProps = {
  // props
};

export default function NavbarUserMenu({}: NavbarUserMenuProps) {
  const { menuId, anchorElement } = useNavbarState();
  const dispatch = useNavbarDispatch();

  const isMenuOpen = Boolean(anchorElement);

  const handleMenuClose = () => {
    dispatch({ type: 'close_menus' });
  };

  return (
    <Menu
      anchorEl={anchorElement}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );
}
