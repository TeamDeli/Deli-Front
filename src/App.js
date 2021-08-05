import React from "react";
//import Styled from 'styled-components';
import AddFriends from "./pages/AddFriends";
import Profile from "./pages/Profile";
import Test from "./pages/Test";
import "./App.css";
import "antd/dist/antd.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import LandingPage from "./pages/LandingPage/LandingPage";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact component={LandingPage}></Route>
        <Route
          exact
          path="/profile"
          component={() => <Profile></Profile>}
        ></Route>
      </Switch>
    </Router>
  );
}
export default App;