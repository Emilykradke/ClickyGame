import React from "react";
import "./style.css"

function CharacterTile(props) {
  return (
    <div className="container">
      <div className="imageTile">
        <img alt="character" src={props.image}></img>
      </div>
    </div>
  )
}

export default CharacterTile;