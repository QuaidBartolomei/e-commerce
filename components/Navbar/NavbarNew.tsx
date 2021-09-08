import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import useMediaQuery from '@mui/material/useMediaQuery';
import * as React from 'react';
import BrandLinkButton from './BrandLinkButton';
import NavbarMenuButtons from './NavbarMenuButtons';
import NavbarMobileMenu from './NavbarMobileMenu';
import NavbarUserMenu from './NavbarUserMenu';
import NavigationDrawerButton from './NavigationDrawerButton';
import SearchBar from './SearchBar';
import { NavbarProvider } from './useNavbar';

type Props = {
  logoImage?: string;
  title?: string;
};

export default function NavbarNew(props: Props) {
  const { logoImage = '', title = '' } = props;
  const menuId = 'primary-search-account-menu';
  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMenu = <NavbarUserMenu />;
  const theme = useTheme();
  const isMobile = !useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <NavbarProvider
      initialState={{
        menuId,
        mobileMenuId,
        logoImage,
        title,
      }}
    >
      <Box sx={{ flexGrow: 1 }}>
        {isMobile ? (
          <NavbarMobile logoImage={logoImage} />
        ) : (
          <AppBar position='static'>
            <Toolbar>
              <NavigationDrawerButton />
              <BrandLinkButton logoImage={logoImage} />
              <SearchBar />
              <Box sx={{ flexGrow: 1 }} />
              <NavbarMenuButtons />
            </Toolbar>
          </AppBar>
        )}
        {renderMenu}
      </Box>
    </NavbarProvider>
  );
}

function NavbarMobile({ logoImage = '' }: Props) {
  const renderMobileMenu = <NavbarMobileMenu />;
  return (
    <>
      <AppBar position='static' sx={{ pb: 1 }}>
        <Toolbar>
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
      </AppBar>
      {renderMobileMenu}
    </>
  );
}
