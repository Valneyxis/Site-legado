import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = () => {
  const mapContainerStyle = {
    width: '100%',
    height: '400px',
  };

  const center = {
    lat: -2.7969,  
    lng: -40.5127,
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyCKIGOAWw1YDldyjwmX0UCWvPiFTs7KGzA">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={15}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
