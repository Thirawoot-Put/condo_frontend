import React from 'react';
import MapDisplay from './MapDisplay';
import { useState } from 'react';
import SideBar from './SideBar';
import * as condoApi from '../../../api/condo-api';
import * as postApi from '../../../api/post-api';
import { useEffect } from 'react';
import Spinner from '../../../components/Spinner';

function SearchMap() {
  const [isShow, setIsShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [condos, setCondos] = useState([]);
  const [postsInCondo, setPostsInCondo] = useState([]);

  const fetchCondo = async () => {
    try {
      setLoading(true);
      const {
        data: { condos },
      } = await condoApi.getCondosForMap();
      setCondos(condos);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const fetchPostInCondo = async (condoId) => {
    try {
      const {
        data: { posts },
      } = await postApi.getPostInCondo(condoId);
      setPostsInCondo(posts);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(postsInCondo);

  useEffect(() => {
    fetchCondo();
  }, []);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className='flex h-[80vh]'>
          <div
            className={`flex w-2/5 h-[70vh] ${isShow ? 'translate-x-0' : '-translate-x-full'} ease-in-out duration-500`}
          >
            <SideBar posts={postsInCondo} />
          </div>
          <div
            className={`w-3/5 h-[70vh] m-auto items-center  ${isShow ? 'translate-x-0' : '-translate-x-1/3'} ease-in-out duration-500`}
          >
            <MapDisplay
              zoom={12}
              markers={condos}
              setIsShow={setIsShow}
              onClickMarker={fetchPostInCondo}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default SearchMap;
