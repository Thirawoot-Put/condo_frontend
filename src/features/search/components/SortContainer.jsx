import { Button } from '@mui/material';
import React from 'react';
import useSearch from '../hook/useSearch';
import SortToggle from './SortToggle';

export default function SortContainer() {
  const {
    handlePriceSort,
    isPriceAscending,
    handleDistanceSort,
    isDistanceAscending,
    handleViewSort,
    isViewAscending,
  } = useSearch();
  return (
    <>
      <SortToggle onClick={handlePriceSort} isAscending={isPriceAscending}>
        Price
      </SortToggle>
      <SortToggle
        onClick={handleDistanceSort}
        isAscending={isDistanceAscending}
      >
        Distance
      </SortToggle>
      <SortToggle onClick={handleViewSort} isAscending={isViewAscending}>
        View
      </SortToggle>
    </>
  );
}
