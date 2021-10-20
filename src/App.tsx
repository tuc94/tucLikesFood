import React from 'react';
import './App.css';
import Slider from "@material-ui/core/Slider";
import { useState } from 'react';

function App() {
  const [score, setScore] = useState("5");
  const marks = [
    {
      value: 1,
      label: '1',
    },
    {
      value: 2,
      label: '2',
    },
    {
      value: 3,
      label: '3',
    },
    {
      value: 4,
      label: '4',
    },
    {
      value: 5,
      label: '5',
    },
    {
      value: 6,
      label: '6',
    },
    {
      value: 7,
      label: '7',
    },
    {
      value: 8,
      label: '8',
    },
    {
      value: 9,
      label: '9',
    },
    {
      value: 10,
      label: '10',
    }
  ];
  
  function valuetext(value:any) {
    return `${value}°C`;
  }

  function handleChange (event: React.FormEvent<HTMLInputElement>,newValue: number | number[]) {
    setScore( event.currentTarget.value );
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={"IMG-1107.jpg"} alt="" width="500" height="600"/>
        <p>
          Rating this meal from 0-10
        </p>
        <div className="slider">
        <Slider
        aria-label="Small steps"
        defaultValue={5.0}
        getAriaValueText={valuetext}
        step={0.1}
        marks
        min={0}
        max={10}
        valueLabelDisplay="auto"
        onChange={ (e: React.FormEvent<HTMLInputElement>, val) => setScore(e.currentTarget.value) } 
      />
      <p>{score}</p>
      </div>
      </header>
    </div>
  );
}

export default App;
