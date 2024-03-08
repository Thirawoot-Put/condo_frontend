import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import Container from '../layouts/Container';
import RegisterUserPage from '../pages/RegisterUserPage';
import LoginUserPage from '../pages/LoginUserPage';
import RegisterAgentPage from '../pages/RegisterAgentPage';
import LoginAgentPage from '../pages/LoginAgentPage';
import AgentContainer from '../layouts/AgentContainer';
import PostDetailPage from '../pages/PostDetailPage';
import CreatePostPage from '../pages/CreatePostPage';
import UserContainer from '../layouts/UserContainer';
import ChatPage from '../pages/ChatPage';
import CreateReviewsPage from '../pages/CreateReviewsPage';
import UserProfilePage from '../pages/UserProfilePage';
import PaymentPage from '../pages/PaymentPage';
import SearchMapPage from '../pages/SearchMapPage';
import PostContextProvider from '../features/homepage/context/PostContext';
import CheckoutForm from '../features/payment/creditcard/CheckoutForm';
import Return from '../features/payment/creditcard/Return';
import SelectPackagePage from '../pages/SelectPackagePage';
<<<<<<< HEAD
import JoinTestPage from '../pages/JoinTestPage';
import ChatTestPage from '../pages/ChatTestPage';
import ProtechAuth from '../features/protectroute/ProtechAuth';
=======
>>>>>>> develop

const router = createBrowserRouter([
  // Guest เข้าได้ทุกคน
  {
    path: '/',
    element: (
      <PostContextProvider>
        <Container />
      </PostContextProvider>
    ),
    children: [
      {
        path: '',
        element: <HomePage />,
      },
      {
        path: 'register',
        element: (
          <ProtechAuth>
            <RegisterUserPage />
          </ProtechAuth>
        ),
      },
      {
        path: 'login',
        element: (
          <ProtechAuth>
            <LoginUserPage />
          </ProtechAuth>
        ),
      },
      {
        path: 'register/agent',
        element: (
          <ProtechAuth>
            <RegisterAgentPage />
          </ProtechAuth>
        ),
      },
      {
        path: 'login/agent',
        element: (
          <ProtechAuth>
            <LoginAgentPage />
          </ProtechAuth>
        ),
      },
      {
        path: 'post/:postId',
        element: <PostDetailPage />,
      },
      {
        path: 'map',
        element: <SearchMapPage />,
      },
    ],
  },
  //   User only
  {
    path: '/',
    element: <UserContainer />,
    children: [
      {
        path: 'user/chat',
        element: <ChatPage />,
      },
      {
        path: 'user/review',
        element: <CreateReviewsPage />,
      },
      {
        path: 'user/profile/:userId',
        element: <UserProfilePage />,
      },
    ],
  },
  //   Agent only
  {
    path: '/',
    element: <AgentContainer />,
    children: [
      {
        path: 'agent/post',
        element: <CreatePostPage />,
      },
      {
        path: 'agent/post/edit',
        element: <CreatePostPage />,
      },
      {
        path: 'agent/package',
        element: <SelectPackagePage />,
      },
      {
        path: 'agent/payment',
        element: <PaymentPage />,
      },
      {
        path: 'checkout',
        element: <CheckoutForm />,
      },
      {
        path: 'return',
        element: <Return />,
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
