import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../firebase/Auth";
import SignOutButton from "./SignOutButton";

const Navigation = () => {
  const { currentUser } = useContext(AuthContext);
  return <div>{currentUser ? <NavigationAuth /> : <NavigationNonAuth />}</div>;
};

const NavigationAuth = () => {
  return (
    <header className="App-header">
      <NavLink to="/">
        <h1 className="App-title">Hoboken Parks Portal</h1>
      </NavLink>
      <nav>
        <NavLink className="navlink" to="/">
          Parks
        </NavLink>
        <NavLink className="navlink" to="/community">
          Community
        </NavLink>
        <NavLink className="navlink" id="corner" to="/signIn">
          Sign In
        </NavLink>
        <NavLink className="navlink" to="/account">
          Account
        </NavLink>
        <SignOutButton />
      </nav>
    </header>
  );
};

const NavigationNonAuth = () => {
  return (
    <header className="App-header">
      <NavLink to="/">
        <h1 className="App-title">Hoboken Parks Portal</h1>
      </NavLink>
      <nav>
        <NavLink className="navlink" to="/">
          Home
        </NavLink>
        <NavLink className="navlink" id="corner" to="/signIn">
          Sign In
        </NavLink>
        <NavLink className="navlink" to="/signUp">
          Sign up
        </NavLink>
      </nav>
    </header>
  );
};

export default Navigation;
