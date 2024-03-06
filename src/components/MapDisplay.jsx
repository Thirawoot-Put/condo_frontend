import { useState } from 'react';
import {
  GoogleMap,
  useLoadScript,
  MarkerF,
  InfoWindowF,
} from '@react-google-maps/api';

function MapDisplay({ zoom = 20, markers = [] }) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAP_API_KEY,
  });

  const [activeMarker, setActiveMarker] = useState(null);

  const handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };

  console.log(activeMarker);

  return (
    <>
      <div>
        <div style={{ width: '90%', height: '70vh', margin: 'auto' }}>
          {isLoaded ? (
            <GoogleMap
              mapContainerStyle={{
                width: '100%',
                height: '100%',
              }}
              //Default map position on first display
              center={{
                lat: 13.724494,
                lng: 100.58177,
              }}
              zoom={zoom}
            >
              {markers.map(({ id, name, position }) => (
                <MarkerF
                  key={id}
                  position={position}
                  onClick={() => handleActiveMarker(id)}
                  // icon={{
                  //   url: 'https://www.svgrepo.com/show/187158/apartment.svg',
                  //   scaledSize: { width: 50, height: 50 },
                  // }}
                >
                  {activeMarker === id ? (
                    <InfoWindowF onCloseClick={() => setActiveMarker(null)}>
                      <div>
                        <p>{name}</p>
                        <p>ห้องว่าง: xxx</p>
                      </div>
                    </InfoWindowF>
                  ) : null}
                </MarkerF>
              ))}
            </GoogleMap>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default MapDisplay;
