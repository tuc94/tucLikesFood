import React from 'react';
import './App.css';
import { useState } from 'react';
import AppSlider from "./componets/AppSlider"



function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={"IMG-1107.jpg"} alt="" width="500" height="600"/>
        <p>
          Rating this meal from 0-10
        </p>
        <AppSlider />
      </header>
    </div>
  );
}

export default App;
