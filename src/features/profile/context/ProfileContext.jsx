import { createContext, useContext, useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import * as userApi from '../../../api/user-api';
import * as postApi from '../../../api/post-api';

const ProfileContext = createContext();

export function ProfileContextProvider({ children }) {
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState(null);
  const { userId } = useParams();
   
  const fetchProfileUser = async (id) => {
    const response = await userApi.fetchUserByUserId(id);
    setUser(response.data.user);
  };
  const fetchProfilePost = async (id) => {
    const response = await postApi.fetchPostByUserId(id);
    setPosts(response.data.posts);
  };

  useEffect(() => {
    fetchProfilePost(userId);
    fetchProfileUser(userId);
  }, []);

  console.log(posts);
  console.log(user);

  return (
    <ProfileContext.Provider value={{ posts, user }}>
      {children}
    </ProfileContext.Provider>
  );
}

export default function useProfile() {
  return useContext(ProfileContext);
}
