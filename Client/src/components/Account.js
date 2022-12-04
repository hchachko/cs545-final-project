import React, { useContext } from "react";
import SignOutButton from "./SignOutButton";
import { AuthContext } from "../firebase/Auth";

function Account() {
  const { currentUser } = useContext(AuthContext);

  return (
    <div>
      <h2>{currentUser._delegate.displayName}</h2>
      <img src={currentUser._delegate.photoURL} alt="No User Image"></img>
      <p>Email: {currentUser._delegate.email}</p>
      <SignOutButton />
    </div>
  );
}

export default Account;
