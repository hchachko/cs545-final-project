import React from 'react';
import './App.css';
import Home from './Home';
import Parks from './Parks';
import Community from './Community';
import Help from './Help';
import {NavLink, BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
     <Router>
       <div className="App">
        <header className='App-header'>
            <NavLink to="/">
              <h1 className='App-title'>
                Hoboken Parks Portal 
              </h1>
            </NavLink>
            <nav>
              <NavLink className='navlink' to='/parks'>
                Parks
              </NavLink>
              <NavLink className='navlink' to='/community'>
                Community
              </NavLink>
              <NavLink className='navlink' to='/help'>
                Help
              </NavLink>
            </nav>
          </header>
          <div className = 'App-body'>
            <Routes>
              <Route path ='/' element = {<Home />} />
              <Route path ='/parks' element = {<Parks />} />
              <Route path ='/community' element = {<Community />} />
              <Route path ='/help' element = {<Help />} />
            </Routes>
          </div>
       </div>
    </Router>
  );
}

export default App;
