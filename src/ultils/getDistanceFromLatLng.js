//Distance between two lat/lng coordinates in km using the Haversine formula
const getDistanceFromLatLng = (lat1, lng1, lat2, lng2) => {
  function deg2rad(deg) {
    return deg * (Math.PI / 180);
  }
  function square(x) {
    return Math.pow(x, 2);
  }
  var radius = 6371; // radius of the earth in km
  lat1 = deg2rad(lat1);
  lat2 = deg2rad(lat2);
  var lat_dif = lat2 - lat1;
  var lng_dif = deg2rad(lng2 - lng1);
  var a =
    square(Math.sin(lat_dif / 2)) +
    Math.cos(lat1) * Math.cos(lat2) * square(Math.sin(lng_dif / 2));
  var distance = 2 * radius * Math.asin(Math.sqrt(a));
  return Math.round(distance * 10) / 10; //return km
};

export default getDistanceFromLatLng;
