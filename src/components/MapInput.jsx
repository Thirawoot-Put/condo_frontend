import { useState, useMemo } from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import '@reach/combobox/styles.css';

import Spinner from '../components/Spinner';
import PlacesAutocomplete from './PlacesAutocomplete';

export default function Places() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAP_API_KEY,
    libraries: ['places'],
  });

  if (!isLoaded) return <Spinner />;
  return <MapInput />;
}

function MapInput() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAP_API_KEY,
    libraries: ['places'],
  });

  const [select, setSelect] = useState({ lat: 13.7563309, lng: 100.5017651 });

  const handleMapClick = (event) => {
    const newMarker = {
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    };
    setSelect(newMarker);
    console.log(newMarker);
  };

  return (
    <>
      <div>
        <h1>try google map marker</h1>
        <div style={{ width: '80%', height: '80vh', margin: 'auto' }}>
          <div className='places-container'>
            <PlacesAutocomplete setSelect={setSelect} />
          </div>
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
