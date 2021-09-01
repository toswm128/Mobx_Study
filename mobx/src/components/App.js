import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "../pages/Main";
import Serve from "../pages/Serve";
import Store, { ListContext } from "../Store/Store";

function App() {
  const [list, setList] = useState([]);
  const handleList = list => {
    setList(list);
  };

  return (
    <ListContext.Provider value={{ list: list, handleList }}>
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/serve" component={Serve} />
        </Switch>
      </Router>
    </ListContext.Provider>
  );
}

export default App;
