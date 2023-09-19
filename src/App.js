import "./App.css";
import LogIn from "./components/auth/LogIn";
import LogOut from "./components/auth/LogOut";
import { auth } from "./config/firebase";
import React, { useState } from "react";
import StartScreen from "./components/StartScreen";


function App() {

  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);


  const logOutHandler = async () => {
    setIsUserLoggedIn(false);
  }

  

  const userLogInStateListener = auth.onAuthStateChanged((user) => {
    {
      if (user) {
        setIsUserLoggedIn(true);
      } else {
        setIsUserLoggedIn(false);
      }
    }
  });
  

  return (
    <div className="App">
      {isUserLoggedIn ? <StartScreen logout={logOutHandler} /> : <LogIn />}
    </div>
  );
}

export default App;
