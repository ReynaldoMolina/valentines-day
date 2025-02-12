import React from "react";
import { OptionContext } from "../Context/OptionContext";
import { APIProvider } from "@vis.gl/react-google-maps";
import { MainImage } from '../MainImage';
import { IconBack } from '../IconBack';
import { CustomMap } from '../CustomMap';
import { Puzzle } from "../Puzzle";
import { Timer } from "../Timer";
import { Letter } from "../Letter";
import { Letter2 } from "../Letter2";
import { Message } from "../Message";

const apiKey = process.env.REACT_APP_API_KEY;
const components = {
  "Menu": () => <MainImage/>,
  "Map": () => (
    <APIProvider apiKey={apiKey}>
      <CustomMap/>
    </APIProvider>
  ),
  "Puzzle": () => <Puzzle/>,
  "Timer": () => <Timer/>,
  "Letter": () => <Letter/>,
  "Letter2": () => <Letter2/>,
  "Message": () => <Message/>
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