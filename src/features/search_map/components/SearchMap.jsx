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
  const [loadingSideBar, setLoadingSideBar] = useState(false);
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
      setLoadingSideBar(true);
      const {
        data: { posts },
      } = await postApi.getPostInCondo(condoId);
      setPostsInCondo(posts);
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingSideBar(false);
    }
  };

  useEffect(() => {
    fetchCondo();
  }, []);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <h1 className='text-center text-xl font-semibold mt-4'>
            Find your happiness home
          </h1>
          <div className='flex h-[80vh] my-3'>
            <div
              className={` ${isShow ? 'translate-x-0' : '-translate-x-full ml-[-2.5rem]'} ease-in-out duration-500`}
            >
              <SideBar posts={postsInCondo} loading={loadingSideBar} />
            </div>
            <div
              className={`w-[80vw]  ${isShow ? 'translate-x-0' : '-translate-x-1/3'} ease-in-out duration-500`}
            >
              <MapDisplay
                markers={condos}
                setIsShow={setIsShow}
                onClickMarker={fetchPostInCondo}
              />
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default SearchMap;
