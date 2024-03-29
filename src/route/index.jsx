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
import EditPostPage from '../pages/EditPostPage';
import PaymentPage from '../pages/PaymentPage';
import SearchMapPage from '../pages/SearchMapPage';

const router = createBrowserRouter([
  // Guest เข้าได้ทุกคน
  {
    path: '/',
    element: <Container />,
    children: [
      {
        path: '',
        element: <HomePage />,
      },
      {
        path: 'register',
        element: <RegisterUserPage />,
      },
      {
        path: 'login',
        element: <LoginUserPage />,
      },
      {
        path: 'register/agent',
        element: <RegisterAgentPage />,
      },
      {
        path: 'login/agent',
        element: <LoginAgentPage />,
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
      {
        path: 'user/payment',
        element: <PaymentPage />,
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
        path: 'agent/post/:postId',
        element: <EditPostPage />,
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
