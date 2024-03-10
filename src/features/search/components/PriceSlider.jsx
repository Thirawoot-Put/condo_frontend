import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import useSearch from '../hook/UseSearch';

const marks = [
  {
    value: 0,
    label: '0฿',
  },

  {
    value: 100000,
    label: '100000฿',
  },
];

function valuetext(value) {
  return `${value}°C`;
}

export default function PriceSlider() {
  const { selected, handlePriceChange } = useSearch();
  // const [value, setValue] = React.useState([20, 37]);

  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };

  return (
    <Box sx={{ width: 100 }}>
      <Slider
        min={0}
        max={100000}
        marks={marks}
        getAriaLabel={() => 'Temperature range'}
        value={selected.prices}
        onChange={handlePriceChange}
        valueLabelDisplay='auto'
        getAriaValueText={valuetext}
      />
    </Box>
  );
}
