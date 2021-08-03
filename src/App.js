import React from "react";
//import Styled from 'styled-components';
import AddFriends from "./pages/AddFriends";
import Profile from "./pages/Profile";
import Test from "./pages/Test";
import "./App.css";
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
