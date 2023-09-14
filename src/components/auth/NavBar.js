import React, { useState } from "react";
import { auth, googleProvider } from '../../config/firebase';
import LogIn from "./LogIn";
import LogOut from "./LogOut";


const NavBar = () => {

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
        <div>
            {isUserLoggedIn ? <LogOut logOut={logOutHandler}/> : <LogIn/>}
        </div>
    )
}

export default NavBar;