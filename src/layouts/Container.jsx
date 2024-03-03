import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function Container() {
  return (
    <div>
      <Header />
      <div className='pt-16'>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Container;
