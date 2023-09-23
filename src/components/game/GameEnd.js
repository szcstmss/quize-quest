import React from "react";
import style from "./GameEnd.module.css";

const GameEnd = props => {

    const clickHandler = () => {
        props.backToStart()
    }

    return <div className={style.end}>
        <h2>Elért Pontszám:</h2>
        <h1>{props.score}</h1>
        <button onClick={clickHandler}>Tovább</button>
    </div>
}

export default GameEnd;