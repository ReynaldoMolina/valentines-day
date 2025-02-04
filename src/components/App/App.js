import React from 'react';
import { OptionProvider } from "../Context/OptionContext";
import { MainWindow } from '../MainWindow';
import './App.css';

function App() {

  return (
    <main className="flx flx-col main-container">
      <OptionProvider>
        <MainWindow/>
      </OptionProvider>
    </main>
  );
}

export default App;
