import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import useSearch from '../hook/useSearch';

// function valuetext(value) {
//   return `${value}°C`;
// }

export default function PriceSlider() {
  const { selected, handlePriceChange, minMaxPrice } = useSearch();

  if (
    Object.keys(minMaxPrice).length === 0 &&
    minMaxPrice.constructor === Object
  ) {
    return;
  }

  const marks = [
    {
      value: 0,
      label: `0฿`,
    },

    {
      value: +minMaxPrice?._max?.price,
      label: `${minMaxPrice?._max?.price}฿`,
    },
  ];

  return (
    <Box sx={{ width: '90%' }}>
      <Slider
        min={0}
        max={+minMaxPrice?._max?.price}
        marks={marks}
        // shiftStep={1000}
        step={1000}
        value={selected.prices}
        onChange={handlePriceChange}
        valueLabelDisplay='auto'
      />
    </Box>
  );
}
