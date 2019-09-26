import React from 'react';
import './App.css';
import { Route } from "react-router-dom";
import Header from './Components/Header';
import PrisonsList from './Components/prisons';
import PrisonersList from './Components/prisoner';
import WelcomePage from './Components/welcomePage';
import Admin from './Components/Admin';

export default function App() {
  return (
    <div className="App">
      <Header/>
      <Route exact path='/' component={WelcomePage}/>
      <Route exact path='/prisoners' component={PrisonersList}/>
      <Route path='/prisons' component={PrisonsList}/>
      <Route path='/prisoners/:id' component={PrisonersList}/>
      <Route path='/admin' component={Admin}/>
    </div>
  );
}
