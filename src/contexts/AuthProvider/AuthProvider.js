import React, { createContext, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  GithubAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
import app from "../../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setuser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const gitHubProvider = new GithubAuthProvider();
  const faceBookProvider = new FacebookAuthProvider();

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const googleSigIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const gitHubSignIn = () => {
    return signInWithPopup(auth, gitHubProvider);
  };

  const facebookSignIn = () => {
    return signInWithPopup(auth, faceBookProvider);
  };

  const authInfo = {
    createUser,
    googleSigIn,
    gitHubSignIn,
    facebookSignIn,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
