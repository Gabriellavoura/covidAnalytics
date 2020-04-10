import React from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home/home';
import About from './pages/About/about';

export default function Routes(){
  return(
    <BrowserRouter basename="/">
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/about" component={About}></Route>
      </Switch>
    </BrowserRouter>
  );

}