import React, { useEffect, useState } from "react";
import style from "./GameScreen.module.css";
import { auth, db } from "../config/firebase";
import { getDocs, collection, addDoc, serverTimestamp } from "firebase/firestore";
import Game from "./game/Game";
import GameEnd from "./game/GameEnd";

const GameScreen = (props) => {
  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [hasEnded, setHasEnded] = useState(false)

  const questionsRef = collection(db, "questions");
  useEffect(() => {
    //READ THE DATA
    const getQuestions = async () => {
      try {
        const data = await getDocs(questionsRef);
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


  const checkAnswer = (ans) => {
    if (ans === questions[index].correctAns) {
      setScore((prevScore) => { return prevScore + 1 })
    }
    increaseAndCheckIndex()
  }

  const recordsRef = collection(db, "records");
  const addRecord = async () => {
    try {
      await addDoc(recordsRef, { maxScore: props.gameLength, score: score, user: auth.currentUser.uid, date: serverTimestamp() })
    } catch (error) {
      console.error(error)
    }
  }

  const increaseAndCheckIndex = () => {
    setIndex((prevIndex) => { return prevIndex + 1 });
    if (index === props.gameLength - 1) {
      addRecord()
      setHasEnded(true)
    }
  }

  const backToStartHandler = () => {
    props.backToStart()
  }





  return (
    <div className={style.gameDiv}>
      {!hasEnded ? <Game question={questions[index]} index={index} length={props.gameLength} checkAnswer={checkAnswer} /> : <GameEnd backToStart={backToStartHandler} score={score} />}
    </div>
  );
};

export default GameScreen;
