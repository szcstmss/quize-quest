import React, { useState } from "react";
import { auth, googleProvider } from "../../config/firebase";
import Card from "../ui/Card";
import googleLogo from '../../assets/google_logo.png'
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
  const [isErrorMsg, setIsErrorMsg] = useState(false)
  const [errorMsg, setErrorMsg] = useState("");

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
      setIsErrorMsg(true)
      setErrorMsg("Hibás Bejelentkezési Adatok")
    }
  };

  const register = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      setIsErrorMsg(true)
      setErrorMsg("Létezik ilyen felhasználó")
    }
  };


  const showCurrentUser = () => {
    console.log(auth?.currentUser?.email);
  };

  return (
    <Card styleClass={style.loginCard}>
      <div className={style.innerDiv}>
        <h2>QuizQuest</h2>
        <div className={style.inputDiv}>
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder="Jelszó"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          {isErrorMsg && 
          <div className={style.errorDiv}>
            <p>
              {errorMsg}
            </p>
          </div>}
        </div>
        <div className={style.buttonDiv}>
          <button onClick={signIn} className={style.signInButton}>Bejelentkezés</button>
          <button onClick={register} className={style.registerButton}>Regisztrálás</button>
          <button onClick={signInGoogle} className={style.googleButton}><img src={googleLogo} alt=""></img>Sign in With Google</button>
        </div>
      </div>
    </Card>
  );
};

export default LogIn;
