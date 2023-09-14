import React, { useEffect, useState } from "react";
import { signOut } from "firebase/auth";
import { auth, db } from "../config/firebase";
import { getDocs, collection, onSnapshot } from "firebase/firestore";
import style from "./StartScreen.module.css";

const StartScreen = (props) => {
  const [questions, setQuestions] = useState([]);

  const colRef = collection(db, "questions");

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
      
      <div>
        {questions.map(q => (
            <div key={q.id}>
                <h1>{q.question}</h1>
                <ul>
                  <li>{q.ans1}</li>
                  <li>{q.ans2}</li>
                  <li>{q.ans3}</li>
                  <li>{q.ans4}</li>
                </ul>
                {q.correctAns}
            </div>
        ))}
      </div>
    </div>
  );
};

export default StartScreen;
