import { useState } from 'react';
import {
  GoogleMap,
  useLoadScript,
  MarkerF,
  InfoWindowF,
} from '@react-google-maps/api';

function MapDisplay({ markers = [], setIsShow, onClickMarker }) {
  let zoom = 11;
  let lat = 13.715042359221808;
  let lng = 100.60007182984619;
  const queryString = window.location.search;
  if (queryString) {
    const urlParams = new URLSearchParams(queryString);
    lat = urlParams.get('lat');
    lng = urlParams.get('lng');
    zoom = 14;
  }
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
        <div style={{ width: '100%', height: '80vh' }}>
          {isLoaded ? (
            <GoogleMap
              mapContainerStyle={{
                width: '100%',
                height: '100%',
              }}
              //Default map position on first display
              center={{
                lat: +lat,
                lng: +lng,
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
                        <div className='h-36 flex aspect-square overflow-hidden items-center rounded-xl justify-center'>
                          <img
                            className='object-center h-36'
                            src={marker?.condoImage}
                            alt=''
                          />
                        </div>
                        <div className='w-36'>
                          <p className='font-semibold'>{marker?.nameEn}</p>
                          <p>{marker?.location}</p>
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
