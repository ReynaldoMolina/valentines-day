import React from "react";
import { OptionContext } from "../Context/OptionContext";
import { APIProvider } from "@vis.gl/react-google-maps";
import { MainImage } from '../MainImage';
import { IconBack } from '../IconBack';
import { CustomMap } from '../CustomMap';
import { Puzzle } from "../Puzzle";
import { Timer } from "../Timer";

const apiKey = process.env.REACT_APP_API_KEY;
const components = {
  "Menu": () => <MainImage/>,
  "Map": () => (
    <APIProvider apiKey={apiKey}>
      <CustomMap/>
    </APIProvider>
  ),
  "Puzzle": () => <Puzzle/>,
  "Timer": () => <Timer/>
};

function MainWindow() {
  const { menuOption } = React.useContext(OptionContext);

  return (
    <>
      <IconBack/>
      {components[menuOption]()}
    </>
  );
}

export { MainWindow };