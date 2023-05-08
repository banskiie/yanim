import React, { useState, createContext } from "react";
import {
  auth,
  googleProvider,
} from "../config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

export const AuthContext = createContext({
  loggedInUser: {},
  signUp: (email, password) => {},
  signIn: (email, password) => {},
  signInWithGoogle: () => {},
  signInWithFacebook: () => {},
  signInWithTwitter: () => {},
  logout: () => {},
});

function AuthContextProvider({ children }) {
  const [loggedInUser, setLoggedInUser] = useState({});

  const signUp = async (email, password) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setLoggedInUser({ email: auth?.currentUser?.email });
    } catch (err) {
      // console.error(err);
      alert(err);
    }
  };

  const signIn = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setLoggedInUser({ email: auth?.currentUser?.email });
    } catch (err) {
      // console.error(err);
      alert("Incorrect email/password!");
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      setLoggedInUser({ email: auth?.currentUser?.email });
    } catch (err) {
      console.error(err);
    }
  };

  const signInWithFacebook = async () => {
    try {
      await signInWithPopup(auth, facebookProvider);
      setLoggedInUser({ email: auth?.currentUser?.email });
    } catch (err) {
      console.error(err);
    }
  };

  const signInWithTwitter = async () => {
    try {
      await signInWithPopup(auth, twitterProvider);
      setLoggedInUser({ email: auth?.currentUser?.email });
    } catch (err) {
      console.error(err);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      setLoggedInUser({});
    } catch (err) {
      // console.error(err);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        loggedInUser,
        signUp: signUp,
        signIn: signIn,
        signInWithGoogle: signInWithGoogle,
        signInWithFacebook: signInWithFacebook,
        signInWithTwitter: signInWithTwitter,
        logout: logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
