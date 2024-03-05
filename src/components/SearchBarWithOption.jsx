import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import { useState } from 'react';
import { useEffect } from 'react';

export default function SearchBarWithOption({
  onChange,
  onSelect,
  value,
  name,
  label,
  list,
}) {
  const [input, setInput] = useState('');

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onSelect(input);
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [input]);

  return (
    <Stack sx={{ width: '100%' }}>
      <Autocomplete
        freeSolo
        id='searchBarWithOption'
        disableClearable
        options={list}
        value={value}
        onChange={(event, newValue) => {
          console.log(newValue, 'click');
          onSelect(newValue);
        }}
        onInputChange={(event, newValue) => {
          console.log(newValue, 'change');
          onChange(name, newValue);
          setInput(newValue);
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            label={label}
            InputProps={{
              ...params.InputProps,
              type: 'search',
            }}
          />
        )}
      />
    </Stack>
  );
}
