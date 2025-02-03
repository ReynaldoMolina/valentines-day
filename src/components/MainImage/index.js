import React from "react";
import { ReactComponent as SvgHeart } from "./heart.svg";
import "./MainImage.css";

function MainImage() {
  return (
    <div className="flx flx-center main-image-container">
      <div className="flx flx-center main-image-circle-outer">
        <div className="flx flx-col main-image-hearts">
          <SvgHeart className="heart" id="heart1"/>
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
  );
}

export { MainImage };