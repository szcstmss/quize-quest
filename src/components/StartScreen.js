import React, { useEffect, useState } from "react";
import Records from "./start_game/Records";
import LogOut from "./auth/LogOut";
import StartGame from "./start_game/StartGame";
import GameScreen from "./GameScreen";

const StartScreen = (props) => {
  const [isInProgress, setIsInProgress] = useState(false);
  const [length, setLength] = useState();


  const gameStartHandler = (l) => {
    setLength(l)
    setIsInProgress(true)
  }


  return (
    <div>
      {!isInProgress ? <div>
        <LogOut logout={props.logout} />
        <StartGame setLength={gameStartHandler} />
        <Records />
      </div> : <GameScreen gameLength={length} />}
    </div>
  );
};

export default StartScreen;
