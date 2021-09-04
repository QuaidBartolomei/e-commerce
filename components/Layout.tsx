import Box from '@mui/material/Box';
import { Footer } from 'components/Footer';
import Navbar from 'components/Navbar/Navbar';
import React from 'react';

const Layout: React.FC = props => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Navbar />
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
