import React from "react";
import { auth } from '../../config/firebase';
import { signOut } from "firebase/auth";

const LogOut = (props) => {
  async function logOut() {
    try {
      await signOut(auth);
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
    <div>
      <p>{auth?.currentUser?.email}</p>
      <button onClick={logOut}>Sign Out</button>
    </div>
  );
};

export default LogOut;
