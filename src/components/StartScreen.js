import React, { useEffect, useState } from "react";
import { signOut } from "firebase/auth";
import { auth, db } from "../config/firebase";
import { getDocs, collection, onSnapshot } from "firebase/firestore";
import style from "./StartScreen.module.css";
import LogOut from "./auth/LogOut";

const StartScreen = (props) => {
  // const [questions, setQuestions] = useState([]);

  // const colRef = collection(db, "questions");

  // useEffect(() => {
  //     //READ THE DATA
  //   getDocs(colRef).then((snapshot) => {
  //       let questions = [];
  //       snapshot.docs.forEach((doc) => {
  //         questions.push({ ...doc.data(), id: doc.id });
  //       });
  //       setQuestions(questions)
  //   }).catch(err => {console.error(err)});
    
  // }, []);

  
  return (
    <div>
      <LogOut logout={props.logout} />
          
    </div>
  );
};

export default StartScreen;
