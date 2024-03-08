import { useState } from 'react';
import {
  GoogleMap,
  useLoadScript,
  MarkerF,
  InfoWindowF,
} from '@react-google-maps/api';

function MapDisplay({ zoom = 20, markers = [], setIsShow, onClickMarker }) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAP_API_KEY,
  });

  const [activeMarker, setActiveMarker] = useState(null);

  const handleClickMarker = (marker) => {
    // if (marker === activeMarker) {
    //   return;
    // }
    setActiveMarker(marker);
    setIsShow(true);
    onClickMarker(marker);
  };

  const handleCloseMarker = () => {
    setActiveMarker(null);
    setIsShow(false);
  };

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
              {markers.map((marker) => (
                <MarkerF
                  key={marker?.id}
                  position={{ lat: +marker?.lat, lng: +marker?.long }}
                  onClick={() => handleClickMarker(marker?.id)}
                  // icon={{
                  //   url: 'https://www.svgrepo.com/show/187158/apartment.svg',
                  //   scaledSize: { width: 50, height: 50 },
                  // }}
                >
                  {activeMarker === marker?.id ? (
                    <InfoWindowF onCloseClick={handleCloseMarker}>
                      <div className='flex flex-col items-center gap-1'>
                        <div className='w-36'>
                          <p>{marker?.nameEn}</p>
                          <p>{marker?.location}</p>
                        </div>
                        <div className='h-36 flex aspect-square overflow-hidden items-center rounded-xl justify-center'>
                          <img
                            className='object-center h-36'
                            src={marker?.condoImage}
                            alt=''
                          />
                        </div>
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
