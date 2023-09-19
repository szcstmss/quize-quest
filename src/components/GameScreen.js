import React, { useEffect, useState } from "react";
import style from "./GameScreen.module.css";
import { auth, db } from "../config/firebase";
import { getDocs, collection, query, where, orderBy } from "firebase/firestore";

const GameScreen = (props) => {
  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);

  const colRef = collection(db, "questions");
  useEffect(() => {
    //READ THE DATA
    const getQuestions = async () => {
      try {
        const data = await getDocs(colRef);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));

        const getRandomQuestions = () => {
          const randomQuestions = new Set();
          while (randomQuestions.size < props.gameLength) {
            let x = Math.floor(Math.random() * filteredData.length);
            randomQuestions.add(filteredData[x]);
          }
          setQuestions(Array.from(randomQuestions))
        };
        getRandomQuestions();
      } catch (err) {
        console.error(err);
      }
    };

    getQuestions();
  }, []);

  const nextQuestion = () => {
    
  }

  const checkAnswer = (ans) => {
    if(ans === questions[index].correctAns){
        setScore((prevScore) => {return prevScore+1})
    }
    increaseAndCheckIndex()
  }

  const increaseAndCheckIndex = () => {
    setIndex((prevIndex) => {return prevIndex + 1});
    if(index >= props.gameLength){
        
    }
  }
  


  return (
    <div className={style.gameDiv}>
      {questions[index] && <h2>{questions[index].question}</h2>}
      {props.gameLength}
      <div className={style.answers}>
        {questions[index] && <button onClick={() => {checkAnswer(questions[index].ans1)}}>{questions[index].ans1}</button>}
        {questions[index] && <button onClick={() => {checkAnswer(questions[index].ans2)}}>{questions[index].ans2}</button>}
        {questions[index] && <button onClick={() => {checkAnswer(questions[index].ans3)}}>{questions[index].ans3}</button>}
        {questions[index] && <button onClick={() => {checkAnswer(questions[index].ans4)}}>{questions[index].ans4}</button>}
      </div>
      {score}
    </div>
  );
};

export default GameScreen;
