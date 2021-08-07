import React from "react";
import AddFriends from "./pages/AddFriends";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/addFriends" exact component={AddFriends}></Route>
      </Switch>
    </Router>
  );
}

export default App;
