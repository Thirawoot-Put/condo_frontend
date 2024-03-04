import { useState } from 'react';
import { GoogleMap, useLoadScript, MarkerF, InfoWindowF } from '@react-google-maps/api';


function MapDisplay() {

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAP_API_KEY
  })

  const markers = [
    {
      id: 1,
      name: 'The Crest Sukumvite 34',
      position: { lat: 13.7251833, lng: 100.5765980 }
    },
    {
      id: 2,
      name: 'Kyen Sansiri',
      position: { lat: 13.7250967, lng: 100.5769418 }
    },
    {
      id: 3,
      name: 'The Estelle Phrom Phong',
      position: { lat: 13.728581, lng: 100.5704874 }
    },
    {
      id: 4,
      name: 'The Medison',
      position: { lat: 13.7290801, lng: 100.5715923 }
    }
  ]

  const [activeMarker, setActiveMarker] = useState(null)

  const handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
      return;
      }
      setActiveMarker(marker)
    }



  return (
    <>
    <div>
      <div style={{width: "80%", height: "80vh", margin: "auto"}}>
        { isLoaded ? (
        <GoogleMap
          mapContainerStyle={{
            width: "100%",
            height: "100%",
          }}
          //Default map position on first display 
          center={{
            lat: 13.725152,
            lng: 100.5760693
          }}
          zoom={18}
        >
          {
            markers.map(({id, name, position}) => (
              <MarkerF key={id} position={position} onClick={() => handleActiveMarker(id) } 
              icon={{url: "https://www.svgrepo.com/show/187158/apartment.svg", scaledSize: {width : 50, height : 50}}}>
               {
                activeMarker === id ? <InfoWindowF onCloseClick={() => setActiveMarker(null)} >
                  <div>
                    <p>{name}</p>
                    <p>ห้องว่าง: xxx</p>
                  </div>
                </InfoWindowF> : null
               }
              </MarkerF>
            ))
          }
        </GoogleMap>
        ) : null }
      </div>
    </div>
    </>
  )
        }

export default MapDisplay
