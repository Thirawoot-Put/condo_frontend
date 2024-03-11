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
    };
    run();
  }, []);

  return (
    <>
      <SearchBar
        onChange={handleChangeInputName}
        onSubmit={handleSubmitInputName}
        value={selected.name}
      />
      <div className='flex p-10'>
        <FilterContainer />
        <CardContainer />
      </div>
    </>
  );
}
