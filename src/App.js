import React from "react";
//import Styled from 'styled-components';
import Profile from "./pages/Profile";
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/profile"
          component={() => <Profile></Profile>}
        ></Route>
      </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;

