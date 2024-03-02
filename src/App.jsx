import React from 'react';
import Router from './route';
import { Bounce, Slide, ToastContainer, toast } from 'react-toastify';

function App() {
  return (
    <>
      <Router />
      <ToastContainer
        position='bottom-right'
        autoClose={5000}
        newestOnTop={true}
        closeOnClick
        pauseOnHover
        theme='colored'
        transition={Slide}
      />
    </>
  );
}

export default App;
