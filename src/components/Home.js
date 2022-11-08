import React, {useState} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link, Routes, useLocation} from 'react-router-dom';

function Home () {
    return (
        <div className='card' key="Park_1">
            <div className='card-body'>
                <h5 className='card-title'>
                    Hoboken Map:
                </h5>
                <br />
                <img src="https://imgc.allpostersimages.com/img/posters/political-map-of-hoboken-nj_u-L-PYB3S90.jpg?artHeight=550&artPerspective=n&artWidth=550" alt="Park img" width="400" height="400"></img>
                <br />
            </div>
        </div>
    );
};

export default Home;