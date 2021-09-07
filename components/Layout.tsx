import Box from '@mui/material/Box';
import { Footer } from 'components/Footer';
import React from 'react';
import NavbarNew from 'components/Navbar/NavbarNew';

const Layout: React.FC = props => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <NavbarNew />
      <Box
        sx={{
          flexGrow: 1,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {props.children}
      </Box>
      <Footer copyright='CAB Clothing' />
    </Box>
  );
};

export default Layout;
