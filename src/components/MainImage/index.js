import React from "react";
import { OptionContext } from "../Context/OptionContext";
import { ReactComponent as SvgHeart } from "./heart.svg";
import "./MainImage.css";

function MainImage() {
  const { setMenuOption } = React.useContext(OptionContext);
  return (
    <div className="flx flx-col flx-center main-image-container">
      <div className="flx flx-center">
        <div className="flx flx-center main-image-circle-outer">
          <div className="flx flx-col main-image-hearts">
            <SvgHeart className="heart" id="heart1" onClick={() => setMenuOption("Map")}/>
            <SvgHeart className="heart" id="heart2"/>
            <SvgHeart className="heart" id="heart3"/>
          </div>
  
          <div className="flx flx-col flx-center main-image-circle-inner">
            <span className="main-image-happy">HAPPY</span>
            <span className="main-image-day">VALENTINE'S</span>
            <span className="main-image-day">DAY</span>
          </div>
  
          <div className="flx flx-col main-image-hearts">
            <SvgHeart className="heart" id="heart4"/>
            <SvgHeart className="heart" id="heart5"/>
            <SvgHeart className="heart" id="heart6"/>
          </div>
        </div>
      </div>
      <p className="main-image-p">Cada corazón es un detalle</p>
      <p className="main-image-p">Puedes dar click</p>
    </div>
  );
}

export { MainImage };