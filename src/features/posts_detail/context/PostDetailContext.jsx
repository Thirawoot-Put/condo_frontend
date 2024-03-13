import { useState, useContext, createContext } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import * as postApi from '../../../api/post-api';
import * as viewerApi from '../../../api/viewer-api';

const PostDetailContext = createContext();

export function PostDetailContextProvider({ children }) {
  const [postDetail, setPostDetail] = useState(null);
  const [placesNearby, setPlacesNearby] = useState({
    subwayStation: [],
    shoppingMall: [],
    hospital: [],
    university: [],
  });
  const [loading, setLoading] = useState(false);
  const params = useParams();

  const fetchPostId = async (id) => {
    try {
      setLoading(true);
      const response = await postApi.fetchPostByPostId(id);
      setPostDetail(response.data.post);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPostId(params.postId);
  }, []);

  const createViewer = async () => {
    const viewer = await viewerApi.createPost(params.postId);
   
  };

  return (
    <PostDetailContext.Provider
      value={{
        postDetail,
        loading,
        createViewer,
        placesNearby,
        setPlacesNearby,
      }}
    >
      {children}
    </PostDetailContext.Provider>
  );
}

export default function useDetail() {
  return useContext(PostDetailContext);
}
