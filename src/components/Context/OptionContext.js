import React from "react";

const OptionContext = React.createContext(); 

function OptionProvider({ children }) {
  const [menuOption, setMenuOption] = React.useState("Menu");

  return (
    <OptionContext.Provider value={{
      menuOption, setMenuOption,
    }}>
      {children}
    </OptionContext.Provider>
  );
}

export { OptionContext, OptionProvider };