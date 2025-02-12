import React from "react";
import "./Letter.css";

function Letter() {
  return (
    <div className="flx flx-col flx-center letter-container">
      <div className="valentines-day-card">
        <div className="clouds"></div>
        <div className="hearts">
          <div className="heartOne">
            <div className="left-side"></div>
            <div className="right-side"></div>
          </div>
          <div className="heartTwo">
            <div className="left-side"></div>
            <div className="right-side"></div>
          </div>
              <div className="heartThree">
            <div className="left-side"></div>
            <div className="right-side"></div>
          </div>
          <div className="heartFour">
            <div className="left-side"></div>
            <div className="right-side"></div>
          </div>
          <div className="heartFive">
          <div className="left-side"></div>
            <div className="right-side"></div>
          </div>
        </div>

        <div className="text"><span>¡Feliz día<br/>de los enamorados!</span></div>
      </div>
      <p className="hover">- Da click en el texto -</p>
    </div>
  );
}

export { Letter };