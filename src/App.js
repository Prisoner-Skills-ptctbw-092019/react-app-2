import React from 'react';
import './App.css';
import { Route } from "react-router-dom";
import Header from './Components/Header';
import PrisonsList from './Components/prisons';
import PrisonersList from './Components/prisoner';
import WelcomePage from './Components/welcomePage'
import Listener from './Components/listener';

function App() {
  return (
    <div className="App">
      <Header/>
      <Route exact path={`/`} component={WelcomePage} />
      <Route path={`/prisons`} component={PrisonsList} />
      <Route path={`/prisoners`} component={PrisonersList} />
      <Route path={`/listener`} component={Listener} />
    </div>
  );
}

export default App;
