import React from 'react';
import Container from '../features/posts_detail/Container';
import { PostDetailContextProvider } from '../features/posts_detail/context/PostDetailContext';

function PostDetailPage() {
  return (
    <PostDetailContextProvider>
      <Container />
    </PostDetailContextProvider>
  );
}

export default PostDetailPage;
