import React from "react";
import "./App.css";
import Home from "./Home";
import Parks from "./ParkPage";
import Community from "./Community";
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

function App() {
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
