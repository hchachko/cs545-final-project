import React, {useState} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link, Routes, useLocation} from 'react-router-dom';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

export const MapContainer = () => {
  
  const mapStyles = {        
    height: "50vh",
    width: "100%"};
  
  const defaultCenter = {
    lat: 40.74769935741557, lng: -74.03384713509037
  }

  const locations = [
    {
        name: "Location 1",
        location: {
            lat: 40.74208727387333,
            lng: -74.0255355834961
          },
      },
      {
        name: "Location 2",
        location: { 
          lat: 40.74953279908402,
          lng: -74.0235185623169
        },
      },
      {
        name: "Location 3",
        location: { 
          lat: 40.74220107638279,
          lng: -74.0323805809021
        },
      },
      {
        name: "Location 4",
        location: { 
          lat: 40.748524938340324,
          lng: -74.0328311920166
        },
      },
      {
        name: "Location 5",
        location: { 
          lat: 40.755043251432696,
          lng: -74.02785301208496
        },
      }
  ];
  
  return (
     <LoadScript
       googleMapsApiKey= 'AIzaSyCQthEONVTOZqufhHSlzCRIGSDuVwXDIVk'>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={15}
          center={defaultCenter}
        >
        {
            locations.map(item => {
              return (
              <Marker key={item.name} position={item.location}/>
              )
            })
         }
         </GoogleMap>
     </LoadScript>
  )
}

function Home () {
    return (
        <div className='card' key="Park_1">
            <div className='card-body'>
                <h5 className='card-title'>
                    Hoboken Map:
                </h5>
                <br />
                    <MapContainer/>
                <br />
            </div>
        </div>
    );
};

export default Home;