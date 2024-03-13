import { useState, useContext, createContext } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import * as postApi from '../../../api/post-api';
import * as viewerApi from '../../../api/viewer-api';
import { useLoadScript } from '@react-google-maps/api';

const PostDetailContext = createContext();

export function PostDetailContextProvider({ children }) {
  const [postDetail, setPostDetail] = useState(null);
  const [placesNearby, setPlacesNearby] = useState({
    subwayStation: [],
    shoppingMall: [],
    hospital: [],
    university: [],
  });
  const [placesNearbyHashMap, setPlacesNearbyHashMap] = useState({
    subwayStation: {},
    shoppingMall: {},
    hospital: {},
    university: {},
  });
  const [loading, setLoading] = useState(false);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAP_API_KEY,
    libraries: ['places'],
  });

  const params = useParams();

  const addPlacesNearbyHashMap = (type, name) => {
    const newPlacesNearbyObj = { ...placesNearbyHashMap[type] };
    newPlacesNearbyObj[name] = 1;
    setPlacesNearbyHashMap((prev) => {
      return { ...prev, [type]: { ...prev[type], [name]: 1 } };
    });
  };

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
    console.log('viewer', viewer);
  };

  return (
    <PostDetailContext.Provider
      value={{
        postDetail,
        loading,
        createViewer,
        placesNearby,
        setPlacesNearby,
        placesNearbyHashMap,
        addPlacesNearbyHashMap,
        isLoaded,
      }}
    >
      {children}
    </PostDetailContext.Provider>
  );
}

export default function useDetail() {
  return useContext(PostDetailContext);
}
