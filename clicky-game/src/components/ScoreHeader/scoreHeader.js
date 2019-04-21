import React from "react";
import "./style.css"

function ScoreHeader(props) {
  return (
    <div>
      <ul className="nav">
        <li className="headerLogo">Clicky Game</li>
        <li className="clickImage">Click an image to begin!</li>
        <li className="score">Score: {props.score} | Top Score: {props.topscore}</li>
      </ul>
    </div>
  )
};

export default ScoreHeader;