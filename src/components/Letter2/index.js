import React from "react";
import "./Letter2.css";

function Letter2() {
  return (
    <div className="flx flx-center valentines-day-card2-container">
      <div className="valentines-day-card2">
        <input id="open" type="checkbox"></input>
        <label className="open" for="open"></label>

        <div className="card-front">
          <div className="note">Click para abrir</div>
        </div>
        
        <div className="card-inside">
          <div className="text-one">¡Feliz
          </div>
          <div className="heart2"></div>
          <div className="smile"></div>
          <div className="eyes"></div>
        </div>
      </div>
    </div>
  );
}

export { Letter2 };