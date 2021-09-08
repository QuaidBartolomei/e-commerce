import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import React from 'react';

export type NavigationDrawerButtonProps = {
// props
}

export default function NavigationDrawerButton({}:NavigationDrawerButtonProps) {
  return (
    <IconButton
      size='large'
      edge='start'
      color='inherit'
      aria-label='menu'
      sx={{ mr: 2 }}
    >
      <MenuIcon />
    </IconButton>
  );
};