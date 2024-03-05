import { useState } from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

function MapInput() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAP_API_KEY,
  });

  const [marker, setMarker] = useState({ lat: 0, lng: 0 });

  const handleMapClick = (event) => {
    const newMarker = {
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    };
    setMarker(newMarker);
    console.log(newMarker);
  };

  return (
    <>
      <div>
        <h1>try google map marker</h1>
        <div style={{ width: '80%', height: '80vh', margin: 'auto' }}>
          {isLoaded ? (
            <GoogleMap
              mapContainerStyle={{
                width: '100%',
                height: '100%',
              }}
              //Default map position on first display
              center={{
                lat: 13.7247376,
                lng: 100.3212733,
              }}
              zoom={18}
              onClick={handleMapClick}
            >
              <Marker position={{ lat: marker.lat, lng: marker.lng }} />
            </GoogleMap>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default MapInput;
