import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/auth/NavBar";
import { auth } from "./config/firebase";
import React, { useState } from "react";


function App() {


  return (
    <div className="App">
      <NavBar />
    </div>
  );
}

export default App;
