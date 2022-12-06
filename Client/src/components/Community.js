import React, {useContext} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link, Routes, useLocation} from 'react-router-dom';
import Categories from "./Forum/Categories"

function Home () {
    // Make sure user exists at nodebb
    return (
        <div>
            <h1>Community Board</h1>
            <Categories></Categories>
        </div>
    );
};

export default Home;