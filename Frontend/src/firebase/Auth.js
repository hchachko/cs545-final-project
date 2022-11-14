import React, { useState, useEffect } from "react";
import { FirebaseApp, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import firebase from "firebase/compat/app";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const firebaseConfig = {
    apiKey: "AIzaSyBQ699-SHlUk966aUkLDMLLHWkV2ZyfNbI",
    authDomain: "cs545-2b4b5.firebaseapp.com",
    projectId: "cs545-2b4b5",
    storageBucket: "cs545-2b4b5.appspot.com",
    messagingSenderId: "776609665540",
    appId: "1:776609665540:web:c4fab72444aabc83fedb51",
    measurementId: "G-M1VTWJ6N7Q",
  };
  const app = firebase.initializeApp(firebaseConfig);
  //const analytics = getAnalytics(app);
  const auth = firebase.auth();
  const db = firebase.firestore();
  const [currentUser, setCurrentUser] = useState(null);
  const [loadingUser, setLoadingUser] = useState(true);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoadingUser(false);
    });
  }, []);

  if (loadingUser) {
    return (
      <div>
        <h1>Loading....</h1>
      </div>
    );
  }

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
