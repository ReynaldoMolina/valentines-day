import React from "react";
import "./Message.css";
import { ReactComponent as SvgHeart2 } from "./heart2.svg";

function Message() {
  return (
    <div className="flx flx-col flx-center message-container">
      <h1 className="title">Hola</h1>
      <p className="message-p">
        Yo sé que no fue mucho, lo hice con mucho cariño.<br/>
        Cada día que lo hacía estaba pensando en vos 🤭.<br/>
        En serio espero te haya gustado 🥹
      </p>
      <h1 className="title">Te amo mi Jahaira</h1>
      <div className="flx flx-center message-heart">
        <SvgHeart2 className="message-heart-svg"/>
      </div>
    </div>
  );
}

export { Message };