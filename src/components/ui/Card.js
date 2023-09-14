import React from "react";
import style from './Card.module.css';

const Card = props => {


    return (
        <div className={`${props.styleClass} ${style.card}`}>
            {props.children}
        </div>
    )
}

export default Card;