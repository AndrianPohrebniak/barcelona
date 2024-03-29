import React from 'react'
import GMap from './GMap/GMap'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
  
const center = {
    lat: 49.83514,
    lng: 24.00825
};

const Main_page = () => {
  return (
    <div>
      <GMap center={center}></GMap>
    </div>
  )
}

export default Main_page
