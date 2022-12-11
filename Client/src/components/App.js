import React from "react";
import "./App.css";
import Home from "./Home";
import Parks from "./Parks";
import ParkPage from "./ParkPage";
import Community from "./Community";
import CommunityCategory from './CommunityCategory';
import CommunityTopic from './CommunityTopic';
import Help from "./Help";
import SignIn from "./SignIn";
import Account from "./Account";
import PrivateRoute from "./PrivateRoute";
import Navigation from "./Navigation";
import { AuthContext } from "../firebase/Auth";
import SignOutButton from "./SignOutButton";
import SignUp from "./SignUp";
import {
  NavLink,
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { AuthProvider } from "../firebase/Auth";
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    document.title = "Hoboken Parks Portal";
  });
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Navigation />
          <div className="App-body">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/" element={<PrivateRoute />}>
              </Route>
              <Route path="/community" element={<PrivateRoute />}>
                <Route path="/community" element={<Community />} />
              </Route>
              <Route path="/community/category/:cid/:name" element={<PrivateRoute />}>
                <Route path="/community/category/:cid/:name" element={<CommunityCategory />} />
              </Route>
              <Route path="/community/topic/:tid/:name" element={<PrivateRoute />}>
                <Route path="/community/topic/:tid/:name" element={<CommunityTopic />} />
              </Route>
              <Route path="/parks" element={<PrivateRoute />}>
                <Route path="/parks" element={<Parks />} />
              </Route>
              <Route path="/parks/:id" element={<PrivateRoute />}>
                <Route path="/parks/:id" element={<ParkPage />} />
              </Route>
              {/* <Route path="/help" element={<Help />} /> */}
              <Route path="/signIn" element={<SignIn />} />
              <Route path="/account" element={<PrivateRoute />}>
                <Route path="/account" element={<Account />} />
              </Route>
            </Routes>
          </div>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
