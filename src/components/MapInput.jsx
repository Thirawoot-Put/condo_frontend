import { useState, useMemo } from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import '@reach/combobox/styles.css';

import Spinner from '../components/Spinner';
import PlacesAutocomplete from './PlacesAutocomplete';
import { useEffect } from 'react';

export default function Places({ value, onChange, disabled }) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAP_API_KEY,
    libraries: ['places'],
  });

  if (!isLoaded) return <Spinner />;
  return <MapInput value={value} onChange={onChange} disabled={disabled} />;
}

function MapInput({
  value = { lat: 13.7563309, lng: 100.5017651 },
  onChange,
  disabled = false,
}) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAP_API_KEY,
    libraries: ['places'],
  });

  const [select, setSelect] = useState({ lat: +value.lat, lng: +value.lng });

  const handleMapClick = (event) => {
    const newMarker = {
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    };
    if (disabled) {
      return;
    }
    setSelect(newMarker);
  };

  useEffect(() => {
    onChange(select);
  }, [select]);

  useEffect(() => {
    setSelect({ lat: +value.lat, lng: +value.lng });
  }, [value.lat, value.lng]);

  return (
    <>
      <div>
        <h1>try google map marker</h1>
        <div style={{ width: '80%', height: '80vh', margin: 'auto' }}>
          {disabled || (
            <div className='places-container'>
              <PlacesAutocomplete setSelect={setSelect} />
            </div>
          )}
          {isLoaded ? (
            <GoogleMap
              mapContainerStyle={{
                width: '100%',
                height: '100%',
              }}
              //Default map position on first display
              center={select}
              zoom={16}
              onClick={handleMapClick}
            >
              {select && <Marker position={select} />}
            </GoogleMap>
          ) : null}
        </div>
      </div>
    </>
  );
}

// export default MapInput;
