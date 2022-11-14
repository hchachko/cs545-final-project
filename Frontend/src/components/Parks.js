import './App.css';
import React, { useState, useEffect } from 'react';
import { Grid} from '@mui/material';
import hobokenMap from './Images/hobokenMap.png';
import axios from 'axios';

function Home () {
    const [parksData, setParksData] = useState(undefined);
    let parks;
    useEffect(() => {
        console.log("render");
        async function fetchData() {
            try {
                const {data} = await axios.get('http://localhost:4000/parks');
                setParksData(data);
            } catch (e) {
                console.log(e);
            }
        }
        fetchData();
    }, []);
    parks = parksData && parksData.map((park) => {
        console.log(park);
        return (
            <div className='parkCard' key = {park._id}>
                 <div className='card-body'>
                    <h5 className='card-title'>{park.parkName}</h5>
                    <br/>
                    <img className= "parkImg" src={park.parkImg} alt="park"></img>
                </div>
            </div>
        );
    });
    return (
        <div>
            <Grid container spacing={2}>
            <Grid item xs={4} key="Parks">
                <div className='homeCard'>
                    <div className='card-body'>
                        {parks}
                    </div>
                </div>
            </Grid>
            <Grid item xs={8} key="Hoboken_Map">
                <div className='homeCard'>
                    <div className='card-body'>
                        <h5 className='card-title'>
                            Hoboken Map:
                        </h5>
                        <img src={hobokenMap} alt="Map" className = "mapImg"></img>
                        <br />
                    </div>
                </div>
                </Grid>
            </Grid>
        </div>
    );
};

export default Home;