import React from 'react';
import FilterContainer from './FilterContainer';
import CardContainer from './CardContainer';
import { useEffect } from 'react';
import useSearch from '../hook/UseSearch';
import SearchBar from '../../../components/SearchBar';

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
  } = useSearch();

  useEffect(() => {
    // const timeoutId = setTimeout(() => {
    console.log('initialPosts', initialPosts);
    handleSubmitInputName();
    // }, 4000);
    console.log('selected.name', selected.name);

    // return () => {
    //   clearTimeout(timeoutId);
    // };
  }, [selected.name]);

  useEffect(() => {
    const run = async () => {
      await getActivePosts();
      await getSelected();
      await getMinMaxPrice();
    };
    run();
  }, []);

  return (
    <div className='w-[70vw] mx-auto py-8 flex flex-col gap-4'>
      <SearchBar
        onChange={handleChangeInputName}
        onSubmit={handleSubmitInputName}
        value={selected.name}
        width='w-full'
        placeholder='Search condo name'
      />
      <div className='flex gap-4'>
        <div className=' flex-1 shadow-lg p-6 rounded-lg'>
          <FilterContainer />
        </div>
        <div className='flex flex-col gap-4'>
          <CardContainer />
        </div>
      </div>
    </div>
  );
}
