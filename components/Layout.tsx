import Box from '@mui/material/Box';
import { Footer } from 'components/Footer';
import React from 'react';
import Navbar from 'components/Navbar/Navbar';

const Layout: React.FC = props => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Navbar logoImage='/logo.svg' />
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
      <Footer copyright='Fine Attire' />
    </Box>
  );
};

export default Layout;
