import React from "react";
import "./SpongeBobCard.css";

const SpongeBobCard = (props) => (
  <div className="card">
    <div className="img-container">
      <img
        alt="SpongeBob"
        src="https://upload.wikimedia.org/wikipedia/en/thumb/4/47/Spongebob-squarepants.svg/666px-Spongebob-squarepants.svg.png"
      />
    </div>
    <div className="content">
      <ul>
        <li>
        <center>
          <strong>Name:</strong> SpongeBob
        </center>
        </li>
        <li>
          <center>
            <button id='button2' onClick={props.handleClick}>Krusty Krab Pizza!</button>
          </center>
        </li>
      </ul>
    </div>
  </div>
);

export default SpongeBobCard;
