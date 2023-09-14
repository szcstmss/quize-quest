import React, { useState } from "react";
import { auth, googleProvider } from "../../config/firebase";
import Card from "../ui/Card";
import style from "./LogIn.module.css";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const LogIn = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signInGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error(err);
    }
  };

  const signIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
    }
  };

  const showCurrentUser = () => {
    console.log(auth?.currentUser?.email);
  };

  return (
    <Card styleClass={style.loginCard}>
      <div className="innerDiv">
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <div>
          <button onClick={signIn}>Sign in</button>
          <button onClick={signInGoogle}>Sign in With Google</button>
        </div>
      </div>
    </Card>
  );
};

export default LogIn;
