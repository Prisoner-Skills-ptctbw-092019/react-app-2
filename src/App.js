import React from 'react';
import './App.css';
import { Route } from "react-router-dom";
import Header from './Components/Header';
import PrisonsList from './Components/prisons';
import PrisonersList from './Components/prisoner';
import WelcomePage from './Components/welcomePage'

function App() {
  return (
    <div className="App">
      <Header/>
      <Route exact path='/'/>
      <Route exact path='/prisoners' component={PrisonersList}/>
      <Route path='/prisons' component={PrisonsList}/>
      <Route path='/prisoners/:id' component={PrisonersList}/>
      <Route path='/admin' />
    </div>
  );
}

export default App;
