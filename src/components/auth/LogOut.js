import React from "react";
import { auth } from '../../config/firebase';
import { signOut } from "firebase/auth";
import style from "./LogOut.module.css"

const LogOut = (props) => {
  async function logOut() {
    try {
      await signOut(auth);
      props.logout()
    } catch (err) {
      console.error(err);
    }
  }

  const userLogInStateListener = auth.onAuthStateChanged((user) => {
    {
      if (!user) {
        logOut();
      }
    }
  });

  return (
    <div className={style.logoutDiv} >
      <p>Hello, {auth?.currentUser?.email.slice(0, auth?.currentUser?.email.indexOf('@'))}!</p>
      <button onClick={logOut}>Kijelentkezés</button>
    </div>
  );
};

export default LogOut;
