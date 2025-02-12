import React from "react";
import { OptionContext } from "../Context/OptionContext";
import { ReactComponent as SvgBack } from "./back.svg";
import "./IconBack.css";

function IconBack() {
  const { menuOption, setMenuOption } = React.useContext(OptionContext);
  return (
    <div className={`flx ${menuOption === "Menu" && "hidden"}`}>
      <SvgBack className="flx icon-back" onClick={() => setMenuOption("Menu")}/>
    </div>
  );
}

export { IconBack };