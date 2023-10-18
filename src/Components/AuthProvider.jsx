/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */


import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider();
export const auth = getAuth(app);


const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
  }


  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);

  }

  const signOutt = () => {
    setLoading(true);
    return signOut(auth);
  }

  useEffect(() => {

    const unSubscribe = onAuthStateChanged(auth, currentUser => {
      console.log("User in the auth state change", currentUser);
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe()
    }

  }, [])


  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider)
  }



  const authInfo = {
    googleSignIn,
    user,
    setUser,
    loading,
    createUser,
    signIn,
    signOutt,
  }

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;