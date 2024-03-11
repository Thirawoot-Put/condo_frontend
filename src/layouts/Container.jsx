import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { Box } from '@mui/material';

function Container() {
  return (
    <div>
      <Header />
      <Box sx={{ paddingTop: 8, width: '80%', marginInline: 'auto' }}>
        <Outlet />
      </Box>
      <Footer />
    </div>
  );
}

export default Container;
