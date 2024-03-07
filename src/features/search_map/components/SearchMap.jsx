import React from 'react';
import MapDisplay from './MapDisplay';
import { useState } from 'react';
import SideBar from './SideBar';
import * as condoApi from '../../../api/condo-api';
import { useEffect } from 'react';
import Spinner from '../../../components/Spinner';

function SearchMap() {
  const [isShow, setIsShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [condos, setCondos] = useState([]);

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
      const result = await condoApi.getCondoWithPost(condoId);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCondo();
  }, []);
  console.log(condos);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className='flex h-[80vh]'>
          <div
            className={`flex w-2/5 h-[70vh] ${isShow ? 'translate-x-0' : '-translate-x-full'} ease-in-out duration-500`}
          >
            <SideBar />
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
