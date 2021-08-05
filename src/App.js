import React from "react";
import AddFriends from "./pages/AddFriends";
import Profile from "./pages/Profile";
import Test from "./pages/Test";
import "./App.css";
import Calendar from './pages/Calendar';
import { BrowserRouter, Route, Switch } from "react-router-dom";
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