import React from "react";
import AddFriends from "./pages/AddFriends";
import Profile from "./pages/Profile";
import Calendar from './pages/Calendar';
import NavBar from "./components/NavBar/NavBar";
import LandingPage from "./pages/LandingPage/LandingPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import "antd/dist/antd.css";

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
        <Route path="/addFriends" exact component={AddFriends}></Route>
        ></Route>

      </Switch>
    </Router>
  );
}
export default App;