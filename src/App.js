import React from "react";
//import Styled from 'styled-components';

import Product from "./pages/Product";
import NavBar from "./components/NavBar/NavBar";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <NavBar/>
      <Switch>
        <Route
          exact
          path="/product"
          component={() => <Product></Product>}
        ></Route>
      </Switch>
    </Router>
  );
}
export default App;
