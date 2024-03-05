import { GoogleMap, useLoadScript, MarkerF } from '@react-google-maps/api';

export default function MapDisplayOnePin({ zoom = 20, marker }) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAP_API_KEY,
  });

  return (
    <>
      <div>
        <div style={{ width: '100%', height: '60vh', margin: 'auto' }}>
          {isLoaded ? (
            <GoogleMap
              mapContainerStyle={{
                width: '100%',
                height: '100%',
              }}
              center={marker}
              zoom={zoom}
            >
              <MarkerF position={marker}></MarkerF>
            </GoogleMap>
          ) : null}
        </div>
      </div>
    </>
  );
}
