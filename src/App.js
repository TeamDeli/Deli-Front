import React from "react";
import AddFriends from "./pages/AddFriends";
import Test from "./pages/Test";
import "./App.css";
import Calendar from './pages/Calendar';
import LandingPage from './pages/LandingPage/LandingPage'
import NavBar from './components/NavBar/NavBar'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route
          exact
          path="/calendar"
          component={() => <Calendar></Calendar>}
        ></Route>
      </Switch>
    </Router>
  );
}
export default App;