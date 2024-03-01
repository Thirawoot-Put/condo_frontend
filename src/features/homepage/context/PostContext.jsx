import { useEffect } from 'react';
import { createContext } from 'react';
import * as postApi from '../../../api/post-api';
import { useState } from 'react';

export const PostContext = createContext();

export default function PostContextProvider({ children }) {
  const [allPosts, setAllPosts] = useState([]);

  const getAllPosts = async () => {
    try {
      const result = await postApi.fetchAllPost();
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllPosts();
  }, []);
  return <PostContext.Provider value={{}}>{children}</PostContext.Provider>;
}
