import React from 'react';
import FilterContainer from './FilterContainer';
import MapDisplayFilter from './MapDisplayFilter';
import CardContainer from './CardContainer';
import { useEffect } from 'react';
import useSearch from '../hook/useSearch';
import SearchBar from '../../../components/SearchBar';
import Spinner from '../../../components/Spinner';

export default function MainContainer() {
  const {
    getActivePosts,
    getSelected,
    selected,
    handleChangeInputName,
    handleSubmitInputName,
    filterBySelected,
    initialPosts,
    getMinMaxPrice,
    activeCondos,
    loading,
    setIsShow,
    handleClickCondoMarker,
  } = useSearch();

  useEffect(() => {
    // const timeoutId = setTimeout(() => {
    filterBySelected();
    // }, 4000);
    // return () => {
    //   clearTimeout(timeoutId);
    // };
  }, [selected.name]);

  useEffect(() => {
    getActivePosts();
    getSelected();
    getMinMaxPrice();
  }, []);

  // if (loading) {
  //   return <Spinner />;
  // }

  return (
    <div className='w-[70vw] mx-auto py-8 flex flex-col gap-4'>
      <SearchBar
        onChange={handleChangeInputName}
        onSubmit={handleSubmitInputName}
        value={selected.name}
        width='w-full'
        placeholder='Search condo name'
      />
      <MapDisplayFilter
        markers={activeCondos}
        setIsShow={setIsShow}
        onClickMarker={handleClickCondoMarker}
      />
      <div className='flex gap-4'>
        <div className=' flex-1 shadow-lg p-6 rounded-lg'>
          <FilterContainer />
        </div>
        <div className=' w-[50vw] flex flex-col gap-4'>
          <CardContainer />
        </div>
      </div>
    </div>
  );
}
