import React from 'react';
import Container from '../features/profile/Container';
import { ProfileContextProvider } from '../features/profile/context/ProfileContext';

function UserProfilePage() {
  return (
    <ProfileContextProvider>
      <Container />
    </ProfileContextProvider>
  );
}

export default UserProfilePage;
