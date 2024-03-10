import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import PostFormContextProvider from '../features/post/context/PostFormContext';
import { Box } from '@mui/material';

function AgentContainer() {
  return (
    <div>
      <Header />
      <Box sx={{ paddingTop: 8, paddingInline: 5 }}>
        <PostFormContextProvider>
          <Outlet />
        </PostFormContextProvider>
      </Box>
      <Footer />
    </div>
  );
}

export default AgentContainer;
