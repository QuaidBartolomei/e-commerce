import MenuIcon from '@mui/icons-material/Menu'
import IconButton from '@mui/material/IconButton'
import React from 'react'
import { useNavbarDispatch } from './useNavbar'

export type NavigationDrawerButtonProps = {
  // props
}

export default function NavigationDrawerButton({}: NavigationDrawerButtonProps) {
  const dispatch = useNavbarDispatch()
  const onClick = () => dispatch({ type: 'set_showNavDrawer', payload: true })
  return (
    <IconButton
      size="large"
      edge="start"
      color="inherit"
      aria-label="menu"
      sx={{ mr: 2 }}
      onClick={onClick}
    >
      <MenuIcon />
    </IconButton>
  )
}
