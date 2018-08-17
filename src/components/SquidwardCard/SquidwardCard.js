import React from "react";
import "./SquidwardCard.css";

const SquidwardCard = (props) => (
  <div className="card">
    <div className="img-container">
      <img
        alt="Squidward"
        src="https://vignette2.wikia.nocookie.net/fictionalcharacters/images/a/ac/Squidward.png/revision/latest?cb=20131121012626"
      />
    </div>
    <div className="content">
      <ul>
        <li>
          <center>
            <strong>Name:</strong> Squidward
          </center>
        </li>
        <li>
          <center>
            <button onClick={props.handleClick}>#bestCharacter</button> 
          </center>
        </li>
      </ul>
    </div>
  </div>
);

export default SquidwardCard;
