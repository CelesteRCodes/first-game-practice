import React from "react";
import { ReactComponent as CowIcon } from "./assets/Cow.svg";
import "./Game.css";

export const Game = () => {
  const player = () => {
    console.log("I am eating");
  };

  return (
    <div className="pasture-wrapper">
      <CowIcon id="cowIcon" className="cow-player-icon" onClick={player} />
    </div>
  );
};
