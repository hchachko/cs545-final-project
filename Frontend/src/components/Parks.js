import './App.css';
import React, { useState, useEffect } from 'react';
import { Grid} from '@mui/material';
import hobokenMap from './Images/hobokenMap.png';
import axios from 'axios';
import {Link} from 'react-router-dom';
function Home () {
    const [parksData, setParksData] = useState(undefined);
    const [formData, setFormData] = useState({searchTerm: ''});
    let parks;
    const handleChange = (e) => {
        setFormData((prev) => ({...prev, [e.target.name]: e.target.value.toLowerCase()}));
        console.log(formData);
    };
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
        if (formData.searchTerm !== "") {
            if (!(park.parkName.toLowerCase().includes(formData.searchTerm))) {
                return(<div></div>);
            }
        } 
        let parkUrl = "/parks/"+park._id;
        return (
            <div className='parkCard' key = {park._id}>
                
                 <Link to={parkUrl}>
                    <div className='card-body'>
                        <h4 className='card-title'>{park.parkName}</h4>
                        <img className= "parkImg" src={park.parkImg} alt="park"></img>
                    </div>
                </Link>
            </div>
        );
    });
    return (
        <div>
            <Grid container spacing={1}>
            <Grid item xs={4} key="Parks">
                <div className='searchCard'>
                <br/>
                <h3>List of Parks:</h3>
                <div >
                    <label>
                    Filter by name:
                    </label>
                    <br/>
                    <input
                        onChange={(e) => handleChange(e)}
                        id = 'searchTerm'
                        name = 'searchTerm'
                        placeholder = 'Search Parks...'
                    />
                </div>
                </div>
                    <div className='parksCard'>
                        <div className='card-body'>
                            {parks}
                        </div>
                    </div>
            </Grid>
            <Grid item xs={8} key="Hoboken_Map">
                <div className='mapCard'>
                    <div className='card-body'>
                        <h2 className='card-title'> Hoboken Map: </h2>
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