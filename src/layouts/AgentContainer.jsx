import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import PostFormContextProvider from '../features/post/context/PostFormContext';

function AgentContainer() {
  return (
    <div>
      <Header />
      <PostFormContextProvider>
        <div className='pt-16'>
          <Outlet />
        </div>
      </PostFormContextProvider>
      <Footer />
    </div>
  );
}

export default AgentContainer;
