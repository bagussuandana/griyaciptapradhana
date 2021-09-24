import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from './Pages/Home'
import Price from './Pages/Price'
import Design from './Pages/Design'
import Project from './Pages/Project'
import Steel from './Pages/Steel'
import Furniture from './Pages/Furniture'
import NotFound from './Pages/NotFound'
import Guest from './Layouts/Guest';
import Error from './Layouts/Error';
import Profile from './Pages/Profile';

export default function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/">
          <Guest><Home /></Guest>
        </Route>
        <Route path="/about">
          <Guest><Profile /></Guest>
        </Route>
        <Route path="/price">
          <Guest><Price /></Guest>
        </Route>
        <Route path="/design">
          <Guest><Design /></Guest>
        </Route>
        <Route path="/project">
          <Guest><Project /></Guest>
        </Route>
        <Route path="/steel">
          <Guest><Steel /></Guest>
        </Route>
        <Route path="/furniture">
          <Guest><Furniture /></Guest>
        </Route>
        <Route path="*">
          <Error><NotFound /></Error>
        </Route>
      </Switch>
    </Router>
  )
}
