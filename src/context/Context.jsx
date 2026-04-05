import React, { createContext, useEffect, useState } from "react";

import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

import app from "../firebase.config";
const AuthContext = createContext();
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

const Authprovider = ({ children }) => {
  const [user, setuser] = useState(null);
  const [loading, setloading] = useState(true);

  const createUser = (email, password) => {
    setloading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setloading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const GooglesignIn = () => {
    setloading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const updateUser = (updateData) => {
    return updateProfile(auth.currentUser, updateData);
  };

  const logout = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      console.log(currentuser);

      setloading(false);
      setuser(currentuser);
    });

    return () => {
      return unsubscribe();
    };
  }, []);

  const aunthInfo = {
    updateUser,
    createUser,
    user,
    setuser,
    logout,
    signIn,
    setloading,
    GooglesignIn,
    loading,
  };
  return <AuthContext value={aunthInfo}>{children}</AuthContext>;
};

export default Authprovider;
