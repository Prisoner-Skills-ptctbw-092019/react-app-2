import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Header from './Components/Header';
import Test from './Components/test';
import Prisoner from './Components/prisoner';

function App() {
  return (
    <div className="App">
      <Header/>
      <Prisoner />
      <Test/>
      {/* <header className="App-header">
        <p>home</p>
        <Test />
      </header> */}
    </div>
  );
}

export default App;
