import { useEffect } from 'react';
import { createContext } from 'react';
import * as postApi from '../../../api/post-api';
import { useState } from 'react';

export const PostContext = createContext();

export default function PostContextProvider({ children }) {
  const [allPosts, setAllPosts] = useState([]);

  const getAllPosts = async () => {
    try {
      const {
        data: { posts },
      } = await postApi.fetchAllPost();
      console.log('posts', posts);
      setAllPosts(posts);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllPosts();

    console.log('allPosts', allPosts);
  }, []);

  return (
    <PostContext.Provider value={{ allPosts }}>{children}</PostContext.Provider>
  );
}
