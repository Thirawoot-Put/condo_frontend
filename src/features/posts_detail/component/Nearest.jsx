import React, { useEffect, useState } from 'react';

const Nearest = ({lat,lng}) => {
  const [map, setMap] = useState(null);
  const [getNextPage, setGetNextPage] = useState(null);

  useEffect(() => {
    // Function to initialize the map
    const initMap = () => {
      const pyrmont = { lat, lng };
      const mapInstance = new window.google.maps.Map(
        document.getElementById('map'),
        {
          center: pyrmont,
          zoom: 17,
          mapId: '8d193001f940fde3',
        }
      );
      setMap(mapInstance);

      const placesService = new window.google.maps.places.PlacesService(
        mapInstance
      );
      let nextPage;

      const moreButton = document.getElementById('more');
      moreButton.onclick = () => {
        moreButton.disabled = true;
        if (nextPage) {
          nextPage();
        }
      };

      // Perform a nearby search.
      placesService.nearbySearch(
        { location: pyrmont, radius: 500, type: "point_of_interest" },
        (results, status, pagination) => {
          if (status !== 'OK' || !results) return;

          addPlaces(results, mapInstance);
          moreButton.disabled = !pagination || !pagination.hasNextPage;
          if (pagination && pagination.hasNextPage) {
            setGetNextPage(() => {
              nextPage = pagination.nextPage.bind(pagination);
            });
          }
        }
      );
    };

    // Load Google Maps API script
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${import.meta.env.VITE_GOOGLE_MAP_API_KEY}&libraries=places`;
    script.async = true;
    script.defer = true;
    script.onload = initMap;
    document.head.appendChild(script);

    return () => {
      // Clean up script on unmount if needed
      document.head.removeChild(script);
    };
  }, []); // Empty dependency array ensures that the effect runs once after the initial render

  const addPlaces = (places, mapInstance) => {
    const placesList = document.getElementById('places');

    for (const place of places) {
      if (place.geometry && place.geometry.location) {
        const image = {
          url: place.icon,
          size: new window.google.maps.Size(71, 71),
          origin: new window.google.maps.Point(0, 0),
          anchor: new window.google.maps.Point(17, 34),
          scaledSize: new window.google.maps.Size(25, 25),
        };

        new window.google.maps.Marker({
          map: mapInstance,
          icon: image,
          title: place.name,
          position: place.geometry.location,
        });

        const li = document.createElement('li');

        li.textContent = place.name;
        placesList.appendChild(li);
        li.addEventListener('click', () => {
          mapInstance.setCenter(place.geometry.location);
        });
      }
    }
  };

  return (
    <div>
      <div id='map' style={{ height: '400px', width: '100%' }}></div>
      <h1 className='py-2 text-xl font-bold'>Places Nearby</h1>
      <ul className='py-1 max-h-36 overflow-scroll list-none' id='places'></ul>
      <button className='mt-2 py-1.5 w-full rounded-2xl border' id='more'>Load More</button>
    </div>
  );
};

export default Nearest;
