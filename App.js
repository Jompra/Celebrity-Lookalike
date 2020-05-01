import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';

import Home from './Components/Home'
import Result from './Components/Result'

function App() {
  return (
		<BrowserRouter>
		<Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/result" component={Result}/>
		</Switch>

		</BrowserRouter>
	)
}

export default App;
