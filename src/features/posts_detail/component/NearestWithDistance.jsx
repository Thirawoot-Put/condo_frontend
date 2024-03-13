import React, { useEffect } from 'react';
import { useState } from 'react';
import useDetail from '../context/PostDetailContext';
import getDistanceFromLatLng from '../../../ultils/getDistanceFromLatLng';
import NearestWithDistanceItem from './NearestWithDistanceItem';

export default function NearestWithDistance() {
  const { postDetail, placesNearby, setPlacesNearby } = useDetail();

  //   const [type, setType] = useState('');
  const types = ['subway_station', 'shopping_mall', 'hospital', 'university'];

  let map;
  let service;
  let infowindow;

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${import.meta.env.VITE_GOOGLE_MAP_API_KEY}&libraries=places`;
    script.async = true;
    script.onload = initialize;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  function initialize() {
    const pyrmont = new window.google.maps.LatLng(
      +postDetail?.room?.condo?.lat,
      +postDetail?.room?.condo?.long
    );

    map = new window.google.maps.Map(document.getElementById('map'), {
      center: pyrmont,
      zoom: 15,
    });

    const request = {
      location: pyrmont,
      radius: '1000',
      type: types,
    };

    service = new window.google.maps.places.PlacesService(map);

    types.forEach((type) => {
      request.type = type;
      service.nearbySearch(request, callback);
    });
  }

  function callback(results, status) {
    if (status === window.google.maps.places.PlacesServiceStatus.OK) {
      for (let i = 0; i < results.length; i++) {
        createMarker(results[i]);
      }
    }
  }

  function createMarker(place) {
    if (place.types.includes('subway_station')) {
      setPlacesNearby((prev) => {
        return { ...prev, subwayStation: [...prev.subwayStation, place] };
      });
    } else if (place.types.includes('shopping_mall')) {
      setPlacesNearby((prev) => {
        return { ...prev, shoppingMall: [...prev.shoppingMall, place] };
      });
    } else if (place.types.includes('hospital')) {
      setPlacesNearby((prev) => {
        return { ...prev, hospital: [...prev.hospital, place] };
      });
    } else if (place.types.includes('university')) {
      setPlacesNearby((prev) => {
        return { ...prev, university: [...prev.university, place] };
      });
    }
  }

  return (
    <>
      <div id='map' style={{ width: '100%', height: '0px' }}></div>
      <div>
        {placesNearby?.subwayStation?.length !== 0 && (
          <NearestWithDistanceItem title='Subway'>
            {placesNearby?.subwayStation}
          </NearestWithDistanceItem>
        )}
        {placesNearby?.shoppingMall?.length !== 0 && (
          <NearestWithDistanceItem title='Shopping mall'>
            {placesNearby?.shoppingMall}
          </NearestWithDistanceItem>
        )}
        {placesNearby?.hospital?.length !== 0 && (
          <NearestWithDistanceItem title='hospital'>
            {placesNearby?.hospital}
          </NearestWithDistanceItem>
        )}
        {placesNearby?.university?.length !== 0 && (
          <NearestWithDistanceItem title='university'>
            {placesNearby?.university}
          </NearestWithDistanceItem>
        )}
      </div>
    </>
  );
}
