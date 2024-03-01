import { useEffect } from 'react';
import { createContext } from 'react';
import * as postApi from '../../../api/post-api';

export const PostContext = createContext();

export default function PostContextProvider({ children }) {
  const getAllPosts = async () => {
    const result = await postApi.fetchAllPost();
    console.log(result);
  };

  useEffect(() => {
    getAllPosts();
  }, []);
  return <PostContext.Provider value={{}}>{children}</PostContext.Provider>;
}
