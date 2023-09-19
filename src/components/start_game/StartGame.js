import React, { useState } from "react";
import Card from "../ui/Card";
import style from "./StartGame.module.css";

const StartGame = props => {

    const [length, setLength] = useState();

    const checkedHandler = (l) => {
        setLength(l)
    }

    const submitHandler = (e) => {
        e.preventDefault();
        props.setLength(length)
    }

    return (
        <Card>
            <div className={style.startgameDiv}>
                <form onSubmit={submitHandler}>
                    <div className={style.selection}>
                        <label htmlFor="6">6</label>
                        <input id="6" type="radio" name="length" onChange={() => {checkedHandler(6)}}/>
                        <label htmlFor="12">12</label>
                        <input id="12" type="radio" name="length" onChange={() => {checkedHandler(12)}} />
                        <label htmlFor="24">24</label>
                        <input id="24" type="radio" name="length" onChange={() => {checkedHandler(24)}} />
                        <button>Indítás</button>

                    </div>
                </form>
            </div>
        </Card>
    )
}

export default StartGame;