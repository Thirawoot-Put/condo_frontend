import React from 'react';
import PriceSlider from './PriceSlider';
import useSearch from '../hook/UseSearch';
import FilterCheckbox from './FilterCheckbox';
import FilterContent from './FilterContent';
import { useEffect } from 'react';
import { Button } from '@mui/material';

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
    <div className='w-[25vw]'>
      <Button variant='outlined' onClick={handleClickClearFilter}>
        Clear
      </Button>
      <FilterContent title='By price'>
        <PriceSlider />
      </FilterContent>
      <FilterContent title='By district'>
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
      <FilterContent title='By facilities'>
        <div className=''>
          {facilities?.map(({ id, name }) => (
            <FilterCheckbox
              key={id}
              name={name}
              value={id}
              onClick={handleClickFacilities}
              list={selected.districts}
            />
          ))}
        </div>
      </FilterContent>
    </div>
  );
}
