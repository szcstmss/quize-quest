import React from "react";
import style from "./Game.module.css";

const Game = props => {


    return <div className={style.game}>
        {`${props.length} / ${props.index}`}
        {props.question && <h2>{props.question.question}</h2>}
        {props.question && <button onClick={() => { props.checkAnswer(props.question.ans1) }}>{props.question.ans1}</button>}
        {props.question && <button onClick={() => { props.checkAnswer(props.question.ans2) }}>{props.question.ans2}</button>}
        {props.question && <button onClick={() => { props.checkAnswer(props.question.ans3) }}>{props.question.ans3}</button>}
        {props.question && <button onClick={() => { props.checkAnswer(props.question.ans4) }}>{props.question.ans4}</button>}
    </div>
}

export default Game;