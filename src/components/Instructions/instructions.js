import React from "react";
import "./style.css"

function Instructions(props) {
  return (
    <div className="banner">
      <h1 className="title">React Clicky Game</h1>
      <h2 className="instructions">Click on any image to earn points, but don't click on any image more than once!</h2>
    </div>
  )
}

export default Instructions;