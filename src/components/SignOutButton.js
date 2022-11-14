import React from "react";
import { doSignOut } from "../firebase/FirebaseFunctions";
import { NavLink } from "react-router-dom";

const SignOutButton = () => {
  return (
    <NavLink className="navlink"onClick={doSignOut}>
      Sign Out
    </NavLink>
  );
};

export default SignOutButton;
