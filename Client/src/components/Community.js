import React, {useState, Component} from 'react';

import './App.css';
import {BrowserRouter as Router, Route, Link, Routes, useLocation} from 'react-router-dom';
import Categories from './Forum/Categories';

function Home () {
    return (
        <div>
            <h1>Community Board:</h1>
            <Categories></Categories>
        </div>
    );
};

export default Home;