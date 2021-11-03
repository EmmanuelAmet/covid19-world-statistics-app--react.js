import React from 'react';
// react router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// pages
import Home from './Home';
import About from './About';
import Error from './Error';
// navbar
import Navbar from './Navbar';
import Product from '../10-prop-types/setup/Product';
const ReactRouterSetup = () => {
  return <Router>
    <Navbar/>
    <Switch>
      <Route exact path="/">
      <Home />
    </Route>
    <Route path="/about">
      <About/>
    </Route>
    <Route path="/product/:country" children={<Product/>}>
        
    </Route>
    <Route path="*">
      <Error/>
    </Route>
    </Switch>
  </Router>;
};

export default ReactRouterSetup;
