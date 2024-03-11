import React from 'react';
import PriceSlider from './PriceSlider';
import useSearch from '../hook/UseSearch';
import FilterCheckbox from './FilterCheckbox';
import FilterContent from './FilterContent';
import { useEffect } from 'react';
import { Button } from '@mui/material';
import SortContainer from './SortContainer';

export default function FilterContainer() {
  const {
    districts,
    facilities,
    handleClickFacilities,
    handleClickDistricts,
    selected,
    filterBySelected,
    handleClickClearFilter,
  } = useSearch();

  //ใส่ set timeout ให้ price chage   ด้วยมั้ย
  useEffect(() => {
    filterBySelected();
  }, [selected?.prices, selected?.districts, selected?.facilities]);

  return (
    <div className='flex flex-col gap-2'>
      <Button variant='outlined' onClick={handleClickClearFilter}>
        Clear
      </Button>
      <div className='flex gap-1'>
        <SortContainer />
      </div>
      <FilterContent title='Price'>
        <PriceSlider />
      </FilterContent>
      <div className='border'></div>
      <FilterContent title='District'>
        <div className=''>
          {districts?.map(({ id, district }) => (
            <FilterCheckbox
              key={id}
              name={district}
              value={id}
              onClick={handleClickDistricts}
              list={selected.districts}
            />
          ))}
        </div>
      </FilterContent>
      <div className='border'></div>
      <FilterContent title='Facilities'>
        <div className=''>
          {facilities?.map(({ id, name }) => (
            <FilterCheckbox
              key={id}
              name={name}
              value={id}
              onClick={handleClickFacilities}
              list={selected.facilities}
            />
          ))}
        </div>
      </FilterContent>
    </div>
  );
}
