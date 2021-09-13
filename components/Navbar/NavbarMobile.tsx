import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import React from 'react';
import BrandLinkButton from './BrandLinkButton';
import NavbarMenuButtons from './NavbarMenuButtons';
import NavigationDrawerButton from './NavigationDrawerButton';
import SearchBar from './SearchBar';

export type NavbarMobileProps = {
  logoImage?: string;
  title?: string;
};

export default function NavbarMobile({ logoImage = '' }: NavbarMobileProps) {
  return (
    <>
      <Toolbar sx={{ pt: 0.5, pb: 1.5 }}>
        <Stack
          sx={{
            width: '100%',
          }}
          direction='column'
        >
          <Stack
            direction='row'
            alignItems='center'
            sx={{
              width: '100%',
            }}
          >
            <NavigationDrawerButton />
            <Box sx={{ flexGrow: 1 }} />
            <BrandLinkButton logoImage={logoImage} />
            <Box sx={{ flexGrow: 1 }} />
            <NavbarMenuButtons />
          </Stack>
          <SearchBar />
        </Stack>
      </Toolbar>
    </>
  );
}
