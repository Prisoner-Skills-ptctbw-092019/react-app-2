import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import { Header } from './Components/Header'

function App() {
  return (
    <div className="App">
      <Header/>
      {/* <Route exact path ='/' component = {Header}/>
      <Route path ='/:id' component = {Prisoner}/>
      <Route path ='/adminPanel' component = {AdminPanel}/> */}
    </div>
  );
}

export default App;
