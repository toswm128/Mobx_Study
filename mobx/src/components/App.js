import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "../pages/Main";
import Serve from "../pages/Serve";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/serve" component={Serve} />
      </Switch>
    </Router>
  );
}

export default App;
