import { useState } from 'react';
import {
  GoogleMap,
  useLoadScript,
  MarkerF,
  InfoWindowF,
} from '@react-google-maps/api';

function MapDisplayOnePin({ zoom = 20, marker }) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAP_API_KEY,
  });

  const [activeMarker, setActiveMarker] = useState(null);

  console.log(activeMarker);

  return (
    <>
      <div>
        <div style={{ width: '80%', height: '80vh', margin: 'auto' }}>
          {isLoaded ? (
            <GoogleMap
              mapContainerStyle={{
                width: '100%',
                height: '100%',
              }}
              //Default map position on first display
              center={{
                lat: marker?.lat,
                lng: marker?.lng,
              }}
              zoom={zoom}
            >
              <MarkerF
                position={marker}
                // icon={{
                //   url: 'https://www.svgrepo.com/show/187158/apartment.svg',
                //   scaledSize: { width: 50, height: 50 },
                // }}
              ></MarkerF>
            </GoogleMap>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default MapDisplayOnePin;
