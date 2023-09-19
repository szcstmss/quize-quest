import React, {useEffect, useState} from "react";
import style from "./GameScreen.module.css";
import { auth, db } from "../config/firebase";
import { getDocs, collection, query, where, orderBy } from "firebase/firestore";


const GameScreen = props => {

    const [allQuestions, setAllQuestions] = useState([])
    const [questions, setQuestions] = useState([])

    const colRef = collection(db, "questions");
    useEffect(() => {
        //READ THE DATA
        const getQuestions = async () => {
            try{
                const data = await getDocs(colRef);
                const filteredData = data.docs.map((doc) => ({...doc.data(), id: doc.id}));
                setAllQuestions(filteredData)
            } catch (err) {
                console.error(err)
            }
        }
        getQuestions()

    }, [allQuestions, questions]);


    return (
        <div className={style.gameDiv}>
            <h2>Question</h2>
            {props.gameLength}
            {allQuestions.map(q => {
                <p>{q.questions}</p>
            })}
        </div>
    )
}

export default GameScreen;

