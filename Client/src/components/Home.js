import React, { useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { GoogleMap, LoadScript, Marker, InfoWindow } from "@react-google-maps/api";
import {Home as Home1, MarkerChange} from "./Parks";
import axios from 'axios';

export const MapContainer = () => {
  const mapStyles = {
    height: "80vh",
    width: "100%",
    borderRadius: "20px",
  };

  const defaultCenter = {
    lat: 40.74769935741557,
    lng: -74.03384713509037,
  };

  const locations = [
    {
      name: "Church Square Park",
      location: {
        lat: 40.74163202555151,
        lng: -74.03163715767018,
      },
      nav: "63911ffc1287c38f1a7bfa6a"
    },
    {
      name: "Elysian Park",
      location: {
        lat: 40.748581442333375,
        lng: -74.02547803954761,
      },
      nav: "63911ffc1287c38f1a7bfa6b"
    },
    {
      name: "Harborside Park",
      location: {
        lat: 40.755212949764626,
        lng: -74.02781271497959,
      },
      nav: "63911ffc1287c38f1a7bfa6c"
    },
    {
      name: "Maxwell Park",
      location: {
        lat: 40.74963632481432,
        lng: -74.02348654381474,
      },
      nav: "63911ffc1287c38f1a7bfa6d"
    },
    {
      name: "1600 Park",
      location: {
        lat: 40.75645317360369,
        lng: -74.02870650148478,
      },
      nav: "63911ffc1287c38f1a7bfa6e"
    },
    {
      name: "Southwest Park",
      location: {
        lat: 40.73799585251592,
        lng: -74.04200034381495,
      },
      nav: "63911ffc1287c38f1a7bfa6f"
    },
    {
      name: "Stevens Park",
      location: {
        lat: 40.7415857135842,
        lng: -74.02760137265004,
      },
      nav: "63911ffc1287c38f1a7bfa70"
    },
    {
      name: "Viaduct Park",
      location: {
        lat: 40.75482838744374,
        lng: -74.03448377264965,
      },
      nav: "63911ffc1287c38f1a7bfa71"
    },
  ];
  const history = useNavigate();
  const [ selected, setSelected ] = useState({});
  
  const onSelect = item => {
    setSelected(item);
  }
  return (
    <LoadScript googleMapsApiKey="AIzaSyCQthEONVTOZqufhHSlzCRIGSDuVwXDIVk">
      <GoogleMap mapContainerStyle={mapStyles} zoom={15} center={defaultCenter}>
        {locations.map((item) => {
          return <Marker key={item.name} position={item.location} clickable={true} onClick={() => history("/parks/" + item.nav)} onMouseOver={() => onSelect(item)}/>;
        })}
        {
            selected.location && 
            (
              <InfoWindow
              position={selected.location}
              clickable={true}
              onCloseClick={() => setSelected({})}
            >
              <p>{selected.name}</p>
            </InfoWindow>
            )
         }
      </GoogleMap>
    </LoadScript>
  );
};

function Home() {
  return (
    <div className="card" key="Park_1">
      <div className="card-body">
        <h2 className="card-title">What's our app about?</h2>
        <br />
        <p>
          Our project Hoboken Parks Portal, includes a dedicated platform for
          users to easily find public parks in the Hoboken area that fit their
          individual needs. It also allows users to discuss the merits of
          individual parks in a forum. We collect user data on what each user
          prefers when looking for a park in a UI/UX that is intuitive and
          minimizes time to learn how to use the app.
        </p>
        <br />
      </div>
    </div>
  );
}

export default Home;
