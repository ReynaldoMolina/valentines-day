import React from "react";
import { OptionContext } from "../Context/OptionContext";
import { ReactComponent as SvgBack } from "./back.svg";
import "./IconBack.css";

function IconBack() {
  const { menuOption, setMenuOption } = React.useContext(OptionContext);
  return (
    <div className="flx">
      <SvgBack className={`flx icon-back ${menuOption === "Menu" && "hidden"}`} onClick={() => setMenuOption("Menu")}/>
    </div>
  );
}

export { IconBack };