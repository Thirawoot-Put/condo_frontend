import { useEffect } from 'react';
import { createContext } from 'react';
import * as postApi from '../../../api/post-api';
import * as condoApi from '../../../api/condo-api';
import { useState } from 'react';

export const PostContext = createContext();

export default function PostContextProvider({ children }) {
  const [allPosts, setAllPosts] = useState([]);
  const [allCondos, setAllCondos] = useState([]);

  const getAllPosts = async () => {
    try {
      const {
        data: { posts },
      } = await postApi.fetchAllPost();

      setAllPosts(posts);
    } catch (error) {
      console.log(error);
    }
  };
  
  const getAllCondos = async () => {
    try {
      const {
        data: { condos },
      } = await condoApi.getCondosForMap();

      setAllCondos(condos);
    } catch (error) {
      console.log(error);
    }
  }



  return (
    <PostContext.Provider value={{ allPosts, getAllPosts, getAllCondos, allCondos }}>
      {children}
    </PostContext.Provider>
  );
}
