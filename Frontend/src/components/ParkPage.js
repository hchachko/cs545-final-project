import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import './App.css';

function Parks () {
    const [parkData, setParkData] = useState(undefined);
    let parkId, parkName, parkImg, parkAddress;
    let {id} = useParams();
    useEffect(() => {
        console.log("render");
        async function fetchData() {
            try {
                const {data} = await axios.get('http://localhost:4000/parks/'+id);
                setParkData(data);
            } catch (e) {
                console.log(e);
            }
        }
        fetchData();
    }, [id]);
    if (parkData && parkData._id) parkId = parkData._id;
    if (parkData && parkData.parkName) parkName = parkData.parkName;
    if (parkData && parkData.parkImg) parkImg = parkData.parkImg;
    if (parkData && parkData.parkAddress) parkAddress = parkData.parkAddress;
    return (
        <div className='parkPageCard' key={parkId}>
            <div className='card-body'>
                <h2 className='card-title'>
                    {parkName}
                </h2>
                <img src={parkImg} alt="Park img" width="400" height="400"></img>
                <br />
                <h3>Address:</h3>
                <h4>{parkAddress}</h4>
            </div>
        </div>
    );
};

export default Parks;