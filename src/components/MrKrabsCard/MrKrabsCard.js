import React from "react";
import "./MrKrabsCard.css";

const MrKrabsCard = (props) => (
  <div className="card">
    <div className="img-container">
      <img
        alt="Mr. Krabs"
        src="https://vignette3.wikia.nocookie.net/vsbattles/images/8/80/Mr._Krabs.png/revision/latest?cb=20150919162131"
      />
    </div>
    <div className="content">
      <ul>
        <li>
          <center>
            <strong>Name:</strong> Mr. Krabs
          </center>
        </li>
        <li>
          <center>
            <button id='button1' onClick={props.handleClick}>Money</button> 
          </center>
        </li>
      </ul>
    </div>
  </div>
);

export default MrKrabsCard;
